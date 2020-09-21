import {GET_EXPENSES,EXPENSE_LOADING,CLEAR_CURRENT_USER} from '../actions/types';

const initialState = {
    expenses: null,
    loading: false
}

export default function(state=initialState,action){
    switch(action.type){
        case EXPENSE_LOADING:
            return{
                ...state,
                loading: true
            }
        case GET_EXPENSES:
            return{
                ...state,
                expenses:action.payload,
                loading: false
            } 
        case CLEAR_CURRENT_USER:
            return{
                ...state,
                expenses: null
            }      
        default:
            return state;
    }
}