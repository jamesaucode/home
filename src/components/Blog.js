import React from "react";
import BlogItem from './BlogItem';
import * as contentful from 'contentful';

class Blog extends React.Component {
  state = {
    posts: []
  }

  client = contentful.createClient({
    space: "uupo32e1prlh",
    accessToken:
      "1de46822c29795295c642c9cc678d52b9e26451b4a46165008b85d12f9095ee6"
  });

  componentDidMount () {
    this.fetchPosts().then(this.setPosts);
  }

  fetchPosts = () => this.client.getEntries()

  setPosts = response => {
    this.setState ({
      posts: response.items,
    })
    // console.log(this.state.posts);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <div className="body-container">
          <div className="content--main">
            { this.state.posts.map(({fields},{sys}, i) =>
                <BlogItem key={i} {...fields} {...sys} {...this.props}/>
            )}
          </div>
          {/* <div className="content--side">
            <div className="content--side__posts">
              <h1 className="content--side__heading">Previous post</h1>
              <span className="content--side__blog-title">Day 38</span>
              <span className="content--side__paragraph">None.</span>
              <button className="button--more-posts">
                <i className="fa fa-arrow-left" aria-hidden="true" />
              </button>
            </div>
            <div className="content--side__posts">
              <h1 className="content--side__heading">Next post</h1>
              <span className="content--side__blog-title">Day 40</span>
              <span className="content--side__paragraph">None.</span>
              <button className="button--more-posts">
                <i className="fa fa-arrow-right" aria-hidden="true" />
              </button>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}
export default Blog;
