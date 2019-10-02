
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
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(10),
    paddingVertical: normalize(10),
    borderBottomWidth: normalize(0.5),
    borderBottomColor: '#646666'
  },
  audioIcon: {
    width: normalize(30),
    height: normalize(30),
    marginRight: normalize(10)
  },
  titleSection: {
    flex: 1
  },
  titleText: {
    fontSize: normalize(20),
    color: '#ffffff',
    textAlign: 'left'
  },
  playIcon: {
    width: normalize(30),
    height: normalize(30),
    marginLeft: normalize(10)
  }
})


export default styles