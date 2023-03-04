import React from "react";
import "./postContainer.css";
import banner from "./media/my-fat-to-fit-journey-unhealthy-past.jpg";

function PostContainer() {
  return (
    <div className="post-container">
      <div className="post-item">
        <img src={banner} alt="weightloss" />
        <h3>
          My Fat To Fit Journey: A True Story Of My Dark And Unhealthy Past
        </h3>
        <a href="#">Lifestyle</a>
        <a href="#">Weight Loss</a>
        <p>
          I will be completely honest with you about my fat to fit journey.
          Maybe the first thing you learn about me would make you…
        </p>
      </div>
      <div className="post-item">post container</div>
      <div className="post-item">post container</div>
      <div className="post-item">post container</div>
      <div className="post-item">post container</div>
      <div className="post-item">post container</div>
    </div>
  );
}

export default PostContainer;

/* 


*/
