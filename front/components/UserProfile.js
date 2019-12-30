import React, { useCallback } from 'react'
import {Card,Avatar, Button} from 'antd'
import { useSelector,useDispatch } from 'react-redux'
import {logoutAction} from '../reducers/user'

const UserProfile=()=>{
    const {user}=useSelector(state=>state.user);
    const dispatch=useDispatch();

    const onLogout=useCallback(()=>{
        dispatch(logoutAction);
    },[])
    return(
     <Card actions={[<div key='twit'>Hi<br/>{user.Post.length}</div>,
                 <div key='following'>팔로잉<br/>{user.Followings.length}</div>,
                 <div key='follwer'>팔로워<br/>{user.Followers.length}</div>,
                ]}>
                    <Card.Meta
                    avatar={<Avatar>{user.nickname[0]}</Avatar>}
                    title={user.nickname}></Card.Meta>
                    <Button onClick={onLogout}>로그아웃</Button>
                    </Card>
    )
}

export default UserProfile;

