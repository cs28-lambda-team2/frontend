  
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE,
   
} from "../action"

const initialState = {
    currentUser: {},
    loading: false,
    error: null,
   message:""

}

export const useReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_SUCCESS:
                
            return {
                ...state,
                currentUser: action.payload,
                
            }
        case FETCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case LOGIN_START:
            return {
                ...state, 
                loading: true,
                error: null,
                currentUser: {}
            }
        case LOGIN_SUCCESS:
            console.log("from reducer", action.payload)
            return {
                ...state,
                loading: false,
                message:action.payload

                
            }
           
        case LOGIN_FAILURE:
            return {
                ...state,
                err: action.payload,
                load: false
            }
        case REGISTER_START:
            return {
                ...state,
                loading: true,
                error: null,
                currentUser: {}
            }
        case REGISTER_SUCCESS:
            const message=`${action.payload} you can now login`
            return {
                ...state,
                loading: false,
                message:message
            }
        case REGISTER_FAILURE:
            var mssg=""
            if(action.payload.includes('already')){
                 mssg="User already Exists"
            }
            else mssg="Server not Responding"
            return {
                ...state,
                error: action.payload,
                loading: false,
                message:mssg
            }
        
        default:
            return state;

    }
}