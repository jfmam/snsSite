const express =require('express')
const bcrypt=require('bcrypt')

const router=express.Router();
const db=require('../models')

router.get('/', (req, res) => {//api.user부분이 된다

})
router.post('/', async(req, res) => {//사용자 생성 회원가입
    try{
        const exUser=await db.User.findOne({//하나찾기
            where:{//조건문찾기
                userId:req.body.userId
            }
        });
        if(exUser){
            return res.status(403).send('이미 사용중인 아이디입니다')
        }
        const hashedPassword=await bcrypt.hash(req.body.password,10)
        const newUser=await db.User.create({
            nickname:req.body.nickname,
            userId:req.body.userId,
            password:hashedPassword,
        })
        console.log(newUser)
        return res.status(200).json(newUser)
    }catch(e){
        console.error(e)
        return next(e);//알아서 프론트에 에러가났다고 알려준다.
    }
})
router.get('/:id', (req, res) => {

})
//req.params.id 에서 :id를 가져올수있다
router.post('/logout', (req, res) => {

})
router.get('/login', (req, res) => {

})

router.get('/:id/follow', (req, res) => {

})
router.post('/:id/follow', (req, res) => {

})
router.delete('/:id/follow', (req, res) => {

})
router.delete('/:id/follower', (req, res) => {

})
router.get('/:id/posts', (req, res) => {

})

module.exports=router;