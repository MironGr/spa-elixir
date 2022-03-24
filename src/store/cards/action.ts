import actionTypes from "src/store/actionTypes";
import { Action, Ingredient } from 'src/store/types'


export const getCards = (): Action<undefined> => ({
  type: actionTypes.GET_CARDS
})

export const setCards = (payload: Ingredient[]): Action<Ingredient[]> => ({
  type: actionTypes.SET_CARDS,
  payload,
})

export const setLike = (payload: string): Action<string> => ({
  type: actionTypes.SET_LIKE,
  payload
})

export const setRemove = (payload: string): Action<string> => ({
  type: actionTypes.SET_REMOVE,
  payload
})

export const setLoader = (payload: boolean): Action<boolean> => ({
  type: actionTypes.SET_LOADER,
  payload
})