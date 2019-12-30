import React from 'react'
import {Input,Button,Form} from 'antd'
import { useSelector } from 'react-redux';



const PostForm=()=>{
    const {imagePaths}=useSelector(state=>state.post.imagePaths)
    return(<Form encType="multipart/form-data">
            <Input.TextArea maxLength={140} placeholder="어떤 일이 있었나요?"/>
            <div>
                <input type='file' multiple hidden/>
                <Button>이미지 업로드</Button>
                <Button type='primary' style={{float:'right'}}>SNS</Button>
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