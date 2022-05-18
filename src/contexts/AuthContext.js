//Importing necessary files
import { createContext, useState } from "react";


/**
 * *This Context makes the currently signed user and access token available to all it's children
 * *
 */

export const AuthContext = createContext({
    user: null,
    token: null,
    setUser: ()=>{},
    setToken: ()=>{},
})


export const AuthContextProvider =  ({children})=>{

    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)

    return(
        <AuthContext.Provider
            value={{user,setUser, token, setToken}}
        >
            {children}
        </AuthContext.Provider>
    )
    
}