import "./PostDetails.css";
import Layout from "../../Components/Layout/Layout" 
import { useParams, Link } from "react-router-dom";
import { getPost} from "../../Services/Post"
import { useState, useEffect } from "react"; 


const PostDetails = (props) => { 
  const { id } = useParams() 
  const [post, setPost] = useState(null) 
  const [isLoaded, setLoaded] = useState(false)  
  
  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id) 
      setPost(post) 
      setLoaded(true)  
      
    } 
    fetchPost()
},[id])

  if (!isLoaded) {
    return (
      <h1>Loading...... its not me</h1>
    )  
  }
  console.log(id)
  
  return (
    <div>
      <Layout>
        <div>
          <h1>{post.author}</h1> 
          <h2>{post.title}</h2>  
          <p>{post.content}</p>
          <h2>{post.genre}</h2>
        </div>
      </Layout>
    </div>
  )
}
export default PostDetails;