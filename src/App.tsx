import { useEffect, useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import { Header } from './components/layout/header/Header';
import { Screen } from './screens/Screen';

import { getData, removeData } from './utils/fetch';
import type { Data } from './utils/fetch';

function App() {
  const location = useLocation();
  const [data, setData] = useState<Data[]>(() => []);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      const path = location.pathname;
      if (path !== '/') {
        setLoading(true);
        setError(false);
        const response = await getData(path);
        if (response.success) {
          if (response.data?.length) setData(response.data);
        } else {
          setError(true);
        }
        setLoading(false);
      }
    }
    fetchData();
  }, [location]);

  async function handleRemove(id: number) {
    let update = [...data];
    update = update.filter((data) => data.id !== id);
    const path = location.pathname;
    const response = await removeData(path, id);
    if (response.success) {
      setData(update);
    }
  }

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/dishes">
          <Screen handleRemove={(id) => handleRemove(id)} data={data} loading={loading} header="Dishes" error={error} />
        </Route>
        <Route path="/sports">
          <Screen handleRemove={(id) => handleRemove(id)} data={data} loading={loading} header="Sports" error={error} />
        </Route>
        <Route path="/">
          <div className="Intro">
            <h1>Welcome to Pablo's</h1>
            <img src="/assets/food_for_readme.jpg" alt="" />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
