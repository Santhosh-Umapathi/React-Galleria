import React, { useEffect } from 'react'

//React Router
import { Redirect, Route, Switch } from 'react-router-dom';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './store/actions/actions'

//Layout
import Layout from './Layout/Layout';

//Screens
import LoginScreen from './screens/LoginScreen/LoginScreen'
import HomeScreen from './screens/HomeScreen/HomeScreen';
import FavoritesScreen from './screens/FavoritesScreen/FavoritesScreen'
import LogoutScreen from './screens/LogoutScreen/LogoutScreen'


const App = () =>
{
  
  
  //Redux State & Actions
  const isAuthenticated = useSelector(state => state.token)
  const dispatch = useDispatch()

  //Check if already logged in
  useEffect(() =>
  {
    dispatch(actions.checkLoginStatus())
  }, [])

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
