import Link from 'next/link'
import React from 'react'
import {Menu,Input,Button} from 'antd'

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
        <Link href="signup"><a> <Button>회원가입</Button></a></Link>
        {children}
    </div>

 );
};

export default AppLayout;