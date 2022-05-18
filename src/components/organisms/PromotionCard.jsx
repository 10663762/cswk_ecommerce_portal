import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { Rating } from "../molecules";
import BtnFavorite from "./BtnFavorite";


export default function PromotionCard({data}) {

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
            onClick={handleOnClick}
            className="w-full border border-black/10 relative flex flex-col cursor-pointer"
        >

            <div className="w-full p-2 relative">
                <img src={data.img} alt="" className="w-full" />
                <div className=" flex justify-center items-center text-white absolute top-3 left-3 h-8 w-8 text-xs bg-green-600 rounded-full">
                    -{data.discount}%
                </div>
                <BtnFavorite 
                    favorite={favorites.some((favorite)=>favorite.id === data.id)}
                    onClick={(e)=>{
                    e.stopPropagation()
                    handleOnFavoriteBtnClick(data)
                }}
            />
            </div>
            
            <div className="p-2 bg-black/5 flex-col">
                <h3 className="py-1">
                    {data.name}
                </h3>
            
                <Rating rateCount={data.rating} />
                <div className="flex flex-col md:flex-row">
                    <span className="text-gray-400 text-sm line-through mr-2 font-bold">
                        GH₵ {data.price}
                    </span>
                    <span className="text-red-400 text-sm font-bold">
                        GH₵ {data.price - (data.price * data.discount/100)}
                    </span>
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
