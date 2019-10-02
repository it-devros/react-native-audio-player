import React from 'react'
import {
  View,
  Text,
  ImageBackground
} from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

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
    label: state.common.label
  })
}


class LivePlay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    return(
      <View style={styles.container}>
        <Header {...this.props} title={'Live Player'} />
        <View style={styles.mainContainer}>
          <View style={styles.itemContent}>
            <ImageBackground style={styles.topImage} source={require('../../assets/images/play.png')}>
            </ImageBackground>
          </View>
          <View style={styles.playerContent}>
            <TrackDetail live={true} />
            <SeekBar />
            <Controls live={true} />
          </View>
        </View>
      </View>
    )

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(LivePlay)