import jwt from 'jsonwebtoken';

export async function authenticateUser(req, res, next) {
    try {
        if (!req.headers.authorization) {
            return res.status(400).json({
                error: 'Missing authorization headers.'
            });
        }

        const token = req.headers.authorization.split(' ')[1];
        await jwt.verify(token, process.env.SECRETKEY);

        next();
    } catch (e) {
        return res.status(401).json({
            error: 'User access denied.'
        });
    }
}