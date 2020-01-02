import {all,fork,delay,take,takeLatest} from 'redux-saga/effects'
import axios from 'axios'
import {LOG_IN_REQUEST,LOG_IN_FAILURE,LOG_IN_SUCCESS,SIGN_UP_REQUEST,SIGN_UP_SUCCESS,SIGN_UP_FAILURE} from '../reducers/user'

function loginAPI(){
    return axios.post('/login',)
}//서버에 요청을 보내는부분

function signUpAPI(){
    return axios.post('/signUp')
}

function* login() {//로그인액션
    try{
        yield delay(1000)
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

function* signUp() { //로그인액션
    try {
        yield call(signUpAPI);
        yield put({ //dispatch와 동일하다.
            type: SIGN_UP_SUCCESS //요청을보내고 성공
        })
    } catch (e) {
        console.error(e);
        yield put({
            type: SIGN_UP_FAILURE
        })
    }
}


function* watchLogin(){//*제네레이터 함수

    yield takeLatest(LOG_IN_REQUEST,login)
}//사가가 로그인이 들어오는지 수시로확인


function* watchSignUp(){//*제네레이터 함수

    yield takeLatest(SIGN_UP_REQUEST,signUp)
}

export default function* userSaga(){//등록하는부분
    yield all([//여러개 등록하고싶을때 all을 사용
        fork(watchLogin),
        fork(watchSignUp)
    ])
}

// fork와 call :둘다 함수를 실행해준다.fork는 비동기호출 call은 동기호출이다
// call은 응답이 다 받아질 때까지 기다린다
//fork는 data를 받을필요가없을때 console.log같은경우

//watchfunction만들기
//takelatest,every 고르기
//실행동작 코딩