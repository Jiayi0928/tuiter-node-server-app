import mongoose from "mongoose";
const schema = mongoose.Schema({
    username:String,
    handle:String,
    time: String,
    title:String,
    logo:String,
    tuit: String,
    likes: Number,
    comments: Number,
    retuits: Number,
    liked: Boolean,

},{collection: 'tuits'});
export default schema;