
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
    padding: normalize(10),
    paddingTop: normalize(15),
    paddingBottom: normalize(15),
    borderBottomWidth: normalize(1),
    borderBottomColor: '#f2f2f2'
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