import React from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  Text
} from 'react-native'


import styles from './style'


class LiveTrackDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    return(
      <View style={styles.container}>
        <View style={styles.detailsWrapper}>
          <Text numberOfLines={1} style={styles.title}>Live Streaming</Text>
        </View>
      </View>
    )

  }

}

export default LiveTrackDetail