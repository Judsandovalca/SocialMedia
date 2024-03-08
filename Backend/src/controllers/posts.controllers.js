import Post from "../models/post.model.js";
export const getPosts = async (req, res) => {
    try {
      const posts = await Post.find({ user : req.user.id }).populate("user");
      res.json(tasks);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  export const createPost = async (req, res) => {
    try {
      const { title, content, likes, user } = req.body;
      const newPost = new Post({
        title,
        content,
        likes,
        user: req.user.id,
      });
      await newPost.save();
      res.json(newPost);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  export const deletePost = async (req, res) => {
    try {
      const deletedPost = await Post.findByIdAndDelete(req.params.id);
      if (!deletedPost)
        return res.status(404).json({ message: "Post not found" });
  
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  export const updatePost = async (req, res) => {
    try {
      //const { title, description, date } = req.body;
      const { title, content, likes, user } = req.body;
      const postUpdated = await Post.findOneAndUpdate(
        { _id: req.params.id },
        { title, content, likes, user },
        { new: true }
      );
      return res.json(postUpdated);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  export const getPost = async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (!post) return res.status(404).json({ message: "Task not found" });
      return res.json(post);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  