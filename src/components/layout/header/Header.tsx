import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <ul>
        <li>
          <Link to="/sports" className={styles.linkStyle}>
            Sports
          </Link>
        </li>
        <li>
          <Link to="/dishes" className={styles.linkStyle}>
            Dishes
          </Link>
        </li>
      </ul>
    </div>
  );
};
