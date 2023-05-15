import express from "express";
import formidable from "express-formidable";

const router = express.Router();
import {
  uploadImage,
  removeImage,
  create,
  read,
  videoUpload,
} from "../controllers/course";
// middleware
import { requireSignin, isInstructor } from "../middlewares";

router.post("/course/upload-image", requireSignin, uploadImage);
router.post("/course/remove-image", requireSignin, removeImage);

router.post("/course", requireSignin, isInstructor, create);
router.get("/course/:slug", read);
router.post("/course/video-upload", requireSignin, formidable(), videoUpload);

module.exports = router;
