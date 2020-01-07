import Link from 'next/link'
import React, { useEffect } from 'react'
import {Menu,Input,Row,Col} from 'antd'
import LoginForm from './LoginForm'
import UserProfile from './UserProfile'
import { useSelector, useDispatch } from 'react-redux'
import { LOAD_USER_REQUEST } from '../reducers/user'


const AppLayout=({children})=>{
    const {me}=useSelector(state=>state.user)
    const dispatch=useDispatch();
    useEffect(()=>{
        if(!me){
            dispatch({
                type:LOAD_USER_REQUEST
            })
        }
    },[])//쿠키가 있으면 새로고침 하여도 로그인 유지.
 
    return(
    <div>
        <Menu mode="horizontal">
            <Menu.Item key="home"><Link href="/"><a>HOME</a></Link></Menu.Item>
            <Menu.Item key="profile"><Link href="/profile"><a>PROFILE</a></Link></Menu.Item>
            <Menu.Item key="mail">
                <Input.Search enterButton  style={{verticalAlign:'middle'}}/>
            </Menu.Item>
        </Menu>
        {/* ROw는 행 col은 열 */}
        <Row>
            <Col xs={24} md={6}>
                
     {me?<UserProfile/>:<LoginForm/>
                    }
            </Col>{/*xs:모바일 sm:작은화면 md:중간화면,lg:큰화면 반응형  */}
            <Col xs={24} md={6}> {children}</Col>
            <Col xs={24} md={6}>
                <a href="https://github.com/jfmam">seung's address</a>
            </Col>
        </Row>
    </div>

 );
};

export default AppLayout;