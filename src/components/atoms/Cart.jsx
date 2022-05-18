
import { useContext } from 'react'
import {IoCartOutline} from 'react-icons/io5'
import { useLocation } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'

export default function Cart() {

    const {cartItems} = useContext(CartContext)
    const {pathname} = useLocation()
    
    return (
        <button className='relative'>
            <IoCartOutline 
                className={pathname==="/cart" ? 'text-2xl text-yellow-500 mr-2' : 'text-2xl text-white mr-2'}
            />
            <div className='w-4 h-4 text-slate-800 text-xxs rounded-full bg-red-400 absolute top-0 right-0 flex items-center justify-center'>
                {cartItems.length}
            </div>
        </button>
    )
}
