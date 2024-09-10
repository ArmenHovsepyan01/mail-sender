import {Router} from "express";
import {authenticateUser} from "../middlwares/auth.js";
import sendMail from "../controllers/send-mail/index.js";
import uploadFile from "../middlwares/uploadFile.js";

const router = Router();

router.post("/send-mail", authenticateUser, uploadFile,  sendMail);

export default router;