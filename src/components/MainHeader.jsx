import { Link } from 'react-router-dom';
import { MdPostAdd, MdMessage } from 'react-icons/md';

import classes from './MainHeader.module.css';

function MainHeader({ onCreatePost }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        ScribeSparks Notes 📝
      </h1>
      <p>
        <Link to='/create-post' className={classes.button}>
          <MdPostAdd size={18} />
          New Notes
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
