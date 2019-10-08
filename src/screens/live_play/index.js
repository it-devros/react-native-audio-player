import React from 'react'
import {
  View,
  ImageBackground
} from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Video from 'react-native-video'

import {
  Header,
  LiveTrackDetail,
  LiveSeekBar,
  LiveControls
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
    live_play_list: state.user.live_play_list
  })
}


class LivePlay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      paused: false,
      trackIndex: 0,

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
  }

  componentDidMount() {
    this.props.userActions.getLivePlayList()
  }

  onLoadStart() {
    this.props.commonActions.startLoading()
  }

  onLoad(data) {
    this.setState({
      totalLength: Math.floor(data.duration),
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
    this.setState({
      trackIndex: this.state.trackIndex + 1
    })
  }

  seek(time) {
    time = Math.round(time)
    this.refs.audioElement && this.refs.audioElement.seek(time)
    this.setState({
      currentPosition: time,
      paused: false
    })
  }

  onError() {
  }


  render() {

    const { live_play_list } = this.props
    let track = null
    let video = null
    if (live_play_list.length > 0) {
      track = live_play_list[this.state.trackIndex]
      video = <Video source={{uri: track.liveStream}}
        ref={(ref) => {
          this.audioElement = ref
        }}
        paused={this.state.paused}
        onLoadStart={this.onLoadStart}
        onLoad={this.onLoad}
        onProgress={this.onProgress}
        onEnd={this.onEnd}
        onError={this.onError}
        style={styles.audioElement} />
    }

    return(
      <View style={styles.container}>
        <Header {...this.props} title={'Live Player'} />
        <View style={styles.mainContainer}>
          <View style={styles.itemContent}>
            <ImageBackground style={styles.topImage} source={require('../../assets/images/play.png')}>
            </ImageBackground>
          </View>
          <View style={styles.playerContent}>
            <LiveTrackDetail />
            <LiveSeekBar
              currentPosition={this.state.currentPosition}
            />
            <LiveControls
              onPressPlay={() => this.setState({paused: false})}
              onPressPause={() => this.setState({paused: true})}
              paused={this.state.paused}
              {...this.props}
            />
          </View>
        </View>
        { video }
      </View>
    )

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(LivePlay)