import uploadFile from "./uploadFile.js";
import multer from "multer";

export default function uploadFileAndHandleErrors (req, res, next) {
    uploadFile(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            console.log('Error from upload file::', err.message);
            return res.status(400).json({
                message: err.message,
            });
        } else if (err) {
            console.log('Error from upload file:', err.message);
            return res.status(400).json({
                message: err.message,
            });
        }

        next();
    })
}