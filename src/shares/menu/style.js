
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
    flex: 1,
    width: width * 2 / 3,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#333333'
  }
})


export default styles