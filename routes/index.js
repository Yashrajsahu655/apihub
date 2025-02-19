import {
  verifyOtp,
  resendVerificationCode,
  registerUserController,
  signInUserController,
  forgotPasswordController,
  addTodoController,
  getTodosController,
  getTodoByIdController,
  getUserProfileController,
  uploadImageController,
  getImageByIdController,
  getImagesController,
  uploadCatController,
  getAllCatsController,
  addDogsController,
  getDogsController,
  getDogByIdController,
  addvideoController,
  getVideosController,
  getVideoByIdController,
  getCatByIdController
} from "../controllers/index.js";
import { uploadImageMiddleware } from "../middlewares/cloudinary.js";
import {isAuthenticated} from '../middlewares/auth.js'
import { uploadVideoMiddleware, upload } from "../middlewares/imageKit.js";

export {
  verifyOtp,
  resendVerificationCode,
  registerUserController,
  signInUserController,
  forgotPasswordController,
  addTodoController,
  getTodosController,
  getTodoByIdController,
  getUserProfileController,
  uploadImageController,
  uploadImageMiddleware,
  getImageByIdController,
  getImagesController,
  isAuthenticated,
  uploadCatController,
  getAllCatsController,
  addDogsController,
  getDogsController,
  getDogByIdController,
  uploadVideoMiddleware,
  upload,
  addvideoController,
  getVideosController,
  getVideoByIdController,
  getCatByIdController
};

import userRouter from "./userRoutes/user.route.js";
import todoRouter from "./todoRoutes/todo.route.js";
import imageRouter from './imageRoutes/image.route.js'
import catRouter from './catRouters/cat.route.js'
import dogRouter from './dogRoutes/dog.route.js'
import reelsRouter from './reelsRoutes/reels.route.js'

export {
  userRouter,
  todoRouter,
  imageRouter,
  catRouter,
  dogRouter,
  reelsRouter
}
