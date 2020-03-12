const mongoose = require('mongoose');
const mooongoosePaginate = require('mongoose-paginate');


const PostSchema = new mongoose.Schema({});
PostSchema.plugin(mooongoosePaginate);

mongoose.model("posts", PostSchema);