import React from 'react'
import Head from 'next/head'
import AppLayout from '../components/AppLayout'
import {Form, Input, Checkbox, Button} from 'antd'
const Profile=()=>{
    const onSubmit=()=>{};
    const onchangeId=()=>{};
    const onchangeNick=()=>{};
    const onchangePassword=()=>{};
    const onchangePasswordCheck=()=>{};
    return(
    
    <div>
        <Head>
            <title>SNSsite</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.25.3/antd.css"/>
        </Head>
    <AppLayout>
        <Form onSubmit={onSubmit}>
            <div>
                <label htmlFor='user-id'>아이디</label><br/>
                <Input name="user-id" required onChange={onchangeId}/>
            </div>
            <div>
                 <label htmlFor='user-nick'>닉네임</label><br/>
                <Input name="user-nick" required onChange={onchangeNick}/>
            </div>
            <div>
                 <label htmlFor='user-pass'>비밀번호</label><br/>
                <Input name="user-pass" required onChange={onchangePassword}/>
            </div>
             <div>
                 <label htmlFor='user-passcheck'>비밀번호확인</label><br/>
                <Input name="user-passcheck" required onChange={onchangePasswordCheck}/>
            </div>
            <div>
                <Checkbox name="user-term" value={term} onChange={onChangeTerm}>약관에 동의합니다.</Checkbox>
            </div>
            <div>
                <Button type='primary' htmlType="submit">가입하기</Button>{/*primary 파란색 타입 */}
            </div>
        </Form>
    </AppLayout>
    </div>
    );
};

export default Profile