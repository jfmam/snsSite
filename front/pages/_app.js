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
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas';

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
    Component:propTypes.elementType.isRequired,
    store:propTypes.object
    //프로그램의 안정성 증가.종류가많아서 문서를 확인하자.
}

const configureStore = (initialState, options) => {
  const sagaMiddleware = createSagaMiddleware();//리덕스에 미들웨어 등록
  const middlewares = [sagaMiddleware];
  const enhancer = process.env.NODE_ENV === 'production' //production일때 실제 서비스 development는 개발용 리덕스 state가 안나오게 설정해준다
    ? compose(applyMiddleware(...middlewares))//enhancer부분은 암기해야한다
    : compose(
      applyMiddleware(...middlewares),
      !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    );//개발용일때 devtools 사용가능하다.
  const store = createStore(reducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);//saga등록 
  return store;
};

export default withRedux(configureStore)(SnsSite);