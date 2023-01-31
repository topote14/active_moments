const API_URL = process.env.NEXT_PUBLIC_API_URL

export const userRegister = async (username, email, password, confirmPassword)=> {
    let options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username,
            email,
            password,
            confirmPassword
        })
    };
    
    return await fetch(API_URL + '/auth/register', options).then(response => response.json())
}

export const userLogin = async (username, password) => {
    let options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username,
            password,
        })
    };

    return await fetch(API_URL + '/auth/login', options).then(response => response.json())
}

export const getUser = async ()=> {
    return await fetch("/api/user").then(response => response.json())
}