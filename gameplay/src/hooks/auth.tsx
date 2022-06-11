import React,{
    createContext,
    useState,
    useContext,
    ReactNode,
} from "react";
import {
    SCOPE,
    CLIENT_ID,
    CDN_IMAGE,
    REDIRECT_URL,
    RESPONSE_TYPE  
} from "../configs/index"

import * as AuthSession from "expo-auth-session"
import { api } from "../services/api";

type User = {
    id: string,
    userName: string,
    firstName: string
    avatar: string,
    email: string,
    token: string,
    
}

type AuthContextDatas = {
    user: User,
    signIn : () => Promise<void>

}

type AuthProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextDatas)

function AuthProvider({children}:AuthProviderProps){

    const [user,setUser] = useState<User>({}as User)
    const [loading, setLoading] = useState(false)
    async function signIn(){
        try {
            setLoading(true)

            const authUrl = `${api.defaults.baseURL}oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`


            const response = AuthSession.startAsync({authUrl})

            console.log(response)

        } catch (error) {
            throw new Error('não foi possive autenticar')
        }
    }

    return(
        <AuthContext.Provider value={{
            user,
            signIn
             
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)

    return context
}

export {
    AuthProvider,
    useAuth,
    
}