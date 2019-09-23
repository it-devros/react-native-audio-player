import React from 'react'
import {
  View,
  Text
} from 'react-native'

import Slider from 'react-native-slider'

import styles from './style'


class SeekBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    return(
      <View style={styles.container}>
        <View style={styles.flexDirectionRow}>
          <Text style={styles.text}>
            {`00 : 00`}
          </Text>
          <View style={styles.flex1} />
          <Text style={styles.text}>
            {`00 : 00`}
          </Text>
        </View>
        <Slider
          maximumValue={100}
          style={styles.slider}
          minimumTrackTintColor='#fff'
          maximumTrackTintColor='rgba(255, 255, 255, 0.14)'
          thumbStyle={styles.thumb}
          trackStyle={styles.track}/>
      </View>
    )

  }

}

export default SeekBar