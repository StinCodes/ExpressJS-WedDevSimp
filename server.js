const express = require('express')
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//implement view engine
app.set('view engine', 'ejs')

//putting middleware at the top of the page means used on all routes
// app.use(logger)

// app.get('/', logger, (req, res)=>{
//   console.log('Here')
//   // res.json({message: 'Error'})
//   res.render('index', {text: 'world'})
// })

//require the file for userRouter
const userRouter = require('./routes/user')

//anything that starts with /users, get from userRouter
app.use('/users', userRouter)

//middleware function
// function logger(req, res, next){
//   console.log(req.originalUrl)
//   next()
// }


//listening on localhost 3000
app.listen(3000)


