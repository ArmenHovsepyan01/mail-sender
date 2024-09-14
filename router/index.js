import {Router} from "express";
import {authenticateUser} from "../middlwares/auth.js";
import sendMail from "../controllers/send-mail/index.js";
import uploadFileAndHandleErrors from "../middlwares/uploadFIleAndHandleErrors.js";

const router = Router();

router.post("/send-mail", authenticateUser, uploadFileAndHandleErrors, sendMail);

export default router;