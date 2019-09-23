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

    return(
      <View style={styles.container}>
        <TouchableOpacity>
          <Image style={styles.button} source={require('../../assets/icons/add.png')} />
        </TouchableOpacity>
        <View style={styles.detailsWrapper}>
          <Text numberOfLines={1} style={styles.title}>My Heart Will Go On</Text>
          <Text numberOfLines={1} style={styles.artist}>Celledion</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.moreButton}>
            <Image style={styles.moreButtonIcon} source={require('../../assets/icons/more.png')} />
          </View>
        </TouchableOpacity>
      </View>
    )

  }

}

export default TrackDetail