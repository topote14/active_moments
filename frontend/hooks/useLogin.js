import { useState } from "react"
import { validateRegister } from '../utilities/validations'
import { useRouter } from "next/router"
import { userLogin, userRegister } from "../services/user"
import { useUserContext } from "../context/user"

const useLogin = () => {

    const { update, setUpdate } = useUserContext()
    // Tipo de formulario (login o registro, true o false)
    const [formType, setFormType] = useState(false)
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState({ error: false })
    const navigate = useRouter()

    // Registro
    const onRegisterHandler = (ev)=> {
        ev.preventDefault()
        let [username, email, password, confirmPassword] = [ev.target[0].value.toLowerCase(), ev.target[1].value.toLowerCase(), ev.target[2].value, ev.target[3].value]
        
        // Validaciones
        let validate = validateRegister(username, email, password, confirmPassword)
        if (validate.error) return setError(validate)
        
        // Registro
        setLoader(true)
        userRegister(username, email, password, confirmPassword).then(res => {
            if (res.error) return setError({ error: true, message: res.message })
            setFormType(false)
            setLoader(false)
            return setError({ error: false })
        }).catch(err => {
            console.log(err)
            setLoader(false)
            return setError({ error: true, message: "Ocurrio un error, intente de nuevo mas tarde" })
        })

    }

    // Login
    const onAuthHandler = (ev)=> {
        ev.preventDefault()
        let [username, password] = [ev.target[0].value.toLowerCase(), ev.target[1].value.toLowerCase()]

        // Inicio de sesión
        setLoader(true)
        userLogin(username, password).then(res => {
            if (res.error) {
                setLoader(false)
                return setError({ error: true, message: res.message })
            }
            // JWT
            document.cookie = 'token=' + res.token + '; path=/; samesite=strict';
            setUpdate(!update)
            return navigate.push('/feed')
        }).catch(err => {
            console.log(err)
            setLoader(false)
            return setError({ error: true, message: 'Ocurrio un error, intente de nuevo mas tarde' })
        })
    }

    const onSetFormTypeHandler = ()=> {
        setError({ error: null })   
        setFormType(!formType)
    }

    return {
        error,
        loader,
        formType,
        onSetFormTypeHandler,
        onRegisterHandler,
        onAuthHandler
    }
}

export default useLogin