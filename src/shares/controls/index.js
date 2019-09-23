import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'


import styles from './style'


class Controls extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    return(
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.0}>
          <Image style={styles.secondaryControl} source={require('../../assets/icons/repeat.png')}/>
        </TouchableOpacity>
        <View style={styles.width40} />
        <TouchableOpacity>
          <Image source={require('../../assets/icons/prev.png')}/>
        </TouchableOpacity>
        <View style={styles.width20} />
        <TouchableOpacity>
          <View style={styles.playButton}>
            <Image source={require('../../assets/icons/play_white.png')}/>
          </View>
        </TouchableOpacity>
        <View style={styles.width20} />
        <TouchableOpacity>
          <Image source={require('../../assets/icons/next.png')}/>
        </TouchableOpacity>
        <View style={styles.width40} />
        <TouchableOpacity activeOpacity={0.0}>
          <Image style={styles.secondaryControl} source={require('../../assets/icons/loop.png')}/>
        </TouchableOpacity>
      </View>
    )

  }

}

export default Controls