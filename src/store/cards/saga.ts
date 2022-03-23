import { call, put } from 'redux-saga/effects'

import CardsApi from 'src/api/cards/card'
import { setCards } from 'src/store/cards/action'
import { Elixir } from 'src/store/types'


export function* getCardsListSaga() {
  try {
    const res: Elixir[] = yield call(CardsApi.getCardsList)
    const filtredRes = res.filter(
      elixir => elixir.name && elixir.effect && elixir.ingredients.length)
    console.log('res saga - ', filtredRes)
    yield put(setCards(filtredRes))
  } catch (err) {
    console.log('Error get Elixir')
  }
}