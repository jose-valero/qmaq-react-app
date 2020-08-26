import axios from 'axios';
import { GET_DATA } from '../types/dataTypes';

export const traerTodos = () => async (dispatch) => {
  const respuesta = await axios.get('localhost:8080/maquinaria', {
    params: {
      formdate: '2015',
      todate: '2025',
      tipomaquinaria: 'TELESCOPIC FORKLIFT',
      codeventa: null,
    },
  });
  console.log('respuesta', respuesta);

  dispatch({
    type: GET_DATA,
    payload: respuesta.data,
  });
};
