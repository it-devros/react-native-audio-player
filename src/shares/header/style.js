
import {
  StyleSheet,
  Dimensions
} from 'react-native'

import {
  normalize
} from '../../helpers'

const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    padding: normalize(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#42c000'
  },
  logoImage: {
    width: normalize(30),
    height: normalize(30)
  },
  titleImage: {
    width: normalize(128),
    height: normalize(24)
  },
  titleSection: {
    flex: 1,
    alignItems:'center'
  },
  menuIcon: {
    width: normalize(30),
    height: normalize(30)
  }
})


export default styles