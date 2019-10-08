import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'


import {
  Loader
} from '../../components'

import {
  normalize
} from '../../helpers'


import styles from './style'


class LiveControls extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    const {
      paused,
      onPressPlay,
      onPressPause
    } = this.props

    return(
      <View style={styles.container}>
        {
          this.props.loading == true ?
            <Loader width={normalize(80)} height={normalize(80)} />
          :
            paused == false ?
              <TouchableOpacity onPress={onPressPause}>
                <View style={styles.playButton}>
                  <Image style={styles.primaryControl} source={require('../../assets/icons/pause_white.png')}/>
                </View>
              </TouchableOpacity>
            :
              <TouchableOpacity onPress={onPressPlay}>
                <View style={styles.playButton}>
                  <Image style={styles.primaryControl} source={require('../../assets/icons/play_white.png')}/>
                </View>
              </TouchableOpacity>
        }
      </View>
    )

  }

}

export default LiveControls