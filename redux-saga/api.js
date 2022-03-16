import axios from 'axios';
import { all, call,put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as api_actions from './actions';
import { FETCH_USER_DATA } from './redux_actions';

const baseUrl = 'http://10.0.2.2:3000/todos';
export function* fetch_user_data() {
    try {
        console.log('Fetching user data...');
        const response = yield call(axios.get, baseUrl);
        yield put(FETCH_USER_DATA(response.data));
    } catch (error) {
        console.error(error); 
    }
}

export function* watchFetchUserData() {
    yield takeLatest(api_actions.FETCH_DATA, fetch_user_data);
};

export default function* watchApi() {
    yield all([
        watchFetchUserData(),
    ])
}