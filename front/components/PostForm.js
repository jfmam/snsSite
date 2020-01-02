import React, { useCallback,useEffect, useState } from 'react'
import {Input,Button,Form} from 'antd'
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POST_REQUEST } from '../reducers/post';



const PostForm=()=>{
    const dispatch=useDispatch();
    const {imagePaths,isAddingPost,postAdded}=useSelector(state=>state.post)
    const [text,setText]=useState('')
    const onSubmitForm=useCallback(()=>{
        e.preventDefault();
        dispatch({
            type:ADD_POST_REQUEST,
            data:{
                text
            }
        })
    },[])
    const onChangeText=useCallback((e)=>{
        setText(e.target.value)
    },[])
   useEffect(()=>{
       setText('')
   },[postAdded])
   return(<Form encType="multipart/form-data" onSubmit={onSubmitForm}>
            <Input.TextArea maxLength={140} placeholder="어떤 일이 있었나요?" value={text} onChange={onChangeText}/>
            <div>
                <input type='file' multiple hidden/>
                <Button>이미지 업로드</Button>
                <Button type='primary' htmlType='submit' style={{float:'right'}} isLoading={isAddingPost}>SNS</Button>
            </div>
            <div>
                {imagePaths.map((value)=>{
                    return(
                        <div key={value} style={{display:'inline-block'}}>
                            <img src="https://placeimg.com/200/200" style={{width:'200px'}} alt={value}/>
                            <div>
                                <Button>제거</Button>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            </Form>);
}

export default PostForm;