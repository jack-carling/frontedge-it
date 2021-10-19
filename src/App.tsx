import { Switch, Route } from 'react-router-dom';

import { Header } from './components/layout/header/Header';
import { DishScreen } from './screens/dish-screen/DishScreen';
import { SportsScreen } from './screens/sports-screen/SportsScreen';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/dishes">
          <DishScreen header="Dishes" />
        </Route>
        <Route path="/sports">
          <SportsScreen header="Sports" />
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
