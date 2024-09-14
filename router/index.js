import {Router} from "express";
import {authenticateUser} from "../middlwares/auth.js";
import uploadFileAndHandleErrors from "../middlwares/uploadFIleAndHandleErrors.js";
import {supportQuestions, sendMail} from "../controllers/send-mail/index.js";

const router = Router();

router.post("/send-mail", authenticateUser, uploadFileAndHandleErrors, sendMail);
router.post("/support-questions", authenticateUser, supportQuestions);

export default router;