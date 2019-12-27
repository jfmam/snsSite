import React from 'react'
import {Input,Button,Form} from 'antd'

const dummy = {
    isLoggendIn: true,
    imagePaths: [],
    mainPosts: [{
        User: {
            id: 1,
            nickname: 'seung'
        },
        content: '첫번째 게시글',
        img: "https: //placeimg.com/200/200"
    }],

}

const PostForm=()=>{
    return(<Form encType="multipart/form-data">
            <Input.TextArea maxLength={140} placeholder="어떤 일이 있었나요?"/>
            <div>
                <input type='file' multiple hidden/>
                <Button>이미지 업로드</Button>
                <Button type='primary' style={{float:'right'}}>SNS</Button>
            </div>
            <div>
                {dummy.imagePaths.map((value,index)=>{
                    return(
                        <div key={index} style={{display:'inline-block'}}>
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