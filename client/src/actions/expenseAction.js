import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import {GET_EXPENSES,EXPENSE_LOADING,CLEAR_CURRENT_USER} from './types';


export const getExpenses = () => dispatch => {
    dispatch(setExpenseLoading());
    axios.get('/api/dashboard')
      .then(res => 
        dispatch({
            type: GET_EXPENSES,
            payload: res.data
        })
        )
       .catch(err => 
        dispatch({
            type:GET_EXPENSES,
            payload:null
        })

       )
}

export const clearCurrentUser = () => {
    return {
        type: CLEAR_CURRENT_USER
    }
}

export const setExpenseLoading = () => {
    return {
        type: EXPENSE_LOADING
    }
}