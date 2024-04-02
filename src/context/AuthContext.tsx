
import React, { createContext,useReducer,useState } from 'react'
import { authReducer } from './authReducer'

export interface AuthState {
    email: string,
    password: string
}

const initialState = { email: "nicolas@gmail.com", password: "" }

export interface AuthContextProps{
    state: AuthState,
    onChange: (email: string, password: string) => void
}
export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({children}: any) => {

    const [state, dispatch] = useReducer(authReducer, initialState)

    const onChange = (email: string, password: string) => {
        dispatch({type:"onChange", payload: {email, password}})
    }

    return (
        <AuthContext.Provider
            value={{
                state,
                onChange
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}