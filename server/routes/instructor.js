import express from "express";
const router = express.Router();
import {
  makeInstructor,
  getAccountStatus,
  currentInstructor,
  instructorCourses,
} from "../controllers/instructor";
// middleware
import { requireSignin } from "../middlewares";

router.post("/make-instructor", requireSignin, makeInstructor);
router.post("/get-account-status", requireSignin, getAccountStatus);
router.get("/current-instructor", requireSignin, currentInstructor);
router.get("/instructor-courses", requireSignin, instructorCourses);

module.exports = router;
