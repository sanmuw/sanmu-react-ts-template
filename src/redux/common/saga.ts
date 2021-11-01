import { takeLatest, put } from 'redux-saga/effects'
import * as common from './constant'
import * as Actions from './actions'

function* changeside () {
    yield put(Actions.changeSiderbarCollage())
}


export const watchCommonSaga = [
    takeLatest(common.SIDEBAR_COLLAPSED, changeside)
  ]
  