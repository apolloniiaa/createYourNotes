import { useLoaderData } from 'react-router-dom';
import Post from './Post';
import classes from './PostLists.module.css';

const PostsList = () => {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.body}
            />
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
