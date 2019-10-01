
import { USER } from '../../configs/types'

const initState = {
  is_authed: false,
  token: '',

  play_list: [],
  about_company_content: ''
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

    case USER.SET_ABOUT_COMPANY:
      return {
        ...state,
        about_company_content: payload.data
      }

    default:
      return state
  }
}

export default user