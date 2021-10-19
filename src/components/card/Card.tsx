import { useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import styles from './Card.module.css';

interface Props {
  id: number;
  title: string;
  description: string;
  url: string;
  handleRemove: (id: number) => void;
}

export const Card = ({ id, title, description, url, handleRemove }: Props) => {
  const [loading, setLoading] = useState(false);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImage} style={{ backgroundImage: `url("${url}")` }}></div>
      <div className={styles.cardInfo}>
        <span className={styles.title}>{title}</span>
        <span>{description}</span>
      </div>
      <div className={styles.cardButton}>
        <button
          onClick={() => {
            handleRemove(id);
            setLoading(true);
          }}
        >
          Remove
        </button>
        <ClipLoader color="red" loading={loading} size={20} />
      </div>
    </div>
  );
};
