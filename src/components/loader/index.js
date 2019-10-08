import React from 'react'
import {
  Image
} from 'react-native'


import styles from './style'


class Loader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    const { width, height } = this.props
    const loadStyle = {
      width,
      height
    }

    return(
      <Image style={[styles.loadImage, loadStyle]} source={require('../../assets/loading.gif')} />
    )

  }

}

export default Loader