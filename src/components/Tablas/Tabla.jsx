import React from 'react';

import '../../assets/styles/tabla.css';
import { connect } from 'react-redux';

const Tabla = (props) => {
  const ponerData = () =>
    props.valores.map((valor, key) => (
      <tr key={valor}>
        <td>{valor.cif}</td>
        <td>{valor.fob}</td>
        <td>{valor.cantidad_declarada}</td>
        <td>{key}</td>
        <td>{key}</td>
        <td>{key}</td>
        <td>{key}</td>
        <td>{key}</td>
        <td>{key}</td>
        <td>{key}</td>
        <td>{key}</td>
        <td>{key}</td>
      </tr>
    ));
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
            <tr>
              <th colSpan="15" className="bg-dark text-white text-center">
                year
              </th>
            </tr>
            <tr>
              <th className="text-center text-nowrap">ene</th>
              <th className="text-center text-nowrap">feb</th>
              <th className="text-center text-nowrap">mar</th>
              <th className="text-center text-nowrap">abr</th>
              <th className="text-center text-nowrap">may</th>
              <th className="text-center text-nowrap">jun</th>
              <th className="text-center text-nowrap">jul</th>
              <th className="text-center text-nowrap">ago</th>
              <th className="text-center text-nowrap">sep</th>
              <th className="text-center text-nowrap">oct</th>
              <th className="text-center text-nowrap">nov</th>
              <th className="text-center text-nowrap">dic</th>
            </tr>
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
