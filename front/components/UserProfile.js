import React from 'react'
import {Card,Avatar} from 'antd'
const UserProfile=()=>{
    return(
     <Card actions={[<div key='twit'>Hi<br/>{dummy.Post.length}</div>,
                 <div key='following'>팔로잉<br/>{dummy.Following.length}</div>,
                 <div key='follwer'>팔로워<br/>{dummy.Follwer.length}</div>,
                ]}>
                    <Card.Meta
                    avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
                    title={dummy.nickname}></Card.Meta>
                    </Card>
    )
}

export default UserProfile;

