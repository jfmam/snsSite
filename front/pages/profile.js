import React from 'react'
import Head from 'next/head'
import AppLayout from '../components/NicknameEditForm'
import {Form, Input, Checkbox, Button, List, Card, Icon} from 'antd'
import NicknameEditForm from '../components/NicknameEditForm';
const Profile=()=>{
    
    return(
    <div>
        <NicknameEditForm/> {/*Form의 형태를 컴포넌트로 만드는 것이 좋다  */}
        <List style={{marginBottom:'20px'}}
               grid={{gutter:4,xs:2,md:3}}
              size="small"
              header={<div>팔로잉 목록</div>}
              bordered
              dataSource={['seung','Lee','official']}
              renderItem={item=>(
                  <List.Item style={{marginTop:'20px'}}>
                      <Card actions={[<Icon key="stop" type="stop"/>]}>
                          <Card.Meta description={item}/>
                      </Card>

                  </List.Item>
              )} />

                  <List style={{marginBottom:'20px'}}
               grid={{gutter:4,xs:2,md:3}}
              size="small"
              header={<div>팔로워 목록</div>}
              bordered
              dataSource={['seung','Lee','official']}
              renderItem={item=>(
                  <List.Item style={{marginTop:'20px'}}>
                      <Card actions={[<Icon key="stop" type="stop"/>]}>
                          <Card.Meta description={item}/>
                      </Card>

                  </List.Item>
              )} />
    </div>
    );
};

export default Profile