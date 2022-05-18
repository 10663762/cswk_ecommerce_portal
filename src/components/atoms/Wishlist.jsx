
import { useContext } from 'react'
import {IoBagOutline} from 'react-icons/io5'
import { useLocation } from 'react-router-dom'
import { FavoritesContext } from '../../contexts/FavoritesContext'

export default function Wishlist() {

    const {favorites} = useContext(FavoritesContext)
    const {pathname} = useLocation()
    
    return (
        <button className='relative'>
            <IoBagOutline 
                className={pathname === "/wishlist" ? "text-yellow-500 text-2xl mr-2": "text-white text-2xl mr-2"}
            />
            <div className='w-4 h-4 text-slate-800 text-xxs rounded-full bg-red-400 absolute top-0 right-0 flex items-center justify-center'>
                {favorites.length}
            </div>
        </button>
    )
}
