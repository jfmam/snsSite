import {all,fork} from 'redux-saga/effects'

function loginAPI(){

}//서버에 요청을 보내는부분

function login() {
    try{
        yield call(loginAPI);
        yield put({//dispatch와 동일하다.
            type:LOG_IN_SUCCESS//요청을보내고 성공
        })
    }catch (e){
        console.error(e);
        yield put({
            type:LOG_IN_FAILURE
        })
    }
}

function* watchLogin(){//*제네레이터 함수
    yield takeLatest(LOG_IN,login)
}//사가가 로그인이 들어오는지 수시로확인


export default function* userSaga(){
    yield all([
        fork(watchLogin)
    ])
}