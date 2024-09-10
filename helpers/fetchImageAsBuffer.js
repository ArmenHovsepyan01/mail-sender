import axios from "axios";

export default async function fetchImageAsBuffer(imageUrl = '') {
    if (!imageUrl) {
        return {
            error: {
                message: "Image URL is required"
            }
        }
    }

    console.log(imageUrl);

    try {
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        return Buffer.from(response.data);
    } catch (error) {
        console.error('Error fetching image:', error);
        return {
            error: {
                message: `Error fetching image ${error.message}`
            }
        }
    }
}
