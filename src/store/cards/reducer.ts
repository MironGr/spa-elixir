import { initialState } from "src/store/cards/state";
import actionTypes from "src/store/actionTypes";
import { Action } from 'src/store/types'


export const cards = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.SET_CARDS:
      return {
        ...state,
        cards: action.payload,
      }
    default:
      return state
  }
}