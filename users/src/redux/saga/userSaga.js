import {put, takeEvery, call} from "redux-saga/effects"
import {FETCH_USERS, setLoaded, setUsers} from "../userReducer";
import {fetchUsersFromApi} from "../../api/api";


function* fetchUserWorker() {
  const data = yield call(fetchUsersFromApi)
  yield put(setUsers(data.data))
  yield put(setLoaded(true))
}


export function* userWatcher() {
  yield takeEvery(FETCH_USERS, fetchUserWorker);
}


