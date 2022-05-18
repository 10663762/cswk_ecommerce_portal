import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    favorites: [],
    setFavorite: (item)=>{},
    removeFavorite: (item)=>{},
})

export const FavoritesContextProvider = ({children})=>{

    const [favorites, setFavorites] = useState([])

    const setFavorite = (item)=>{
        setFavorites([...favorites, item])
    }

    const removeFavorite = (item)=>{
        const _favorites = [...favorites]
        setFavorites(_favorites.filter((favorite)=>favorite.id !== item.id))
    }

    return(
        <FavoritesContext.Provider value={{favorites, setFavorite, removeFavorite}}>
            {children}
        </FavoritesContext.Provider>
    )
    
}