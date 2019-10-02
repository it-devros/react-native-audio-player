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

    const { live } = this.props

    return(
      <View style={styles.container}>
        {
          live == false ?
            <TouchableOpacity>
              <Image style={styles.button} source={require('../../assets/icons/add.png')} />
            </TouchableOpacity>
          :
            null
        }
        {
          live == false ?
            <View style={styles.detailsWrapper}>
              <Text numberOfLines={1} style={styles.title}>My Heart Will Go On</Text>
              <Text numberOfLines={1} style={styles.artist}>Celledion</Text>
            </View>
          :
            <View style={styles.detailsWrapper}>
              <Text numberOfLines={1} style={styles.title}>Live Streaming</Text>
            </View>
        }
        {
          live == false ?
            <TouchableOpacity>
              <View style={styles.moreButton}>
                <Image style={styles.moreButtonIcon} source={require('../../assets/icons/more.png')} />
              </View>
            </TouchableOpacity>
          :
            null
        }
      </View>
    )

  }

}

export default TrackDetail