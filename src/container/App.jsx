import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import MainTable from '../components/Tablas/index';
import Layout from '../components/Layout';
// import Filter from '../components/Filter';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const App = (props) => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/adjuntar" component={Home} />
          <Route exact path="/tablas" component={MainTable} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
