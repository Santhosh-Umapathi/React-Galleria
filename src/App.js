import React from 'react'
//React Router
import { Redirect, Route, Switch, NavLink } from 'react-router-dom';


//Layout
import Layout from './Layout/Layout';

//Screens
import LoginScreen from './screens/LoginScreen/LoginScreen'
import HomeScreen from './screens/HomeScreen/HomeScreen';
import FavoritesScreen from './screens/FavoritesScreen/FavoritesScreen'
import LogoutScreen from './screens/LogoutScreen/LogoutScreen'


const App = () =>
{

  let routes = <Switch>
    <Route path="/login" component={LoginScreen} />
    <Redirect to='/login'/>
  </Switch>

 const isAuthenticated = true

  if(isAuthenticated === true)
  {
    console.log(isAuthenticated)
    routes = <Switch>
      <Route path="/favorites" component={FavoritesScreen} />
      <Route path="/logout" component={LogoutScreen} />
      <Route path="/" exact component={HomeScreen} />
      <Redirect to='/' />
    </Switch>
  }


  return (

      isAuthenticated
        ? <Layout>
          {routes}
        </Layout >
        : routes
            
      
    

  );
}

export default App;
