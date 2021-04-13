import { constants } from '../../constants';
import * as actions from './actions';
import { takeEvery, call, put } from 'redux-saga/effects';
import  { adminData } from '../../model'
import { UserData } from '../../types'

export function* watcherLoginPage() {
  yield takeEvery(constants.SIGN_IN_REQUEST, workerSignIn);
}

function* workerSignIn(action: any) {
  try {
      console.log(action.payload)
      console.log(adminData)
    if(JSON.stringify(action.payload) === JSON.stringify(adminData)){
        localStorage.setItem('isLogged', JSON.stringify(true))
        yield put (actions.onSignInSuccess(action.payload))
    } else {
        alert('login or password is not correct')
    }
  } catch (err) {
    console.error('ERROR', err);
  }
}