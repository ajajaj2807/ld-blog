import Link from "next/link";
import { useState, useEffect } from "react";

const Latest = ({ posts }) => {
  useEffect(() => {
    if (!posts[0]) {
      return;
    }
    if (posts[0].id.length !== 0) {
    }
  }, [posts[0]]);

  return (
    <Link href={`/post?id=${posts[posts.length - 1] ? posts[posts.length - 1].id : ""}`}>
      <div className="latest-wrapper">
        <div className="label">LATEST</div>
        <div className="title-details">
          <span className="lp-title"> {posts[posts.length - 1] ? posts[posts.length - 1].title : ""} </span>
          <span className="lp-info">
            {posts[posts.length - 1]
              ? posts[posts.length - 1].by +
                " on " +
                new Date(posts[posts.length - 1].createdAt).toLocaleDateString()
              : ""}
          </span>
        </div>
        <div className="lp-img">
          <div className="lp-overlay"></div>
          {/* <img src={pi} className="lp-mi" /> */}
        </div>
        <style jsx global>
          {`
          .lp-overlay {
            width:80vw;
            height: 45vh;
            background-blend-mode: color-burn;
            background-image: url("${posts[posts.length - 1] ? posts[posts.length - 1].imgUrl : ""}"),
              linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,1));
            background-size: cover;
          }
        `}
        </style>
      </div>
    </Link>
  );
};

export default Latest;
