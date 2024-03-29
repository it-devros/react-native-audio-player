import React from 'react'
import {
  View,
  ImageBackground,
  ScrollView
} from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  Loader
} from '../../components'

import {
  Header,
  AudioItem
} from '../../shares'

import {
  commonActions,
  userActions
} from '../../actions'

import {
  normalize
} from '../../helpers'


import styles from './style'


const mapDispatchToProps = (dispatch) => {
  return ({
    userActions: bindActionCreators(userActions, dispatch),
    commonActions: bindActionCreators(commonActions, dispatch)
  })
}

const mapStateToProps = (state) => {
  return ({
    loading: state.common.loading,
    label: state.common.label,

    play_list: state.user.play_list
  })
}


class TopChart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

    this.startPlay = this.startPlay.bind(this)
  }

  componentDidMount() {
    this.props.userActions.getPlayList()
  }

  startPlay(item, index) {
    this.props.userActions.setCurrentPlay(item, index)
    this.props.navigation.navigate('Play')
  }


  render() {

    return(
      <ImageBackground style={styles.backImage} source={require('../../assets/images/background_play_list.png')}>
        <View style={styles.container}>
          <Header {...this.props} title={'Top Charts'} />
          {
            this.props.play_list.length > 0 ?
              <View style={styles.listContainer}>
                <ScrollView>
                  {
                    this.props.play_list.map((item, index) => {
                      if (item.top_chart == 'Yes') {
                        return (
                          <AudioItem
                            key={`play_item_${index}`}
                            item={item}
                            index={index}
                            onPress={this.startPlay}
                          />
                        )
                      }
                    })
                  }
                </ScrollView>
              </View>
            :
              this.props.loading == true ?
                <View style={styles.mainContent}>
                  <Loader width={normalize(0)} height={normalize(0)} />
                </View>
              :    
                <View style={styles.mainContent}>
                  <Text style={styles.alertText}>No Data</Text>
                </View>
          }
        </View>
      </ImageBackground>
    )

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(TopChart)