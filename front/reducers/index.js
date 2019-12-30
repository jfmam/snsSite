//post나 user를 감싸줄 root reducer
import {combineReducers} from 'redux';
import user from './user'
import post from './post'

const rootReducer=combineReducers({
    user,
    post
})

export default rootReducer;