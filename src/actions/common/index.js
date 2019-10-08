import { COMMON } from '../../configs/types'



export const removeErrors = () => {
  return (dispatch) => {
    dispatch({
      type: COMMON.REMOVE_ERRORS
    })
  }
}


export const raiseErrors = (errors) => {
  return (dispatch) => {
    dispatch({
      type: COMMON.SET_ERRORS,
      payload: {
        errors: errors
      }
    })
  }
}


export const startLoading = () => {
  return (dispatch) => {
    dispatch({
      type: COMMON.SERVER_REQUEST
    })
  }
}

export const endLoading = () => {
  return (dispatch) => {
    dispatch({
      type: COMMON.SERVER_SUCCESS
    })
  }
}