import mongoose from 'mongoose'
const Connection = async()=>{
    try{
        
const URL=`mongodb+srv://leena:leena@nec.pt1gr.mongodb.net/inshorts-clone?retryWrites=true&w=majority`
await mongoose.connect(URL,{useNewUrlParser:true})
console.log("database connected successfully")
    }catch(error){
        console.log("error while connecting",error)
    }
}
export default Connection