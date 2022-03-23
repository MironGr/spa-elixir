import actionTypes from "src/store/actionTypes";

//FIXME remove any
export const getCards = (): any => ({
  type: actionTypes.GET_CARDS
})

export const setCards = (payload: any): any => ({
  type: actionTypes.SET_CARDS,
  payload,
})