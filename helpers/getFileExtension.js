const mimeToExtMap = {
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg',
    'image/png': 'png',
    'image/webp': 'webp',
    'application/pdf': 'pdf',
};

const getFileExtension = (mimeType) => {
    const extension =  mimeToExtMap[mimeType];

    if (!extension) {
        return {
            error: {
                message: 'Unsupported extension type',
            }
        }
    }

    return extension;
}

export default getFileExtension;