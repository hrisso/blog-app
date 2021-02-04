import "./PostEdit.css";
import { useState, useEffect } from "react";
import Layout from "../../Components/Layout/Layout.jsx";
import { Redirect,useParams } from "react-router-dom";
import { updatePost,getPost } from "../../Services/Post.js";

const PostEdit = (props) => {
  const [post, setPost] = useState({
    author: "",
    title: "",
    content: "",
    genre: ""
  })

  const [isUpdated, setUpdated] = useState(false)
  let {id } = useParams()
  
  useEffect(() => {
    const fetchPost= async () => {
        const post = await getPost(id)
        setPost(post)
    }
    fetchPost()
}, [id])
  
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    // let {id } = props.match.params
    const updated = await updatePost(id,post)
    setUpdated({ updated })
  }
  const handleChange = (event) => {
    const { name, value } = event.target
    setPost({
      ...post, 
      [name]: value
    })
   }
  if (isUpdated) {
    return <Redirect to={`/post-details/${post._id}`} />
  }
  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <input
          className="input-author"
          placeholder="Author"
          value={post.author}
          name="author"
          required
          autoFocus
          onChange={handleChange} /> 
        <input className="input-title"
          placeholder="Title"
          value={post.title}
          name="title"
          required
          onChange={handleChange} /> 
        <textarea className="input-content"
          placeholder="Content"
          value={post.content}
          name="content"
          required
          rows={8}
          onChange={handleChange} /> 
        <input className="input-genre"
          placeholder="Genre"
          value={post.genre}
          name="genre"
          required
          onChange={handleChange} /> 
        <button
          type="submit">Submit</button>
      </form>

    </Layout>
  )
}
export default PostEdit;