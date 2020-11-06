/* Import Dependencies */

import React, { Component } from "react";
import axios from "axios";

// Create the post componentfor single post
class Post extends Component {
  // set initial state to null
  state = {
    post: null,
  };

  // When component Post mounts set id equal url post_id
  componentDidMount() {
    let id = this.props.match.params.post_id;

    /* Fetch single post data from jsonplaceholder */
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((res) => {
        // push the new data into state
        this.setState({
          post: res.data,
        });
      });

    // Render the post if it exixts
  }
  render() {
    const post = this.state.post ? (
      <div className="post">
        <h4 className="center">{this.state.post.title}</h4>
        <p>{this.state.post.body}</p>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );

    return <div className="container">{post}</div>;
  }
}

// Export the post component
export default Post;
