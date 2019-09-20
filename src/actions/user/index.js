import { USER, COMMON } from '../../configs/types'
import API from '../api'
import { storeAsyncToken, getAsyncToken,removeAsyncToken } from '../token'



export const checkAuthStatus = () => {
  return (dispatch) => {
    return getAsyncToken().then(token => {
      if (token) {
        dispatch({
          type: USER.SIGNED_IN,
          payload: {
            token: token
          }
        })
        return token
      }
    })
  }
}