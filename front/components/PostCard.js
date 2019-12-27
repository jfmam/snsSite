import React from 'react';
import {Card,Avatar,Icon} from 'antd'
import PropTypes from 'prop-types'
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

const PostCard=({PostCard})=>{
    return(
         <Card
                    key={+post.createAt}
                    cover={post.img&& <img alt="example" src={post.img}/>}
                    actions={[
                        <Icon type='retweet' key='retweet'/>,
                        <Icon type='heart' key='heart'/>,
                        <Icon type='message' key='message'/>,
                        <Icon type='ellipsis' key='ellipsis'/>                
                    ]}>
                        <Card.Meta
            avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
            title={post.User.nickname}
            description={post.content}></Card.Meta>
                    </Card>
    );
}
PostCard.PropTypes={
    post:PropTypes.shape({//객체로 받은것을 안에를 상세하게 설명한다.
        User:PropTypes.object,
        content:PropTypes.string,
        img:PropTypes.string,
        createAt:PropTypes.object
    })
}

export default PostCard;