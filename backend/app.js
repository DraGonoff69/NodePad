const mongoose=require('mongoose');
const express=require('express');
const app=express();
const DB='mongodb+srv://ayush:govind@cluster0.uvvp0b8.mongodb.net/note?retryWrites=true&w=majority'

mongoose.connect(DB,{

}).then(()=>{
    console.log(`connection success`);
}).catch((err)=>console.log(`no connection`))


const port = 5000

app.use(express.json())
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
// middleware
// const middleware=(req,res,next)=>{
//     console.log('middleware')
// }
// middleware();
// app.get('/',(req,res)=>{
    //     res.send("hello form the server")
// });
// // console.log("subscribe");
// app.get('/about',middleware,(req,res)=>{
//     res.send("hello form about the server")
// });
// app.listen(3000,()=>{
//    console.log('server is running at port no 3000') 
// })
// app.get('/contact',(req,res)=>{
//     res.send("hello contact form the server")
// });
// app.get('/signin',(req,res)=>{
//     res.send("hello sign in form the server")
// });
// app.get('/signup',(req,res)=>{
//     res.send("hello signup form the server")
// });





