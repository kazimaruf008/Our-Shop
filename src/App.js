import './App.css';
import Home from './component/Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createContext } from 'react';
import { useState } from 'react';
import Admin from './component/Admin/Admin';
import Header from './component/Header/Header';
import Orders from './component/Orders/Orders';
import PrivateRoute from './component/PrivetRoute/PrivetRoute';
import Login from './component/Login/Login';

export const UserContext = createContext();

function App(props) {
  const [loginUser, setLoginUser] = useState({})
  return (
    <UserContext.Provider value = {[loginUser, setLoginUser]}>
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/admin" exact>
            <Admin></Admin>
          </PrivateRoute>
          <Route path="/orders" exact>
            <Orders></Orders>
          </Route>
          <Route path="/login" exact>
            <Login></Login>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;