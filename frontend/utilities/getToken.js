export const getToken = ()=> {
    const cookies = document.cookie.split(';') 
    const index = cookies.findIndex(cookie => cookie.includes('token='))
    const token = cookies[index].replace('token=', '')
    return token
}