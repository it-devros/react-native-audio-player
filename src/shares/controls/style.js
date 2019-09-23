
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: normalize(8),
  },
  playButton: {
    height: normalize(72),
    width: normalize(72),
    borderWidth: normalize(1),
    borderColor: 'white',
    borderRadius: normalize(72) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryControl: {
    height: normalize(18),
    width: normalize(18),
  },
  off: {
    opacity: 0.30,
  },
  width40: {
    width: normalize(40)
  },
  width20: {
    width: normalize(20)
  }
})


export default styles