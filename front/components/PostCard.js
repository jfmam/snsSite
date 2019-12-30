import React from 'react';
import {Card,Avatar,Icon} from 'antd'
import propTypes from 'prop-types'


const PostCard=({post})=>{
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
PostCard.propTypes={
    post:propTypes.shape({//객체로 받은것을 안에를 상세하게 작성
        User:propTypes.object,
        content:propTypes.string,
        img:propTypes.string,
        createAt:propTypes.object
    })
}

export default PostCard;