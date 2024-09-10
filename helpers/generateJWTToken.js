import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();

const generateJWTToken = async () => {
    const token = await jwt.sign({id: 2010}, process.env.SECRETKEY);
    console.log(token)
}