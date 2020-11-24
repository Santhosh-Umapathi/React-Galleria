import React from 'react'
import Layout from './layout/layout';

//Screens
import LoginScreen from './screens/LoginScreen/LoginScreen'
import HomeScreen from './screens/HomeScreen/HomeScreen';


const App = () =>
{



  return (
    <div>
      {/* <LoginScreen /> */}
      <HomeScreen />
        {/* <Layout>
          <p>Starting Page Layout</p>
        </Layout> */}
    </div>
  );
}

export default App;
