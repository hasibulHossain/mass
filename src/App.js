import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import {Route, Switch, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.scss';

import Layout from './Container/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';

import * as action from './store/actions/Index';

function App(props) {
  useEffect(() => {
    props.productsInit();
  }, [])

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
        <Route path="/cart" exact>
          <Cart/>
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/" >
          <div>
            not found
          </div>
        </Route>
        {/* <Redirect to="/product" /> */}
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

const mapDispatchToProps = dispatch => {
  return {
    productsInit: () => dispatch(action.productsInit())
  }
}

export default connect(null, mapDispatchToProps)(App);
