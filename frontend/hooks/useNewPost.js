import { useState } from "react"
import { createPost } from "../services/post"
import { getToken } from "../utilities/getToken"

const useNewPost = (update, setUpdate) => {
	const [length, setLength] = useState(0) 
	const [error, setError] = useState({ error: null })
	const [loader, setLoader] = useState(false)
	
	const clearAll = (ev) => {
		ev.target[0].files = null
		ev.target[0].value = ''
		ev.target[1].value = ''
		setLength(0)
		setError({ error: null })
		setLoader(false);
	}

	const onSubmitHandler = (ev)=> {
		ev.preventDefault()
		let [token, content, image] = [getToken(), ev.target[1].value, ev.target[0].files[0]]
		
        if (content || image) {
			if (image && (image.size / 1024 / 1024) > 3) {
				return setError({ error: true, message: 'La imagen es muy grande (máximo 3Mb).' })
			} else if (content.length > 200) {
				return setError({ error: true, message: 'El contenido no puede tener mas de 200 caracteres.' })
			}
			setLoader(true)
			createPost(content, image, token).then(res => {
				if (res.error) {
					setLoader(false)
					return setError({ error: true, message: res.message ? res.message : res.error })
				}
				setUpdate(!update)
				return clearAll(ev)
			}).catch(error => {
				console.log(error)
				setError({ error: true, message: 'Ocurrio un error, intente recargar la página.' })
				return setLoader(false);
			})
		}
	}

	return {
		error,
		loader,
		length,
		setLength,
		onSubmitHandler
	}
}

export default useNewPost