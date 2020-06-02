import { useState, useEffect } from "react";
import { firestore } from "../firebase";
import { collectIdsAndDocs } from "../utils";
import Router from "next/router";

const Comments = ({ id }) => {
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [comment, setComment] = useState("");
  const [cdata, setCdata] = useState("");

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
      name,
      comment,
      time: createdAt,
      email
    };

    await firestore.collection(`posts/${id}/comments`).add(commentData);
    Router.reload();
  };

  return (
    <div className="comments-wrapper">
      <h2>Comments</h2>
      <div className="add-c-wrapper">
        <form onSubmit={addComment}>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Name"
          ></input>
          <input
            onChange={(e) => setMail(e.target.value)}
            value={email}
            required={true}
            type="email"
            placeholder="Email"
          ></input>
          <div className="t-c-w">
            <textarea
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              placeholder="Comment Here"
            ></textarea>
            <button type="submit">Add Comment</button>
          </div>
        </form>
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
