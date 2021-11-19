const mongoose=require('mongoose')

const authorSchema=new mongoose.Schema({
    author_id: Number,
    author_name:String,
    age:String,
    address:String
});

module.exports=mongoose.model('Author',authorSchema)
