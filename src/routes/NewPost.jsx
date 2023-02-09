import { useState } from 'react';
import classes from './NewPost.module.css';

import Modal from '../components/Modal';

function NewPost({ onCancel, onAddPost }) {
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

  const submitHandler = (e) => {
    e.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuth,
    };
    console.log(postData);
    onAddPost(postData);
    onCancel();
  };
  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor='body'>Text</label>
          <textarea id='body' required rows={3} onChange={bodyChangeHandler} />
        </p>
        <p>
          <label htmlFor='name'>Title</label>
          <input type='text' id='name' required onChange={authChangeHandler} />
        </p>
        <p className={classes.actions}>
          <button type='button' onClick={onCancel}>
            Cancel
          </button>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
