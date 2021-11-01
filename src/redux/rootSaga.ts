import { all } from 'redux-saga/effects'
import {watchCommonSaga} from './common/saga'

export default function* rootSaga() {
    yield all([watchCommonSaga])
}