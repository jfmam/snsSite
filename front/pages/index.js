import React from 'react';
import {Form,Input, Button, Card, Icon, Avatar} from 'antd';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
const dummy={
    isLoggendIn:true,
    imagePaths:[],
    mainPosts: [{
        User: {
            id: 1,
            nickname: 'seung'
        },
        content: '첫번째 게시글',
        img: "https: //placeimg.com/200/200"
    }],
   
}
const Home=()=>{
    return(
        <div>
        {dummy.isLoggendIn&&<PostForm/>}
            {dummy.mainPosts.map((c)=>{
                return(
                   <PostCard key={c} post={c}/>
                )
            })}
        </div>
    );
};


export default Home;