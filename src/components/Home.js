import React from "react";
import * as contentful from "contentful";
import { Link } from "react-router-dom";

class Home extends React.Component {
  state = {
    posts: [],
    arr: []
  };

  client = contentful.createClient({
    space: "uupo32e1prlh",
    accessToken:
      "1de46822c29795295c642c9cc678d52b9e26451b4a46165008b85d12f9095ee6"
  });

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  fetchPosts = () => this.client.getEntries();

  setPosts = response => {
    this.setState({
      posts: response.items
    });
  };

  render() {
    return (
      <div>
        <div className="home-container">
          <div className="home--main">
            <div className="home--content">
              <h1>All Blog entries</h1>
              {this.state.posts
                .sort((post1, post2) => {
                  return post2.fields.order > post1.fields.order;
                })
                .map(({ fields }, i) => (
                  <Link
                    key={fields.path}
                    to={`/home/blog/${fields.path}`}
                    className="home--main__heading"
                  >
                    <span>
                      {fields.title}
                      <br />
                      <span className="home--date">{fields.date}</span> <br />
                      <span className="home--paragraph">{fields.content}</span>
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
