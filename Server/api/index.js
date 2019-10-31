var express = require('express');
var userRouter = require('./user/index');
var blogRouter = require('./blog/index');
var commentRouter = require('./comments/index');
var loginRouter =require('./login/index');
var router = express.Router();


router.use('/user', userRouter);
router.use('/blog', blogRouter);
router.use('/comments', commentRouter);
router.use('/login',loginRouter);

module.exports = router;