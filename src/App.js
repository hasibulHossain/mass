import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import './App.scss';

import Layout from './Container/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';

function App() {
  let route = (
    <Switch>
      <Route path="/productPage" exact component={ProductPage} />
      <Route path="/" exact component={HomePage} />

      <Redirect to="/" />
    </Switch>
  )

  return (
    <div className="App">
      <Layout>
        { route }
      </Layout>
    </div>
  );
}

export default App;
