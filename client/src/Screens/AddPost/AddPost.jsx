import "./AddPost.css";
import { useState } from "react";
import Layout from "../../Components/Layout/Layout.jsx";
import { Redirect } from "react-router-dom";
import { createPost } from "../../Services/Post.js";

const AddPost = (props) => {
  const [post, setPost] = useState({
    author: "",
    title: "",
    content: "",
    genre: ""
  })

  const [isCreated, setCreated] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createPost(post)
    setCreated({ created })
  }
  const handleChange = (event) => {
    const { name, value } = event.target
    setPost({
      ...post, 
      [name]: value
    })
   }
  if (isCreated) {
    return <Redirect to={`/`} />
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
export default AddPost;