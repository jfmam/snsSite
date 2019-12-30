export const initialState={
    isLoggedIn:false,
    user:null
};

const dummyUser = {
    nickname: 'seung',
    Post: [],
    Followings: [],
    Followers: [],
    signUpData:[]
};

const SING_UP_SUCCESS='SIGN_UP_SUCCESS'
const SIGN_UP='SIGN_UP'
 const LOG_IN='LOG-IN'
 const LOG_OUT='LOG_OUT'
  const LOG_IN='LOG-IN_SUCCESS'
   const LOG_IN='LOG-IN_FAILURE'

export const loginAction={
    type:LOG_IN,
    data:{
        nickname:'seung'
    }
}
export const logoutAction={
    type:LOG_OUT
}

export const signUpAction=(data)=>{//동적데이터라 함수를 받는다
    return {type:SIGN_UP,
            data:data
    }
}


const reducer=(state=initialState,action)=>{
    switch(action.type){
        case LOG_IN: {
            return{
                ...state,//이전상태 state불러오기
                isLoggedIn:true,
                user:dummyUser
            }
        }
        case LOG_OUT: {
            return{
                ...state,
                isLoggedIn:false,
                user:null
            }
        }
        case SIGN_UP:{
            return{
                ...state,
                signUpData:action.data
            }
        }
        default:{
            return{
                ...state
            }
        }
    }
};

export default reducer;