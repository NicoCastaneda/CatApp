import { AuthState } from './AuthContext';

type AuthActions = {type: "onChange", payload: {email: string, password: string}} |
{type: "changeEmail", payload: string} |
{type: "changePassword", payload: string}



export const authReducer = (state: AuthState, action: AuthActions) => {

    switch(action.type){
        case "onChange":
            return {...state, ...action.payload}
        case "changeEmail":
            return {
                ...state,
                email: action.payload
            }
        case "changePassword":
            return {
                ...state,
                password: action.payload
            }
    }
   
}