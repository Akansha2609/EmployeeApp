import {SET_CURRENT_USER} from '../actions/types';
import isEmpty from '../validation/is-empty'

const InitialState = {
    isAuthenticated: false,
    user: {},
    hello: "test"
}

export default function(state = InitialState, action){
    switch(action.type){
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
       
        
        default:
            return state;
    }

}