import { useState, useEffect } from 'react';
import Post from './Post';
import classes from './PostLists.module.css';

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('http://localhost:8080/posts');
      const resData = await response.json();
      setPosts(resData.posts);
      setIsFetching(false);
    }
    fetchPosts();
  }, []);

  const addPosthandler = (postData) => {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // setPosts([postData, ...posts]);
    setPosts((existingPosts) => [postData, ...existingPosts]);
  };

  return (
    <>
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}

      {isFetching && posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h3>There are no notes yet 😔</h3>
          <p> Start adding some!</p>
        </div>
      )}
      {isFetching && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h3>Loading posts.. </h3>
        </div>
      )}
    </>
  );
};

export default PostsList;
