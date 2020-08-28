import axios from 'axios';
import { GET_DATA, LOADING, ERROR } from '../types/dataTypes';

export const traerTodos = (fromdata, todata, cod, tipoM) => async (
  dispatch
) => {
  dispatch({
    type: LOADING,
  });
  try {
    let url = 'http://localhost:8080/maquinaria?';
    fromdata = '2018';
    todata = '2025';

    if (fromdata) {
      url += `fromdate=${fromdata}`;
    }
    if (todata) {
      url += `&todate=${todata}`;
    }
    if (cod) {
      url += `&codeventa=${cod}`;
    }
    if (tipoM) {
      url += `&tipomaquinaria=${tipoM}`;
    }
    const respuesta = await axios.get(url);
    dispatch({
      type: GET_DATA,
      payload: respuesta.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: 'Ooops, Algo Salió mal, Intente más tarde',
    });
    console.log('El error es: ', error.message);
  }
};
