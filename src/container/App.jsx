import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Menu from '../components/Menu';
import Home from '../components/Home';
import Tabla from '../components/Tabla';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="container">
        <Menu />
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/adjuntar" component={Home} />
          <Route exact path="/tablas" component={Tabla} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
