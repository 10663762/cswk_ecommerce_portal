import { useContext, useEffect } from 'react'
//Importing necessary files
import { AuthContext } from '../contexts/AuthContext'

/**
 * *This hook sets current user and access token from browser's local storage whenever mounted.
 */

export default function useAuth() {


    //Getting functions needed to make the user and access token globallu available in the application
    const {setUser: _setAuthUser, setToken: _setAuthToken} = useContext(AuthContext)

    useEffect(()=>{

        //Check local storage to see of current user and access token are in the browser's local storage
        const currUser = localStorage.getItem("current_user")
        const accessToken = localStorage.getItem("access_token")

        //If they are, make them available in the application's state
        if(currUser && accessToken){
            _setAuthUser(currUser)
            _setAuthToken(accessToken)
        }
        
    },[])
    
    // This hook returns nothing
    return null
}
