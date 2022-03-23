import { all, takeEvery, takeLatest } from 'redux-saga/effects'

import actionTypes  from 'src/store/actionTypes'
import { getCardsListSaga } from 'src/store/cards/saga'


export function* watchCardList() {
  yield takeLatest(actionTypes.GET_CARDS, getCardsListSaga)
}

function* rootSaga() {
  yield all([
    watchCardList(),
  ])
}

export default rootSaga