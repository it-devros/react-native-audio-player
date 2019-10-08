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
  pad(position % 60, 2),
])



class LiveSeekBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    const {
      currentPosition
    } = this.props

    const elapsed = minutesAndSeconds(currentPosition)

    return(
      <View style={styles.container}>
        <View style={styles.flexDirectionRow}>
          <Text style={styles.text}>
            {`${elapsed[0]} : ${elapsed[1]}`}
          </Text>
          <Text style={styles.text}>
            {`-- : --`}
          </Text>
        </View>
        <Slider
          maximumValue={100}
          disabled={true}
          style={styles.slider}
          value={100}
          minimumTrackTintColor='#fff'
          maximumTrackTintColor='rgba(255, 255, 255, 0.14)'
          thumbStyle={styles.thumb}
          trackStyle={styles.track}
        />
      </View>
    )

  }

}

export default LiveSeekBar