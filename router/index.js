import {Router} from "express";
import {authenticateUser} from "../middlwares/auth.js";
import sendMail from "../controllers/send-mail/index.js";

const router = Router();

router.get("/", sendMail);
router.post("/send-mail", authenticateUser, sendMail);

export default router;