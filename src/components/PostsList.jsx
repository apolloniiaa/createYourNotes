import { useState } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import classes from './PostLists.module.css';
import Modal from './Modal';

const PostsList = ({ isPosting, onStopPosting }) => {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuth, setEnteredAuth] = useState('');

  // const [modalIsVisible, setModalIsVisible] = useState(true);

  // //!! enteredBody[0] //current value
  // //!! setEnteredBody[1] //state updating function

  const bodyChangeHandler = (e) => {
    setEnteredBody(e.target.value);
  };
  const authChangeHandler = (e) => {
    setEnteredAuth(e.target.value);
  };

  // const hideModalHandler = () => {
  //   setModalIsVisible(false);
  // };

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuth={authChangeHandler}
            onCancel={onStopPosting}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={enteredAuth} body={enteredBody} Post />
        <Post author='Clara' body='Learn to React' Post />
      </ul>
    </>
  );
};

export default PostsList;
