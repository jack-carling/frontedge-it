import ClipLoader from 'react-spinners/ClipLoader';
import { Card } from '../components/card/Card';
import type { Data } from '../utils/fetch';

import styles from './Screen.module.css';

interface Props {
  data?: Data[];
  loading: boolean;
  header: string;
  error: boolean;
  handleRemove: (id: number) => void;
}

export const Screen = ({ data, loading, header, error, handleRemove }: Props) => {
  if (error) {
    return (
      <div className={styles.screenContainer}>
        <h1>Error</h1>
        <span>Unable to connect to server and load data...</span>
      </div>
    );
  } else if (loading) {
    return (
      <div className={styles.screenContainer}>
        <h1>{header}</h1>
        <ClipLoader color="red" loading={loading} size={50} />
      </div>
    );
  } else if (!data?.length) {
    return (
      <div className={styles.screenContainer}>
        <h1>{header}</h1>
        <span>No more items remaining...</span>
      </div>
    );
  } else {
    return (
      <div className={styles.screenContainer}>
        <h1>{header}</h1>
        <article>
          {data?.length &&
            data.map((card) => {
              return <Card handleRemove={(id) => handleRemove(id)} {...card} key={card.id} />;
            })}
        </article>
      </div>
    );
  }
};
