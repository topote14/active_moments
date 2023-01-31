import { useState } from "react"
import Header from "../../components/header/Header"
import Nav from "../../components/nav/Nav"
import Post from "../../components/post/Post"
import { useUserContext } from "../../context/user"
import useFeed from "../../hooks/useFeed"

const Profile = () => {
    const {user} = useUserContext()

    // const [publications, setPublications] = useState([dataTest1, dataTest1, dataTest1, dataTest1])
    const [publications, setPublications] = useState([])
    
    const [seePost, setSeePost] = useState([null, null])
    const [seeImage, setSeeImage] = useState(false)

    const onSeePostHandler = (post, index)=> {
        setSeePost([post, index])
        if (post) return document.body.style.overflowY = 'hidden'
        return document.body.style.overflowY = 'auto'
    }

    return (
        <div className="profileContainer">
            <Nav/>
            <Header/>

        </div>
    )
}

export default Profile