import "./PostDetails.css";
import Layout from "../../Components/Layout/Layout" 
import { useParams, Link, Redirect } from "react-router-dom";
import { getPost,deletePost} from "../../Services/Post"
import { useState, useEffect } from "react"; 


const PostDetails = (props) => { 
  const { id } = useParams() 
  const [post, setPost] = useState(null) 
  const [isLoaded, setLoaded] = useState(false) 
  const [isDeleted,setDeleted] = useState(false)
  
  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id) 
      setPost(post) 
      setLoaded(true)  
      
    } 
    fetchPost()
  }, [id]) 
  const handleDelete = () => {
    deletePost(post._id)
    setDeleted(true)
  }

  if (!isLoaded) {
    return (
      <h1>Loading...... its not me</h1>
    )  
  }

  if ( isDeleted ) {
    return <Redirect to={`/`}/>
  }
  return (
    <div>
      <Layout>
        <div>
          <h1>{post.author}</h1> 
          <h2>{post.title}</h2>  
          <p>{post.content}</p>
          <h2>{post.genre}</h2>
        </div> 
        <button><Link to={`/post-edit/${post._id}`}>edit</Link></button> 
        <button onClick={ handleDelete }>delete</button>
      </Layout>
    </div>
  )
}
export default PostDetails;