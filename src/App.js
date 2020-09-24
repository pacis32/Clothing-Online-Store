
import 'bootstrap/dist/css/bootstrap.min.css'; 
import React from "react";
import {
      BrowserRouter as Router,
      Switch,
      Route,
      
    } from "react-router-dom";
import Products from './Components/Products'
import store from './store'
import { Provider } from "react-redux";
import Navbar from "./Components/Navbar";
import Basket from './Components/Basket'
import Filter from './Components/Filter'
import "./App.css";
import Login from './SignIn/Login'
import Register from './SignIn/Register';

    
     const App=() =>{
      
      return (
        <Provider store={store}>
        <Router>
          <div>
            <Navbar/>
            <Filter/>

            <Switch>
            
              <Route exact path="/">
                <Products />
               
               
              </Route>
              <Route  path="/cart">
              <Basket />

              </Route>
              <Route  path="/Login">
              <Login />

              </Route>
              <Route  path="/Register">
              <Register />

              </Route>

            </Switch>
          </div>
        </Router>
        </Provider>
      );
    }
    
    
    
    export default App;