// 모든 컴포넌트가 _app.js를 부모컴포넌트로 사용
//이 때 이름 꼭 _app.js로 사용(next특성)
import React from 'react'
import Head from 'next/head'
import AppLayout from '../components/AppLayout'
import propTypes from 'prop-types'
import {Provider} from 'react-redux'
import withRedux from 'next-redux-wrapper'
import {createStore,compose,applyMiddleware} from 'redux'
import reducer from '../reducers'

const SnsSite=({Component,store})=>{//component는 next에서 넣어주는 props
  
    return(
        <Provider store={store}>{/*store는 action state reduccer가 합쳐ㅊ진것  */}
       <Head>
            <title>SNSsite</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.25.3/antd.css"/>
        </Head>
        <AppLayout>
            <Component/>{/*컴포넌트를 받는다  */}
        </AppLayout>
        </Provider>

    );
};

SnsSite.propTypes={
    Component:propTypes.elementType,
    store:propTypes.object
    //프로그램의 안정성 증가.종류가많아서 문서를 확인하자.
}
export default withRedux((initiolState,options)=>{
   // const store=createStore(reducer,initiolState);
    const middlewares=[];
    const enhancer=compose(
        applyMiddleware(...middlewares),
    typeof window !=='undefined'&&window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefinded' ? window.__REDUX_DEVTOOLS_EXTENSION__():(f)=>f,) //compose미들웨어 합치기,미들웨어 적용하기
   
    const store=createStore(reducer,initiolState,enhancer)
    return store;
})(SnsSite);