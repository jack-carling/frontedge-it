import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import ClipLoader from 'react-spinners/ClipLoader';
import { Card } from '../../components/card/Card';

import { getData, removeData } from '../../utils/fetch';
import type { Data } from '../../utils/fetch';

import styles from '../Screen.module.css';

interface Props {
  header: string;
}

export const SportsScreen = ({ header }: Props) => {
  const location = useLocation().pathname;
  const [data, setData] = useState<Data[]>(() => []);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData(location);
        setData(data);
        setLoading(false);
      } catch (error) {
        console.warn(error);
        setError(true);
      }
    }
    fetchData();
  }, [location]);

  async function handleRemove(id: number) {
    try {
      const response = await removeData(location, id);
      if (response.success) {
        setData((prevData) => prevData.filter((data) => data.id !== id));
      }
    } catch (error) {
      console.warn(error);
    }
  }

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
