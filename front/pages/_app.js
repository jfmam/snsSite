// 모든 컴포넌트가 _app.js를 부모컴포넌트로 사용
//이 때 이름 꼭 _app.js로 사용(next특성)
import React from 'react'
import Head from 'next/head'
import AppLayout from '../components/AppLayout'
import propTypes from 'prop-types'

const SnsSite=({Component})=>{//component는 next에서 넣어주는 props
  
    return(
        <>
       <Head>
            <title>SNSsite</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.25.3/antd.css"/>
        </Head>
        <AppLayout>
            <Component/>{/*컴포넌트를 받는다  */}
        </AppLayout>
        </>

    );
};

SnsSite.propTypes={
    Component:propTypes.elementType
    //프로그램의 안정성 증가.종류가많아서 문서를 확인하자.
}
export default SnsSite;