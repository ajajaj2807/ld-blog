import { useEffect, useState, createContext } from "react";
import Header from "../comps/Header";
import Footer from "../comps/Footer";
import Latest from "../comps/Latest";
import Subscribe from "../comps/Subscribe";
import AllPosts from "../comps/AllPosts";
import { firestore } from "../firebase";
import { collectIdsAndDocs } from "../utils";
import Loading from "../comps/Loading";
import { NextSeo } from "next-seo";
import Notification from "../comps/Notification";
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
      const sortedPosts = posts.sort((a,b) => a.createdAt - b.createdAt)

      setPosts(sortedPosts);
    };

    fetchData();
    return setLoading(false);
  }, []);

  // useEffect(() => {}, [posts]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="body-container">
      <NextSeo
        title="Web Development Blog - Ajay Yadav"
        description="Useful Web Develpoment Articles and Resources on ReactJS, Modern Javascript, Advanced Patterns, Good Practices and much more"
        openGraph={{
          url: "https://www.ajay.rocks/",
          title: "Ajay Yadav - Personal Blog",
          description:
            "Useful Web Develpoment Articles and Resources on ReactJS, Modern Javascript, Advanced Patterns, Good Practices and much more",
          site_name: "Ajay Yadav - Personal Blog",
        }}
      />
      <Notification type="info">
        Newsletter facility available now. Click on the Subscribe button to
        Subscribe. <b>Guest Articles Coming soon!</b>
      </Notification>
      <Header />
      <Latest posts={posts} />
      <Subscribe />
      <AllPosts posts={posts} />
      <Footer />
    </div>
  );
};

export default Index;
