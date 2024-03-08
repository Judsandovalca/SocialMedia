import { Router } from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/posts.controllers.js";
import { auth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createPostSchema } from "../schemas/post.schema.js";

const router = Router();

router.get("/posts", auth, getPosts);

router.post("/posts", auth, validateSchema(createPostSchema), createPost);

router.get("/posts/:id", auth, getPost);

router.put("/posts/:id", auth, updatePost);

router.delete("/posts/:id", auth, deletePost);

export default router;