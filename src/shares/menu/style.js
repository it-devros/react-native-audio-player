
import {
  StyleSheet,
  Dimensions
} from 'react-native'

import {
  normalize
} from '../../helpers'

const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  backImage: {
    width: '100%',
    height: '100%'
  },
  container: {
    flex: 1,
    width: width * 2 / 3,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  titleItem: {
    padding: normalize(10),
    alignItems: 'center'
  },
  titleText: {
    fontSize: normalize(22),
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  divider: {
    height: normalize(3),
    width: width * 2 / 3,
    backgroundColor: '#ffffff'
  },
  navItem: {
    paddingLeft: normalize(10),
    paddingRight: normalize(10),
    paddingTop: normalize(30)
  },
  navText: {
    fontSize: normalize(18),
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center'
  },
  menuContainer: {
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  menuContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  footerImage: {
    width: width * 2 / 3,
    height: width * 2 * 438 / (3 * 745)
  }
})


export default styles