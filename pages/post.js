import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../comps/Header";
import Footer from "../comps/Footer";
import { firestore } from "../firebase";
import firebase from "firebase/app";
import Loading from "../comps/Loading";
import Comments from "../comps/Comments";
import { NextSeo } from "next-seo";
const ReactMarkdown = require("react-markdown/with-html");

const Post = () => {
  const router = useRouter();
  let { id } = router.query;
  const [post, setPost] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let { id } = router.query;
    console.log(id);
    const fetchData = async () => {
      const snapshot = await firestore.doc(`posts/${id}`).get();
      const p = snapshot.data();
      setPost(p);

      if (id !== undefined) {
        const pref = firestore.doc(`posts/${id}`);
        pref.update({
          views: firebase.firestore.FieldValue.increment(1),
        });
      }
    };
    fetchData();
  }, [router.query]);

  useEffect(() => {
    setLoading(false);
  }, [post]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="spp-wrap">
      <NextSeo
        title={post ? post.title : "Article by Ajay Yadav - Personal Blog"}
        description={post ? post.description : ""}
        openGraph={{
          title: post ? post.title : "Article by Ajay Yadav",
          description: post ? post.description : "",
          url: "https://www.ajay.rocks/",
          type: "blog",
          images: [
            {
              url: post ? post.imgUrl : "",
              alt: "Article Head Image",
            },
          ],
        }}
      />
      <Header />
      <div className="sp-wrapper">
        <div className="pp-head">
          <span className="pp-title"> {post ? post.title : ""} </span>
          <span className="pp-info">
            {post
              ? post.by +
                ", " +
                new Date(post.createdAt).toLocaleDateString() +
                " Views: " +
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
          <Comments id={id} comments={""} />
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
