import React from 'react'
import {
  View,
  Text,
  ImageBackground
} from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Video from 'react-native-video'

import {
  Header,
  TrackDetail,
  SeekBar,
  Controls
} from '../../shares'

import {
  commonActions,
  userActions
} from '../../actions'


import styles from './style'


const mapDispatchToProps = (dispatch) => {
  return ({
    userActions: bindActionCreators(userActions, dispatch),
    commonActions: bindActionCreators(commonActions, dispatch)
  })
}

const mapStateToProps = (state) => {
  return ({
    loading: state.common.loading,
    label: state.common.label,

    play_list: state.user.play_list,
    current_play: state.user.current_play,
    current_index: state.user.current_index
  })
}


class Play extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isChanging: false,
      paused: false,
      repeatOn: false,
      shuffleOn: false,

      totalLength: 0,
      currentPosition: 0,
    }

    this.audioElement = null

    this.onLoadStart = this.onLoadStart.bind(this)
    this.onLoad = this.onLoad.bind(this)
    this.onProgress = this.onProgress.bind(this)
    this.seek = this.seek.bind(this)
    this.onEnd = this.onEnd.bind(this)
    this.onError = this.onError.bind(this)
    this.onBack = this.onBack.bind(this)
    this.onForward = this.onForward.bind(this)
  }

  onLoadStart() {
    this.props.commonActions.startLoading()
  }

  onLoad() {
    this.setState({
      totalLength: this.props.current_play.duration || 300,
      currentPosition: 0
    })
    this.props.commonActions.endLoading()
  }

  onProgress(data) {
    this.setState({
      currentPosition: Math.floor(data.currentTime)
    })
  }

  onEnd() {
    if (this.state.repeatOn == false) {
      if (this.state.shuffleOn == false) {
        if (this.props.current_index < this.props.play_list.length - 1) {
          let nextIndex = this.props.current_index + 1
          let nextTrack = Object.assign({}, this.props.play_list[nextIndex])
          this.props.userActions.setCurrentPlay(nextTrack, nextIndex)
        } else {
          this.setState({
            currentPosition: 0,
            paused: true
          })
          this.audioElement.seek(0)
        }
      } else {
        let nextIndex = Math.floor(Math.random() * this.props.play_list.length)
        let nextTrack = Object.assign({}, this.props.play_list[nextIndex])
        this.props.userActions.setCurrentPlay(nextTrack, nextIndex)
      }
    }
  }

  seek(time) {
    time = Math.round(time)
    this.audioElement && this.audioElement.seek(time)
    this.setState({
      currentPosition: time,
      paused: false
    })
  }

  onError(data) {
    console.log('error +++++++ ', data)
    this.onEnd()
  }

  onBack() {
    this.audioElement && this.audioElement.seek(0)
    this.setState({
      isChanging: true
    }, () => {
      if (this.state.shuffleOn == false) {
        let nextIndex = this.props.current_index - 1
        let nextTrack = Object.assign({}, this.props.play_list[nextIndex])
        this.props.userActions.setCurrentPlay(nextTrack, nextIndex)
      } else {
        let nextIndex = Math.floor(Math.random() * this.props.play_list.length)
        let nextTrack = Object.assign({}, this.props.play_list[nextIndex])
        this.props.userActions.setCurrentPlay(nextTrack, nextIndex)
      }
      this.setState({
        currentPosition: 0,
        totalLength: 0,
        paused: false,
        isChanging: false,
      })
    })
  }

  onForward() {
    this.audioElement && this.audioElement.seek(0)
    this.setState({
      isChanging: true
    }, () => {
      if (this.state.shuffleOn == false) {
        let nextIndex = this.props.current_index + 1
        let nextTrack = Object.assign({}, this.props.play_list[nextIndex])
        this.props.userActions.setCurrentPlay(nextTrack, nextIndex)
      } else {
        let nextIndex = Math.floor(Math.random() * this.props.play_list.length)
        let nextTrack = Object.assign({}, this.props.play_list[nextIndex])
        this.props.userActions.setCurrentPlay(nextTrack, nextIndex)
      }
      this.setState({
        currentPosition: 0,
        totalLength: 0,
        paused: false,
        isChanging: false,
      })
    })
  }

  render() {

    const {
      play_list,
      current_play,
      current_index
    } = this.props
    let track = null
    let video = null
    if (play_list.length > 0) {
      track = play_list[current_index]
      video = this.state.isChanging ? null : (<Video source={{uri: track.audio_url}}
        ref={ref => {
          this.audioElement = ref
        }}
        paused={this.state.paused}
        repeat={this.state.repeatOn}
        onLoadStart={this.onLoadStart}
        onLoad={this.onLoad}
        onProgress={this.onProgress}
        onEnd={this.onEnd}
        onError={this.onError}
        style={styles.audioElement} />)
    }

    return(
      <View style={styles.container}>
        {
          current_play == null ?
            <Header {...this.props} title={'Top Chart'} />
          :
            <Header {...this.props} title={current_play.title} />
        }
        <View style={styles.mainContainer}>
          <View style={styles.itemContent}>
            <ImageBackground style={styles.topImage} source={require('../../assets/images/play.png')}>
            </ImageBackground>
          </View>
          <View style={styles.playerContent}>
            <TrackDetail
              track={current_play}
            />
            <SeekBar
              onSeek={this.seek}
              trackLength={this.state.totalLength}
              onSlidingStart={() => this.setState({paused: true})}
              currentPosition={this.state.currentPosition}
            />
            <Controls
              repeatOn={this.state.repeatOn}
              shuffleOn={this.state.shuffleOn}
              onPressRepeat={() => this.setState({repeatOn : !this.state.repeatOn})}
              onPressShuffle={() => this.setState({shuffleOn: !this.state.shuffleOn})}
              forwardDisabled={this.props.current_index === this.props.play_list.length - 1}
              backDisabled={this.props.current_index === 0}
              onPressPlay={() => this.setState({paused: false})}
              onPressPause={() => this.setState({paused: true})}
              paused={this.state.paused}
              onBack={this.onBack}
              onForward={this.onForward}
              {...this.props}
            />
          </View>
        </View>
        { video }
      </View>
    )

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Play)