import React from "react";

const About = () => (
  <div>
    <div className="about-container">
      <div className="about--main">
        <div className="content">
          <h1 className="about--main__heading">
            Thank you for visiting my blog.
          </h1>
          <p className="about--main__paragraph">
            I am <span className="bold">James Au</span>. I am a Psychology
            student at UC Davis. I took a Computer Science class in last quarter
            and has been hooked since. Right now I am most interested in
            learning Reactjs, CSS flexbox and CSS grid. I spend most of my free
            time building websites and research the latest web design trend.
            <br />
            Here's a link to my portfolio.
          </p>
          <div className="button-container">
            <a href="https://jamesaucode.github.io/portfolio/">
              <button className="button--portfolio">Portfolio</button>
            </a>
          </div>
        </div>
        <p className="about--main__paragraph">Follow me on social media!</p>
        <div className="button-container">
          <a
            href="https://www.facebook.com/jamesaubudi"
            className="button--social-media"
          >
            <i className="fa fa-facebook-square" aria-hidden="true" />
          </a>
          <a
            href="https://www.twitter.com/jamesaucode"
            className="button--social-media"
          >
            <i className="fa fa-twitter" aria-hidden="true" />
          </a>
          <a
            href="https://github.com/jamesaucode"
            className="button--social-media"
          >
            <i className="fa fa-github" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default About;
