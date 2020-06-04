import React, { useEffect, useContext, useState } from "react";
import { firestore } from "../firebase";
import firebase from "firebase/app";
import { UserContext } from "../UserContext";

export default function Like({ id, likes, likedBy }) {
  const { user, setUser } = useContext(UserContext);
  const [isLiked, setLiked] = useState(false);
  const [warn, setWarn] = useState(false);
  const [llikes, setLlikes] = useState(likes);

  const likePost = () => {
    if (user == null) return setWarn(true);

    if (id !== undefined) {
      const pref = firestore.doc(`posts/${id}`);
      pref.update({
        likes: firebase.firestore.FieldValue.increment(1),
        likedBy: firebase.firestore.FieldValue.arrayUnion(user.uid),
      });
      setLiked(true);
      setLlikes(() => llikes + 1);
    }
  };

  const dislikePost = () => {
    if (user == null) return setWarn(true);

    if (id !== undefined) {
      const pref = firestore.doc(`posts/${id}`);
      pref.update({
        likes: firebase.firestore.FieldValue.increment(-1),
        likedBy: firebase.firestore.FieldValue.arrayRemove(user.uid),
      });
      setLiked(false);
      setLlikes(() => llikes - 1);
    }
  };

  useEffect(() => {
    setLlikes(likes);
    if (user == null) return;
    setWarn(false);
    var liked = likedBy.find((e) => e == user.uid);
    liked ? setLiked(true) : setLiked(false);
  }, [likedBy, user, likes]);

  return (
    <div className="like-wrapper">
      {llikes} {llikes == 1 ? "Like" : "Likes"}
      <button onClick={isLiked ? dislikePost : likePost}>
        {" "}
        {isLiked ? "Liked" : "Like 👍"}{" "}
      </button>
      {warn ? (
        <span
          style={{ color: "red", textAlign: "center", margin: "1em 0 0 0" }}
        >
          {" "}
          Please Sign In to perform this action{" "}
        </span>
      ) : (
        ""
      )}
    </div>
  );
}
