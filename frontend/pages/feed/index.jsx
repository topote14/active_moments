import { useUserContext } from "../../context/user"
import useFeed from "../../hooks/useFeed"
import NewPost from "../../components/post/NewPost"
import Post from "../../components/post/Post"

const Feed = () => {

    const { update, setUpdate, visor, docs } = useFeed()
    const { user } = useUserContext()

    return (
        <div className="feedContainer">
            <NewPost update={update} setUpdate={setUpdate} />
            {docs.length > 0 && docs.map(doc => { return <Post key={doc._id} data={doc} userId={user.id} /> })}
            <div ref={visor} id="visor"></div>
        </div>
    )
}

export default Feed