import React from "react";
import * as Markdown from "react-markdown";

const BlogItem = (props, { match }) => {
  console.log(props);
  return (
    <div>
      {props.match.params.id === props.path ? (
        <div className="content">
          <h1 className="content--main__heading">{props.title}</h1>
          <h2 className="content--main__date">{props.date}</h2>
          <Markdown
            className="content--main__paragraph"
            source={props.match.params.id === props.path ? props.content : ""}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default BlogItem;
