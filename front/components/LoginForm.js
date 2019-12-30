import React,{useState,useCallback} from 'react';
import {Input,Form,Button} from 'antd'
import Link from 'next/link'
import {useDispatch} from 'react-redux'
import { loginAction } from '../reducers/user';

const LoginForm=()=>{
       const useInput=(initValue=null)=>{
        const [value,setter]=useState(initValue);
        const handler=useCallback((e)=>{setter(e.target.value);}
        ,[])
        return [value,handler];
    }
      const [userId,onChangeId]=useInput('')
      const [userPassword,onChangePassword]=useInput('')

      const dispatch=useDispatch();


    const onSubmitForm=useCallback((e)=>{
        e.preventDefault();
        dispatch(loginAction)
        console.log({userId,userPassword})
    },[userId,userPassword])
    return(
         <Form onSubmit={onSubmitForm}>
            <div style={{marginTop:'10px'}}>
                <label htmlFor='user-id'>아이디</label><br/>
                <Input name='user-id' value={userId} onChange={onChangeId} /><br/>
            </div>
            <div style={{marginTop:'10px'}}>
                 <label htmlFor='user-password'>패스워드</label>
                <Input type="password" name='user-password' value={userPassword} onChange={onChangePassword} />
            </div>
            <div style={{marginTop:'10px',marginBottom:'10px'}}>
                <Button  type="primary" htmlType="submit" loading={false}>로그인</Button>
            </div>
                    <Link href="signup"><a> <Button>회원가입</Button></a></Link>
        </Form>
    );
};

export default LoginForm;