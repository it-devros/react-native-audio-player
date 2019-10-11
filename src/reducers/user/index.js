
import { USER } from '../../configs/types'

const initState = {
  is_authed: false,
  token: '',

  play_list: [],
  live_play_list: [],
  about_company_content: '',

  current_play: null,
  current_index: null
}


const user = (state = initState, action) => {
  const { type, payload} = action
  
  switch(type){
    case USER.SIGNED_IN:
      return {
        ...state,
        is_authed: true,
        token: payload.token
      }
    
    case USER.SIGNED_OUT:
      return {
        ...state,
        is_authed: false,
        token: ''
      }
    
    case USER.SET_PLAY_LIST:
      return {
        ...state,
        play_list: Object.assign([], payload.data)
      }
    
    case USER.SET_LIVE_PLAY_LIST:
      return {
        ...state,
        live_play_list: Object.assign([], payload.data)
      }

    case USER.SET_ABOUT_COMPANY:
      return {
        ...state,
        about_company_content: payload.data
      }
    
    case USER.SET_CURRENT_PLAY:
      return {
        ...state,
        current_play: Object.assign({}, payload.data),
        current_index: payload.index
      }

    default:
      return state
  }
}

export default user