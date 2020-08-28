import React, { Component } from 'react';
// import Tabla from './Tabla';
import { connect } from 'react-redux';
import * as dataActions from '../../actions/dataActions';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';
import Tabla from './Tabla';

class MainTable extends Component {
  componentDidMount() {
    this.props.traerTodos();
  }

  ponerContenido = () => {
    if (this.props.loading) {
      return <Spinner />;
    }

    if (this.props.error) {
      return <Fatal mensaje={this.props.error} />;
    }

    return <Tabla />;
  };

  render() {
    return <div>{this.ponerContenido()}</div>;
  }
}

const mapStateToProps = (reducers) => {
  return reducers.tablasReducer;
};

export default connect(mapStateToProps, dataActions)(MainTable);
