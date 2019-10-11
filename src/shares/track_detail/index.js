import React from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  Text
} from 'react-native'


import styles from './style'


class TrackDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    const { track } = this.props

    return(
      <View style={styles.container}>
        <View style={styles.detailsWrapper}>
          <Text numberOfLines={1} style={styles.title}>{ track && track.title ? track.title : 'Unknown Song' }</Text>
          <Text numberOfLines={1} style={styles.artist}>{ track && track.author ? track.author : 'Unknown User' }</Text>
        </View>
      </View>
    )

  }

}

export default TrackDetail