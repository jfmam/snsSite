export const initialState={
  mainPosts: [{
      User: {
          id: 1,
          nickname: 'seung'
      },
      content: '첫번째 게시글',
      img: "https: //placeimg.com/200/200"
  }],
  imagePath: []
};


const ADD_POST = 'ADD_POST'
const ADD_DUMMY='ADD_DUMMY' //actiontype지정

const addPost={
    type:ADD_POST
};
const addDummy={
    type:ADD_DUMMY,
    data:{
        content:'hi',
        userId:1,
        user:{
            nickname:'seung'
        }
    }
}


const reducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_POST:{
            return{
                ...state,
            };
        };
        case ADD_DUMMY:{
            return{
                ...state,
                   mainPosts:[action.data,...state.mainPosts]
            }
        }
        default:{
            return{
                ...state
            }
        }
    }
};
//스프레드언어를 쓸 경우 가독성이 떨어져 immutable이나 immer를 쓴다 적용해보도록하자.
export default reducer;