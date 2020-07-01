import React from 'react';
import './App.scss';

import Layout from './Container/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';

function App() {

  return (
    <div className="App">
      <Layout>
        <HomePage/>
      </Layout>
    </div>
  );
}

export default App;
