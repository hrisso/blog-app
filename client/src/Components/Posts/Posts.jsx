import "./Posts.css";
import React, { Component } from "react";
import { getPosts } from "../../Services/Post";

class Posts extends Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }
  async componentDidMount() {
    const posts = await getPosts()
    this.setState({ posts })
  }
  // console.log(posts)
  render() {
    const postsList = this.state.posts.map((post, index) => (
      <div className="posts">
        <h3>{post.author}</h3>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <h3>{post.genre}</h3>
      </div>
    ))
    return (
      <div>
      {postsList}
      </div>
    )
  }
}
export default Posts;