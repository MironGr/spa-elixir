import { initialState } from "src/store/cards/state";
import actionTypes from "src/store/actionTypes";
import { Action, Cards, Elixir } from 'src/store/types'


export const cards = (state = initialState, action: Action<any>): Cards => {
  const elixirs: Elixir[] = JSON.parse(JSON.stringify(state.cards))
  const id: string = action.payload
  const elixir: Elixir = elixirs.filter(item => item.id === id)[0]
  const index: number = elixirs.indexOf(elixir)

  switch (action.type) {
    case actionTypes.SET_LOADER:
      return {
        ...state,
        loader: action.payload
      }
    case actionTypes.SET_CARDS:
      return {
        ...state,
        cards: action.payload
      }
    case actionTypes.SET_LIKE:
      const like: boolean = elixir.like
      elixir.like = !like
      elixirs.splice(index, 1, elixir)
      return {
        ...state,
        cards: elixirs
      }
    case actionTypes.SET_REMOVE:
      const remove: boolean = elixir.removed
      elixir.removed = !remove
      elixirs.splice(index, 1, elixir)
      return {
        ...state,
        cards: elixirs
      }
    default:
      return state
  }
}