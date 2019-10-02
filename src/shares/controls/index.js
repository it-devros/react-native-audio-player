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

    const { live } = this.props

    return(
      <View style={styles.container}>
        {
          live == false ?
            <TouchableOpacity activeOpacity={0.0}>
              <Image style={styles.secondaryControl} source={require('../../assets/icons/shuffle.png')}/>
            </TouchableOpacity>
          :
            null
        }        
        <View style={styles.width40} />
        {
          live == false ?
            <TouchableOpacity>
              <Image style={styles.primaryControl} source={require('../../assets/icons/prev.png')}/>
            </TouchableOpacity>
          :
            null
        }
        <View style={styles.width20} />
        <TouchableOpacity>
          <View style={styles.playButton}>
            <Image style={styles.primaryControl} source={require('../../assets/icons/play_white.png')}/>
          </View>
        </TouchableOpacity>
        <View style={styles.width20} />
        {
          live == false ?
            <TouchableOpacity>
              <Image style={styles.primaryControl} source={require('../../assets/icons/next.png')}/>
            </TouchableOpacity>
          :
            null
        }
        <View style={styles.width40} />
        {
          live == false ?
            <TouchableOpacity activeOpacity={0.0}>
              <Image style={styles.secondaryControl} source={require('../../assets/icons/repeat.png')}/>
            </TouchableOpacity>
          :
            null
        }
      </View>
    )

  }

}

export default Controls