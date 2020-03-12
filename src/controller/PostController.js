const mongoose = require('mongoose');

const Post = mongoose.model('posts');

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const posts = await Post.paginate({}, { page ,  limit: 10 });

    return res.json(posts);
  },

  async show(req, res) {
    const post = await Post.findById(req.params.id);

    return res.json(post);
  },

  async destroy(req, res) {
    await Post.findByIdAndDelete(req.params.id);
    
    return res.send();
  }

}
