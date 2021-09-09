import { Switch, Route } from "react-router-dom";
import Board from "./Board";
import Count from "./Count";
import Todo from "./Todo";

const AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Board />
        </Route>
        <Route exact path="/count">
          <Count />
        </Route>
        <Route exact path = "/todo">
            <Todo />
        </Route>
      </Switch>
    </div>
  );
};

export default AppRouter;
