import React from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'


import styles from './style'


class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    return(
      <View style={styles.container}>
        <View style={styles.titleItem}>
          <Text style={styles.titleText}>Menu</Text>
        </View>
        <View style={styles.menuContainer}>
          <View style={styles.menuContent}>
            <View style={styles.navItem}>
              <Text style={styles.navText}>Play List</Text>
            </View>
            <View style={styles.navItem}>
              <Text style={styles.navText}>Top Charts</Text>
            </View>
            <View style={styles.navItem}>
              <Text style={styles.navText}>Rate the App</Text>
            </View>
            <View style={styles.navItem}>
              <Text style={styles.navText}>Terms & Conditions</Text>
            </View>
            <View style={styles.navItem}>
              <Text style={styles.navText}>About Company</Text>
            </View>
          </View>
          <Image style={styles.footerImage} source={require('../../assets/images/pin_chart.png')} />
        </View>
      </View>
    )

  }

}

export default Menu