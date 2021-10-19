import { Switch, Route } from 'react-router-dom';
import { DishScreen } from './screens/dish-screen/DishScreen';
import { SportsScreen } from './screens/sports-screen/SportsScreen';

export const Routes = () => {
  return (
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
  );
};
