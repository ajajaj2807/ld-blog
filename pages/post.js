import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../comps/Header";
import Footer from "../comps/Footer";
import { firestore } from "../firebase";
import firebase from "firebase/app";
import Loading from "../comps/Loading";
const ReactMarkdown = require("react-markdown/with-html");

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await firestore.doc(`posts/${id}`).get();
      const p = snapshot.data();
      setPost(p);

      const pref = firestore.doc(`posts/${id}`);
      pref.update({
        views: firebase.firestore.FieldValue.increment(1),
      });
    };
    fetchData();
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [post]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="spp-wrap">
      <Header />
      <div className="sp-wrapper">
        <div className="pp-head">
          <span className="pp-title"> {post ? post.title : ""} </span>
          <span className="pp-info">
            {post
              ? post.by +
                " on " +
                new Date(post.createdAt).toLocaleDateString() +
                "  Views:" +
                post.views
              : ""}
          </span>
        </div>
        <div className="pp-body">
          <div className="pp-des">{post ? post.description : ""}</div>
          <div className="pp-content">
            {post ? (
              <ReactMarkdown escapeHtml={false} source={post.content} />
            ) : (
              ""
            )}
          </div>
        </div>

        {/* <div className="pp-like-wrapper">
          <h2 className="pp-l-title">Liked the article? Give it a like!</h2>
          <button className="like-post-btn">Like💖</button>
        </div> */}
      </div>
      <Footer />
      <style jsx>
        {`
        .pp-head{
          background-blend-mode: soft-light;
          background: url("${post ? post.imgUrl : ""}"),
              linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1));
          background-size: cover;
          background-repeat: no-repeat;
          color:#fff;
        }
        `}
      </style>
    </div>
  );
};

export default Post;
