import React from 'react'
import {
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native'


import styles from './style'


class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    const { navigation } = this.props

    return(
      <View style={styles.container}>
        <Image style={styles.logoImage} source={require('../../assets/images/logo.png')} />
        <View style={styles.titleSection}>
          <Image style={styles.titleImage} source={require('../../assets/icons/title.png')} />
        </View>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image style={styles.menuIcon} source={require('../../assets/icons/list.png')} />
        </TouchableOpacity>
      </View>
    )

  }

}

export default Header