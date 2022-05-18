import { useContext, useEffect } from 'react'
import { IoBag, IoCart, IoCheckmarkCircle, IoRemove } from 'react-icons/io5'
import { useHistory, useLocation } from 'react-router-dom'
import { Navbar, Rating } from '../components/molecules'
import { CartContext } from '../contexts/CartContext'
import { FavoritesContext } from '../contexts/FavoritesContext'

export default function ItemDetail() {

    const {cartItems,toggleCartItem} = useContext(CartContext)
    const {favorites, setFavorite, removeFavorite} = useContext(FavoritesContext)
    const {push} = useHistory()
    const location = useLocation()
    const item = location.state

    useEffect(()=>{
        if(!item) push("/store")
        //eslint-disable-next-line
    },[location.state])
    

    const handleWishlistBtnOnClick = (item)=>{
        if(favorites.some((favorite)=>favorite.id === item.id)){
            return removeFavorite(item)
        }
        setFavorite(item)
    }
    
    return (
        <div className="w-full flex flex-col items-center">

            <Navbar hideSearchbar/>
                <div className="w-full lg:w-7/12 px-2 py-4 relative">

                    <header className='w-full'>

                        <h2 className="font-bold text-2xl text-black mb-2">
                            {/* Men's Lacoste Polo Shirt */}
                            {item.name}
                        </h2>

                        <div
                            className='w-full flex justify-between items-center'
                        >
                            <span className='text-gray-400 text-sm flex'>
                                Brand: <span className="text-black inline-block w-14 lg:w-40 overflow-hidden text-ellipsis whitespace-nowrap">
                                    {item.brand}
                                </span>
                            </span>

                            <span className='text-gray-400 text-sm flex'>
                                Category: <span className="text-black inline-block w-14 lg:w-40 overflow-hidden text-ellipsis whitespace-nowrap">
                                    {item.category}
                                </span>
                            </span>

                            <Rating rateCount={item.rating} />
                        </div>
                        
                    </header>

                    <div className='w-full border-b border-b-black/5 my-6' />

                    <div className="w-full h-96">
                        <img 
                            src={item.img} 
                            className='w-full h-full object-contain'
                            alt=''
                        />
                    </div>

                    <div className='w-full border-b border-b-black/5 my-6' />


                    <header className="w-full flex justify-between items-center my-4">
                        <h2 className=" bg-red-500/20 rounded text-red-500 p-1 inline-block font-bold">
                            GH₵ {item.price}
                        </h2>
                        <span className="text-sm ml-4 rounded  p-1 inline-block">
                            <IoCheckmarkCircle className='text-green-500 text-lg inline-block font-bold' /> In stock
                        </span>
                    </header>

                    <p className='text-sm text-gray-400 my-4'>
                        {item.description}
                    </p>

                    <div className='w-full border-b border-b-black/5 my-6' />


                    <div className="w-full flex items-center">
                        <button 
                            className={cartItems.some((cartItem)=>cartItem.id === item.id) ? "py-2 px-4 mr-2 text-white bg-red-400 flex justify-center items-center border border-black/10 rounded-full" : "py-2 px-4 mr-2 text-white bg-slate-800 flex justify-center items-center border border-black/10 rounded-full"}
                            onClick={()=>toggleCartItem({
                                ...item,
                                quantity: 1,
                                revenue: item.price
                            })}
                        >
                            {
                                cartItems.some((cartItem)=>cartItem.id === item.id) ? (
                                    <>
                                        <IoRemove className='mr-2' /> Uncart
                                    </>
                                ):(
                                    <>
                                        <IoCart className='mr-2' /> Add to cart
                                    </>
                                )
                            }
                        </button>
                        {/* <div className="h-full border-l border-l-black/5 my-6"/> */}

                        <button 
                            // className="py-2 px-4 text-slate-800 flex justify-center items-center border border-slate-800 rounded-full"
                            className={favorites.some((favorite)=>favorite.id === item.id) ? "py-2 px-4 text-red-400 flex justify-center items-center border border-red-400 rounded-full" : "py-2 px-4 text-slate-800 flex justify-center items-center border border-slate-800 rounded-full"}
                            onClick={()=>handleWishlistBtnOnClick(item)}
                        >
                            {
                                favorites.some((cartItem)=>cartItem.id === item.id) ? (
                                    <>
                                        <IoRemove className='mr-2' /> Rid from wishlist
                                    </>
                                ):(
                                    <>
                                        <IoBag className='mr-2' /> Add to wishlist
                                    </>
                                )
                            }

                            
                        </button>
                    </div>

                </div>
                
            
        </div>
    )
}
