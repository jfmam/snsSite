import Link from 'next/link'
import React from 'react'
import {Menu,Input,Row,Col} from 'antd'
import LoginForm from './LoginForm'
import UserProfile from './UserProfile'

const dummy={
    nickname:"seung",
    Post:[],
    Following:[],
    Follwer:[],
    isLoggedin:false
}//서버로 받을 데이터를 예상해서 dummy를 만든다

const AppLayout=({children})=>{
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
                
     {dummy.isLoggedin?<UserProfile/>:<LoginForm/>
                    }
            </Col>{/*xs:모바일 sm:작은화면 md:중간화면,lg:큰화면 반응형  */}
            <Col xs={24} md={6}> {children}</Col>
            <Col xs={24} md={6}>
                <Link href="https://github.com/jfmam"><a>seung's address</a></Link>
            </Col>
        </Row>
    </div>

 );
};

export default AppLayout;