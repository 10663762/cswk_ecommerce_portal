import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { Rating } from "../molecules";
import BtnFavorite from "./BtnFavorite";


export default function ProductCard({data, width="44"}) {

    console.log(width)

    const {favorites, removeFavorite, setFavorite} = useContext(FavoritesContext)
    const {cartItems, toggleCartItem} = useContext(CartContext)
    const {push} = useHistory()

    const handleOnFavoriteBtnClick = (item)=>{
        if(favorites.some((favorite)=>favorite.id === data.id)){
            return removeFavorite(item)
        }

        setFavorite(item)
    }

    const handleOnClick = ()=>{
        push("/item-details", data)
    }
    
    return (
        <div 
            className={`w-${width} border border-black/10 inline-block relative cursor-pointer`}
            onClick={handleOnClick}
        >
            <BtnFavorite 
                favorite={favorites.some((favorite)=>favorite.id === data.id)}
                onClick={(e)=>{
                    e.stopPropagation()
                    handleOnFavoriteBtnClick(data)
                }}
            />
            <div className="p-2">
                <img 
                    src={data.img} 
                    className='w-full h-60 object-contain' 
                    alt={data.name}
                />
            </div>
            <div className="p-2 bg-black/5">
                <h3 className="py-1">
                    {data.name}
                </h3>
                <p className="text-green-400 text-sm">
                    {data.in_stock ? "In stock" : "Sold"}
                </p>
                <Rating rateCount={data.rating} />
                <div>
                    <p className="bg-slate-700 text-white text-xs rounded inline-block py-1 px-2">
                        GH₵ {data.price}
                    </p>
                </div>

                {
                    cartItems.some((cartItem)=>cartItem.id ===data.id) ? (
                        <button 
                            className="w-full my-3 p-1 bg-blue-400 border text-white text-center border-blue-400 "
                            onClick={(e)=>{
                                e.stopPropagation()
                                toggleCartItem({
                                    ...data,
                                    quantity: 1,
                                    revenue: data.price
                                })
                            }}
                        >
                            Remove from cart
                        </button>
                    ):(
                        <button 
                            className="w-full my-3 p-1 bg-white border text-blue-400 text-center border-blue-400 "
                            onClick={(e)=>{
                                e.stopPropagation()
                                toggleCartItem({
                                    ...data,
                                    quantity: 1,
                                    revenue: data.price
                                })
                            }}
                        >
                            Add to cart
                        </button>
                    )
                }
            </div>
        </div>
  )
}
