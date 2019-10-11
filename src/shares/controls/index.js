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


class Controls extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    const {
      paused,
      onPressPlay,
      onPressPause,
      repeatOn,
      shuffleOn,
      onPressRepeat,
      onPressShuffle,
      forwardDisabled,
      backDisabled,
      onBack,
      onForward
    } = this.props

    return(
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.0} onPress={onPressShuffle}>
          <Image
            style={[styles.secondaryControl, shuffleOn ? [] : styles.off]}
            source={require('../../assets/icons/shuffle.png')}
          />
        </TouchableOpacity>
        <View style={styles.width40} />
        <TouchableOpacity onPress={onBack} disabled={backDisabled}>
          <Image
            style={[styles.primaryControl, backDisabled ? styles.off : []]}
            source={require('../../assets/icons/prev.png')}
          />
        </TouchableOpacity>
        <View style={styles.width20} />
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
        <View style={styles.width20} />
        <TouchableOpacity onPress={onForward} disabled={forwardDisabled}>
          <Image
            style={[styles.primaryControl, forwardDisabled ? styles.off : []]}
            source={require('../../assets/icons/next.png')}
          />
        </TouchableOpacity>
        <View style={styles.width40} />
        <TouchableOpacity activeOpacity={0.0} onPress={onPressRepeat}>
          <Image
            style={[styles.secondaryControl, repeatOn ? [] : styles.off]}
            source={require('../../assets/icons/repeat.png')}
          />
        </TouchableOpacity>
      </View>
    )

  }

}

export default Controls