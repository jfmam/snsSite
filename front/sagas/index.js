import user from './user'
import post from './post'
import {all,call} from 'redux-saga/effects'

export default function* rootsaga(){
    //무한의 개념,또는 비동기
    yield all([
        call(user),
        call(post)
    ])
}