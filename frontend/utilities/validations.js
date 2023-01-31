// El nombre de usuario no puede contener espacios ni caracteres especiales
const validateUsername = (username)=> {
    let response = { error: true }
    if (username.includes(' ')) {
        response.message = 'El usuario no puede contener espacios en blanco'
        return response
    } else if (username.length < 6 || username.length > 16) {
        response.message = 'El usuario debe tener minimo 6 digitos y maximo 16'
        return response
    } else if (/\W/g.test(username)) {
        response.message = 'El usuario no puede contener caracteres especiales'
        return response
    }
    response.error = false
    return response
}

// No puede tener espacios ni mas de 20 caracteres. Debe contener al menos 8 caracteres, 1 minuscula, 1 mayuscula y 1 numero
const validatePassword = (password, confirmPassword)=> {
    let response = { error: true }
    if (password.length < 8) {
        response.message = "La contraseña debe tener minimo 8 caracteres"
        return response
    } else if (password.length > 20) {
        response.message = "La contraseña acepta un maximo de 20 caracteres"
        return response
    } else if (/\s/g.test(password)) {
        response.message = "La contraseña no puede contener espacios"
        return response
    } else if (/\W/g.test(password)) {
        response.message = "La contraseña no puede contener caracteres especiales"
        return response
    } else if (password !== confirmPassword) {
        response.message = "Las contraseñas no coinciden"
        return response
    }
    response.error = false
    return response
}

// El email no puede contener espacios, caracteres especiales y tampoco mas de un arroba, ademas debe usar un dominio valido
const validateEmail = (email)=> {
    // Dominios permitidos
    let validDomains = ['gmail', 'hotmail']
    let response = { error: true }
    // Quita arrobas, guiones y puntos
    let newEmail = email.replaceAll('@', '').replaceAll('_', '').replaceAll('.', '')
    // Valida que sea un email valido
    if (!email.includes('@') || email.includes(' ') || email.split('@').length > 2 || /\W/g.test(newEmail) || email.length < 12) {
        response.message = "El email no es válido" 
        return response  
    } else {
        // Si es valido, valida que el dominio este permitido
        let validDomain = false
        for (let domain of validDomains) {
            if (email.split('@')[1] === (domain + '.com')) {
                validDomain = true
                break
            }
        }
        if (!validDomain) {
            response.message = "Ese dominio no esta permitido"
            return response
        }
    }
    response.error = false
    return response
}

// Hace todas las validaciones juntas y devuelve una sola respuesta de tipo { error: value, message: "Un mensaje" }
export const validateRegister = (username, email, password, confirmPassword)=> {
    let result = validateUsername(username.toLowerCase())
    if (result.error) return result
    result = validateEmail(email.toLowerCase())
    if (result.error) return result
    result = validatePassword(password, confirmPassword)
    if (result.error) return result
    return { error: false }
}