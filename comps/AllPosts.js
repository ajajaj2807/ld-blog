import Link from "next/link";

const AllPosts = ({ posts }) => {
  return (
    <div className="allposts-wrapper">
      <h3>All Posts</h3>

      <div className="ap-cont">
        {posts.reverse().map((post) => {
          return (
            <div key={post.id} className="sp-cont">
              <div className="sp-content">
                <span className="sp-title">{post.title}</span>
                <span className="sp-by">
                  {post.by +
                    " on " +
                    new Date(post.createdAt).toLocaleDateString()}
                </span>
              </div>

              <Link href={`post?id=${post.id}`}>
                <button className="ap-rm"> Read </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllPosts;
