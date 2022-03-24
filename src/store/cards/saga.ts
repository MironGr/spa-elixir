import { call, put } from 'redux-saga/effects'

import CardsApi from 'src/api/cards/card'
import { setCards, setLoader } from 'src/store/cards/action'
import { Elixir } from 'src/store/types'
import { colors } from 'src/services/constants'
import { getRandomColor } from 'src/services/helpers'


export function* getCardsListSaga() {
  try {
    const res: Elixir[] = yield call(CardsApi.getCardsList)
    const filtredRes = res.filter(
      elixir => elixir.name 
        && elixir.effect
        && elixir.ingredients.length 
        && elixir.ingredients.length <= 3
        )
    const resultList: Elixir[] = filtredRes.slice(0, 10).map(item => {
      item.color = getRandomColor(colors)
      return item
    })
    yield put(setCards(resultList))
    yield put(setLoader(false))
  } catch (err) {
    console.log('Error get Elixir')
  }
}