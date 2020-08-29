import React from 'react';

import '../../assets/styles/tabla.css';
import { connect } from 'react-redux';

const Tabla = (props) => {
  const ponerMonth = () =>
    props.valores.map((month) =>
      Object.values(month).map((month__2) =>
        Object.keys(month__2).map((month__3, index) => (
          <th key={index} className="text-center text-nowrap">
            {month__3}
          </th>
        ))
      )
    );

  const ponerYear = () =>
    props.valores.map((year) =>
      Object.keys(year).map((year__2, index) => (
        <tr key={index}>
          <th colSpan="15" className="bg-dark text-white text-center">
            {year__2}
          </th>
        </tr>
      ))
    );

  const ponerData = () =>
    props.valores.map((valor) =>
      Object.values(valor).map((valor__2) =>
        Object.values(valor__2).map((valor__3, index) => (
          <React.Fragment>
            {' '}
            <tr key={index}>
              <td>{valor__3.cantidad_declarada}</td>
            </tr>
            <tr key={index}>
              <td>{valor__3.fob}</td>
            </tr>
            <tr key={index}>
              <td>{valor__3.cif}</td>
            </tr>
          </React.Fragment>
        ))
      )
    );

  return (
    <div>
      <div className="d-flex table-responsive tablasTotal">
        <table className="table table-bordered col-3">
          <tbody className="text-dark">
            <tr className="d-flex flex-column headerTabla">
              <th scope="row" className="bg-warning text-center">
                Cat. Maq
              </th>
              <th scope="row">Volúmen (uds)</th>
              <th scope="row">Factura FOB (u$s 000)</th>
              <th scope="row">Factura CIF (u$s 000)</th>
            </tr>
          </tbody>
        </table>
        <table className="table table-bordered">
          <thead className="thead-light">
            {ponerYear()}

            <tr>{ponerMonth()}</tr>
          </thead>
          <tbody>{ponerData()}</tbody>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.tablasReducer;
};

export default connect(mapStateToProps)(Tabla);
