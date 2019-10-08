
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
    width: width,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#000000'
  },
  mainContainer: {
    flex: 1,
    width: width,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  itemContent: {
    flex: 1,
    width: width
  },
  playerContent: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: normalize(30)
  },
  topImage: {
    width: '100%',
    height: '100%'
  },
  audioElement: {
    height: 0,
    width: 0
  }
})


export default styles