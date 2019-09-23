
import {
  StyleSheet,
  Dimensions
} from 'react-native'

import {
  normalize
} from '../../helpers'

const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  flexDirectionRow: {
    flexDirection: 'row',
    marginBottom: normalize(15)
  },
  flex1: {
    flex: 1
  },
  width40: {
    width: normalize(40)
  },
  slider: {
    marginTop: normalize(-15),
  },
  container: {
    paddingLeft: normalize(15),
    paddingRight: normalize(15),
    paddingTop: normalize(15),
    width: width
  },
  track: {
    height: normalize(2),
    borderRadius: normalize(1),
  },
  thumb: {
    width: normalize(10),
    height: normalize(10),
    borderRadius: normalize(5),
    backgroundColor: 'white',
  },
  text: {
    color: 'rgba(255, 255, 255, 0.72)',
    fontSize: normalize(14),
    textAlign:'center',
  }
})


export default styles