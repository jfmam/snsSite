import React, { useState } from 'react'
import Head from 'next/head'
import AppLayout from '../components/AppLayout'
import {Form, Input, Checkbox, Button} from 'antd'
const SignUp=()=>{
    // const [id,setId]=useState('');
    const [nickname,setNick]=useState('');
    const [password,setPassword]=useState('');
    const [passwordCheck,setPasswordCheck]=useState('');
    const [term,setTrem]=useState(false);
    const [passwordError,setPasswordError]=useState(false);
    const [termError,setTermError]=useState(false);
    const onSubmit=(e)=>{
        e.preventDefault();//이건뭘까?
        if(password!==passwordCheck){
            setPasswordError(true);
        }
        if(!term){
            setTermError(true);
        }
        console.log({
            id,nickname,password,passwordCheck,term
        })
    };//아래 반복이 너무심하다 어떻게 바꿔볼것인가?
    // const onchangeId=(e)=>{setId(e.target.value)};
    const onchangeNick=(e)=>{setNick(e.target.value)};
    const onchangePassword=(e)=>{setPassword(e.target.value)};
    const onchangePasswordCheck=(e)=>{
        setPasswordError(e.target.value!==password);
        setPasswordCheck(e.target.value)
    };
    const onChangeTerm=(e)=>{
        setTermError(false);
        setTrem(e.target.checked)
    };
    const useInput=(initValue=null)=>{
        const [value,setter]=useState(initValue);
        const handler=(e)=>{setter(e.target.value);}
        
        return [value,handler];
    }
    const [id,onChangeId]=useInput('')

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
                <Input name="user-id" value={id} required onChange={onChangeId}/>
            </div>
            <div>
                 <label htmlFor='user-nick'>닉네임</label><br/>
                <Input name="user-nick" required value={nickname} onChange={onchangeNick}/>
            </div>
            <div>
                 <label htmlFor='user-pass'>비밀번호</label><br/>
                <Input name="user-pass" type="password" required value={password} onChange={onchangePassword}/>
            </div>
             <div>
                 <label htmlFor='user-passcheck'>비밀번호확인</label><br/>
                <Input name="user-passcheck" type="password" required value={passwordCheck} onChange={onchangePasswordCheck}/><br/>
                 {passwordError && <div style={{color:"red",marginTop:10}}>비밀번호가 일치하지 않습니다.</div>}
            </div>
            <div>
                <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>약관에 동의합니다.</Checkbox>
                {termError&&<div style={{color:"red",marginTop:10}}>약관에 동의하셔야합니다.</div>}
            </div>
            <div>
                <Button type='primary'  htmlType="submit">가입하기</Button>{/*primary 파란색 타입 */}
            </div>
        </Form>
    </AppLayout>
    </div>
    );
};

export default SignUp;