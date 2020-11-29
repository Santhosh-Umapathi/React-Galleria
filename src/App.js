import React from 'react'
//React Router
import { Redirect, Route, Switch } from 'react-router-dom';

//Layout
import Layout from './Layout/Layout';

//Screens
import LoginScreen from './screens/LoginScreen/LoginScreen'
import HomeScreen from './screens/HomeScreen/HomeScreen';
import FavoritesScreen from './screens/FavoritesScreen/FavoritesScreen'
import LogoutScreen from './screens/LogoutScreen/LogoutScreen'

//Redux
import { useSelector } from 'react-redux';



const App = () =>
{

  const isAuthenticated = useSelector(state => state.token)

  //Login Route
  let routes = (
    <Switch>
      <Route path="/login" component={LoginScreen} />
      <Redirect to='/login'/>
    </Switch>)

  // Normal Routes
  if(isAuthenticated)
  {
    routes = (
    <Layout>
      <Switch>
        <Route path="/favorites" component={FavoritesScreen} />
        <Route path="/logout" component={LogoutScreen} />
        <Route path="/" exact component={HomeScreen} />
        <Redirect to='/' />
      </Switch>
    </Layout>)
  }


  return routes;
}

export default App;
