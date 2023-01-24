import { useState } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import classes from './PostLists.module.css';
import Modal from './Modal';

const PostsList = ({ isPosting, onStopPosting }) => {
  const [posts, setPosts] = useState([]);

  const addPosthandler = (postData) => {
    // setPosts([postData, ...posts]);
    setPosts((existingPosts) => [postData, ...existingPosts]);
  };

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPosthandler} />
        </Modal>
      )}

      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}

      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h3>There are no notes yet 😔</h3>
          <p> Start adding some!</p>
        </div>
      )}
    </>
  );
};

export default PostsList;
