import { jwtVerify } from "jose";

export default async function handler(req, res) {
    const jwt = req.cookies.token;
    try {
        const { payload } = await jwtVerify(jwt, new TextEncoder().encode(process.env.TOKEN_SECRET))
        res.status(200).json(payload)
    } catch {
        res.status(200).json({ error: true, message: "No hay token" })
    }
}