import { useState, useEffect, useContext } from "react";
import { firestore } from "../firebase";
import { collectIdsAndDocs } from "../utils";
import Router from "next/router";
import { UserContext } from "../UserContext";

const Comments = ({ id }) => {
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [comment, setComment] = useState("");
  const [cdata, setCdata] = useState("");
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await firestore.collection(`posts/${id}/comments`).get();
      const cs = snapshot.docs.map(collectIdsAndDocs);
      setCdata(cs);
    };
    fetchData();
  }, [id]);

  useEffect(() => {}, [cdata]);

  const addComment = async (e) => {
    e.preventDefault();
    const createdAt = Date.parse(Date());

    const commentData = {
      name: user.displayName,
      comment,
      time: createdAt,
      email: user.email,
    };

    await firestore.collection(`posts/${id}/comments`).add(commentData);
    Router.reload();
  };

  return (
    <div className="comments-wrapper">
      <h2>Comments</h2>
      <div className="add-c-wrapper">
        {user ? (
          <form onSubmit={addComment}>
            <span className="u-c-info">
              <b>{user.displayName} </b> <br />
              {user.email}
            </span>
            <div className="t-c-w">
              <textarea
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                placeholder="Comment Here"
              ></textarea>
              <button type="submit">Add Comment</button>
            </div>
          </form>
        ) : (
          <>
            {" "}
            <div className="c-no-user-wrapper">
              You need to be Signed In to add a comment.
            </div>{" "}
          </>
        )}
      </div>

      <div className="clist-wrapper">
        {cdata.length !== 0 ? (
          cdata.map((c) => {
            return (
              <div key={c.id} className="single-c-wrapper">
                <span className="c-by">{c.name}</span>
                <span className="c-time">
                  {" "}
                  at {new Date(c.time).toLocaleString()} commented:
                </span>
                <span className="c-content">{c.comment}</span>
              </div>
            );
          })
        ) : (
          <div className="t-a-c">No Comments yet</div>
        )}
      </div>
    </div>
  );
};

export default Comments;
