import { useEffect, useState } from "react";
import Header from "../comps/Header";
import Footer from "../comps/Footer";
import Latest from "../comps/Latest";
import Subscribe from "../comps/Subscribe";
import AllPosts from "../comps/AllPosts";
import { firestore } from "../firebase";
import { collectIdsAndDocs } from "../utils";
import Loading from "../comps/Loading";

//To remove a post
// const handleRemove = async () => {
//   const allPosts = state.posts;
//   await firestore.doc(`posts/${id}`).delete()
//   const posts = allposts.filter(post => post.id !== id)
//   setstate({posts})
// }

//********************************************* */

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await firestore.collection("posts").get();

      const posts = snapshot.docs.map(collectIdsAndDocs);

      setPosts(posts);
    };

    fetchData();
    setLoading(false);
  }, []);

  useEffect(() => {}, [posts]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="body-container">
      <Header />
      <Latest posts={posts} />
      <Subscribe />
      <AllPosts posts={posts} />
      <Footer />
    </div>
  );
};

export default Index;