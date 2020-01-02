import React, { useEffect } from 'react';
import {Form,Input, Button, Card, Icon, Avatar} from 'antd';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import {useDispatch,useSelector} from 'react-redux'


const Home=()=>{
    const dispatch=useDispatch();//액션 디스패치하는 hooks
    const {user}=useSelector(state=>state.user)//reducer에있는 state를 가져온다
    const {isLoggedIn}=useSelector(state=>state.user.isLoggedIn)
    const {mainPosts}=useSelector(state=>state.post)

    return(
        <div>
        {user ? <div>로그인 하였습니다.</div>:<div>로그아웃 하였습니다</div>}
        {isLoggedIn&&<PostForm/>}
            {mainPosts.map((c)=>{
                return(
                   <PostCard key={c} post={c}/>
                )
            })}
        </div>
    );
};


export default Home;