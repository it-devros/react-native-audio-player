import React from 'react'
import {
  View,
  Text
} from 'react-native'

import Slider from 'react-native-slider'

import styles from './style'

const pad = (n, width, z=0) => {
  n = n + ''
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n
}

const minutesAndSeconds = (position) => ([
  pad(Math.floor(position / 60), 2),
  pad(position % 60, 2)
])

class SeekBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    const {
      trackLength,
      currentPosition,
      onSeek,
      onSlidingStart,
    } = this.props

    const elapsed = minutesAndSeconds(currentPosition)
    const remaining = minutesAndSeconds(trackLength)

    return(
      <View style={styles.container}>
        <View style={styles.flexDirectionRow}>
          <Text style={styles.text}>
            {`${elapsed[0]} : ${elapsed[1]}`}
          </Text>
          <Text style={styles.text}>
          {`${remaining[0]} : ${remaining[1]}`}
          </Text>
        </View>
        <Slider
          maximumValue={Math.max(trackLength, 1, currentPosition + 1)}
          onSlidingStart={onSlidingStart}
          onSlidingComplete={onSeek}
          value={currentPosition}
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