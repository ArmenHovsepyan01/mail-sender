import multer from 'multer';
import getFileExtension from "../helpers/getFileExtension.js";

const storage = multer.memoryStorage();

const uploadFiles = multer({
    storage,
    fileFilter(req, file, callback) {
        if (!file.originalname.match(/\.(jpg|jpeg|png|webp|pdf)$/)) {
            return callback(new Error('Unsupported file type'), false);
        }

        callback(null, true);
    }
});

export default uploadFiles.single('file');