const express=require('express');
const db=require('./models');
const app=express();
const morgan=require('morgan')
const cors=require('cors')

const userAPIRouter=require('./routes/user')
const postAPIRouter=require('./routes/post')
const postsAPIRouter=require('./routes/posts')

db.sequelize.sync();

//프론트에서 넘어온 폼을 처리한다 req,res를 쓸때 필수적으로 사용하여야한다
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/user',userAPIRouter)
app.use('/api/posts',postsAPIRouter)
app.use('/api/post',postAPIRouter)



app.listen(4000,()=>{
    console.log("express server")
})