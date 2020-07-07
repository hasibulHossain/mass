import React from 'react';
import {Route, Switch, Redirect, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.scss';

import Layout from './Container/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import Product from './pages/Product/Product';

function App() {
  const location = useLocation();
  let route = (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/productPage" exact>
          <ProductPage />
        </Route>
        <Route path="/product" exact>
          <Product/>
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Redirect to="/" />
      </Switch>
    </AnimatePresence>
  )

  return (
    <>
      <Layout>
        { route }
      </Layout>
    </>
  );
}

export default App;
