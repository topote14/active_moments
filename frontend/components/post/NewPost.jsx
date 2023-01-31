import { useRef } from "react"
import useNewPost from "../../hooks/useNewPost"
import Loader from "../Loader"
import Image from "next/image"
import uploadImg from "../../public/upload.png"

const NewPost = ({ update, setUpdate }) => {
	
	const { error, loader, length, setLength, onSubmitHandler } = useNewPost(update, setUpdate)
	const inputFileRef = useRef()

	let buttonValue = loader ? <Loader width={18} height={18} /> : "Publicar"

	return (
		<form onSubmit={(ev)=> onSubmitHandler(ev)} className="newPostForm">
			{error.error && <span className="error">{error.message}</span>}
			<input ref={inputFileRef} style={{display: "none"}} type="file" name="image" accept="image/*" />
			<textarea onChange={(ev)=> setLength(ev.target.value.length)} name="content" cols="120" rows="6" maxLength={200} placeholder="¿En qué estas pensando?"/>
			<div>
				<span>{length}/200</span>
				<Image onClick={()=> inputFileRef.current.click()} width='26' height='26' src={uploadImg} alt='Subir image' />
				<button type="submit">{buttonValue}</button>
			</div>
		</form>
	)
}

export default NewPost