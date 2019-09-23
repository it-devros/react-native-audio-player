import React from 'react'
import {
  View,
  ImageBackground,
  ScrollView
} from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  Header,
  AudioItem
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
    label: state.common.label
  })
}


class PlayList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

    this.startPlay = this.startPlay.bind(this)

  }

  startPlay(audio_id) {
    this.props.navigation.navigate('Play')
  }

  render() {

    return(
      <ImageBackground style={styles.backImage} source={require('../../assets/images/background_play_list.png')}>
        <View style={styles.container}>
          <Header {...this.props}/>
          <ScrollView>
            <AudioItem onPress={this.startPlay} />
            <AudioItem onPress={this.startPlay} />
            <AudioItem onPress={this.startPlay} />
            <AudioItem onPress={this.startPlay} />
            <AudioItem onPress={this.startPlay} />
            <AudioItem onPress={this.startPlay} />
            <AudioItem onPress={this.startPlay} />
            <AudioItem onPress={this.startPlay} />
            <AudioItem onPress={this.startPlay} />
            <AudioItem onPress={this.startPlay} />
          </ScrollView>
        </View>
      </ImageBackground>
    )

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(PlayList)