import {GETID} from './actionType'
import { takeEvery } from 'redux-saga/effects'

function * mySage(){
  yield takeEvery(GETID,getId)
}

function * getId(){
  console.log('pd')
}

export default mySage