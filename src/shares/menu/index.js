import React from 'react'
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native'


import styles from './style'


class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

    this.navigateTo = this.navigateTo.bind(this)
  }

  navigateTo(screen) {
    this.props.navigation.navigate(screen)
  }

  render() {

    return(
      <ImageBackground style={styles.backImage} source={require('../../assets/images/menuBack.png')}>
        <View style={styles.container}>
          <View style={styles.titleItem}>
            <Text style={styles.titleText}>Menu</Text>
          </View>
          <View style={styles.menuContainer}>
            <View style={styles.menuContent}>
              <View style={styles.navItem}>
                <TouchableOpacity onPress={() => this.navigateTo('PlayList')}>
                  <Text style={styles.navText}>Play List</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.navItem}>
                <TouchableOpacity onPress={() => this.navigateTo('TopChart')}>
                  <Text style={styles.navText}>Top Charts</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.navItem}>
                <TouchableOpacity>
                  <Text style={styles.navText}>Rate the App</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.navItem}>
                <TouchableOpacity onPress={() => this.navigateTo('TermsConditions')}>
                  <Text style={styles.navText}>Terms & Conditions</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.navItem}>
                <TouchableOpacity onPress={() => this.navigateTo('AboutCompany')}>
                  <Text style={styles.navText}>About Company</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Image style={styles.footerImage} source={require('../../assets/images/pin_chart.png')} />
          </View>
        </View>
      </ImageBackground>
    )

  }

}

export default Menu