import React from 'react'
import {
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native'


import styles from './style'


class AudioItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

    this.startPlay = this.startPlay.bind(this)
  }

  startPlay() {
    const { onPress } = this.props
    onPress('fake')
  }

  render() {

    return(
      <View style={styles.container}>
        <Image style={styles.audioIcon} source={require('../../assets/icons/item.png')} />
        <View style={styles.titleSection}>
          <Text style={styles.titleText} numberOfLines={1}>My Heart Will Go on</Text>
        </View>
        <TouchableOpacity onPress={this.startPlay}>
          <Image style={styles.playIcon} source={require('../../assets/icons/play.png')} />
        </TouchableOpacity>
      </View>
    )

  }

}

export default AudioItem