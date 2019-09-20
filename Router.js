import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


import {
  createAppContainer
} from 'react-navigation'

import {
  createStackNavigator
} from 'react-navigation-stack'


import {
  PlayList
} from './src/screens'

import {
  normalize
} from './src/helpers'


const MainStack = {
  PlayList: { screen: PlayList }
}










const AppNavigator = createStackNavigator({
  ...MainStack
}, {
  mode: 'modal',
  headerMode: 'none',
})
const AppContainer = createAppContainer(AppNavigator)



const mapDispatchToProps = (dispatch) => {
  return ({
  })
}

const mapStateToProps = (state) => {
  return ({
  })
}


class Router extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <AppContainer />
    )
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(Router)