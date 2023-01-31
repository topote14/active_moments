import { useState } from 'react';
import { likePost } from '../../services/post';
import { formatDifTime } from '../../utilities/times';
import Image from 'next/image';
import muscleLike from '../../public/muscleImg.png';
import likeFillImg from '../../public/likeFill.png';
import commentImg from '../../public/comment.png';
import profileImg from '../../public/profile.png';
import { getToken } from '../../utilities/getToken';

const API_URL = process.env.NEXT_PUBLIC_API_URL

const Post = ({ data, userId }) => {
	
	const [like, setLike] = useState(data.likes.includes(userId))
	const [countLikes, setCountLikes] = useState(data.likes.length)
	const [loading, setLoading] = useState(false)

	let names = data.owner.name ? (data.owner.lastname ? data.owner.name + " " + data.owner.lastname : data.owner.name) : (data.owner.lastname ? data.owner.lastname : "")
	let profileImage = data.owner.image ? (API_URL + data.owner.image) : profileImg
	let usernameStyles = names ? {} : {fontSize: '1.1rem'}
	let isLike = like ? likeFillImg : muscleLike
	let time = formatDifTime(data.createdAt)
	
	const onLikeHandler = ()=> {
		if (!loading) {
			setLoading(true)
			let token = getToken()
			if (!like) {
				setCountLikes(countLikes => countLikes + 1)
			} else {
				setCountLikes(countLikes => countLikes - 1)
			}
			setLike(!like)
			likePost(data._id, token)
				.then(res => setLoading(false))
				.catch(error => {
					console.log(error)
					setLoading(false)
				})
		}
	}

	return (
		<div className="publicationContainer">
			<div className="user">
				<Image width='64' height='64' src={profileImage} alt="Usuario"/>
				<div className='info' >
					{names && <span className="names">{names}</span>}
					<span style={usernameStyles} className="username">{data.owner.username}</span>
					<span className='date'>{time}</span>
				</div>
				<div className="delete">
					<div></div>
					<div></div>
				</div>
			</div>
			{data.content && <p>{data.content}</p>}
			{data.image && <Image width='300' height='300' className='publication' alt='Usuario' src={API_URL + data.image} />}
			<div className="actions">
				<div>
					<Image width='30' height='auto' src={isLike} alt='Me gusta' onDoubleClick={(ev) => ev.preventDefault()} onClick={onLikeHandler} />
					{countLikes}
				</div>
				<div>
					<Image width='30' height='auto' src={commentImg} alt='Comentar' />
					{data.commentsQuantity}
				</div>
			</div>
		</div>
	)
}

export default Post;
