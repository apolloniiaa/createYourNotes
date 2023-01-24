import classes from './NewPost.module.css';

function NewPost({ onBodyChange, onAuth, onCancel }) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor='body'>Text</label>
        <textarea id='body' required rows={3} onChange={onBodyChange} />
      </p>
      <p>
        <label htmlFor='name'>Title</label>
        <input type='text' id='name' required onChange={onAuth} />
      </p>
      <p className={classes.actions}>
        <button type='button' onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
