import {
  SWITCH_MAIN_VIEW_EVENT,
} from "../actions"

const initialState = {
  view: undefined,
}

const mainState = (state = initialState, action) => {
  const type = action.type
  const payload = action.payload
  switch (type) {
    case SWITCH_MAIN_VIEW_EVENT:
      return { ...state, view: payload.view }
    default:
      return state
  }
}

export default mainState
