import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const routes = ["/feed", "/perfil", "/login"]

export async function middleware(req) {

    // Si la ruta esta dentro de las rutas permitidas, continua
    let currentRoute = req.nextUrl.pathname
    if (!routes.includes(currentRoute)) return NextResponse.redirect(new URL("/feed", req.url))
    
    // Json web token
    const jwt = req.cookies.get('token');

    // Si la ruta actual no es login, ejecuta la verificacion
    if (currentRoute !== '/login') {
        // Si el token no existe, redirecciona a login
        if (jwt == undefined) return NextResponse.redirect(new URL("/login", req.url))
        // Veritica el token. Si es valido continua, si no, redirecciona a login 
        try {
            const { payload } = await jwtVerify(jwt.value, new TextEncoder().encode(process.env.TOKEN_SECRET))
            return NextResponse.next()
        } catch (error) {
            console.log(error)
            return NextResponse.redirect(new URL("/login", req.url))
        }
    }

    return NextResponse.next()
}

export const config = {
    // Ignora las rutas default de next
    matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)'
}