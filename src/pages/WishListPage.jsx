import { useContext } from 'react'
import DocumentMeta from 'react-document-meta'
import { IoCloseCircle } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { List } from '../components/icons'
import { Navbar } from '../components/molecules'
import { Footer } from '../components/organisms'
import { CartContext } from '../contexts/CartContext'
import { FavoritesContext } from '../contexts/FavoritesContext'


export default function WishlistPage() {

  const {favorites, removeFavorite} = useContext(FavoritesContext)
  const  {toggleCartItem} = useContext(CartContext)

  const onItemDelete = (item)=>removeFavorite(item)
  const onItemAddToCart = (item)=>toggleCartItem({
    ...item,
    quantity: 1,
    revenue: item.price
  })

  const pageMeta = {
      title: "Martin and Carl Commerce Center - Wishlist",
      description:`You have ${favorites.length} items in your wishlist`,
  }

  if(favorites.length === 0) return(

    <DocumentMeta {...pageMeta}>
      <div className="w-full h-full">
        <Navbar />
        <div className="w-full h-3/4 flex flex-col justify-center items-center">
            <div className="w-36 h-36 rounded-full bg-black/5 flex justify-center items-end overflow-hidden">
                <div className="w-20 h-2w-20 opacity-75">
                    <List />
                </div>
            </div>
            <span className="my-8">
              No items in wishlist
            </span>
            <Link 
              className='inline-block py-4 px-6 bg-slate-800 rounded-full text-white'
              to={"/shop"}
            >
                Return to shop
            </Link>
        </div>
        <Footer />
      </div>
    </DocumentMeta>
    
  )
  
  return (
      <DocumentMeta {...pageMeta}>
        <Navbar />
        <div className='w-full h-full px-3'>
          <div className='w-full py-2 flex flex-col'>
            {
              favorites.map((cartItem, index)=>(

                <WishlistItem 
                  onAddToCart={onItemAddToCart}
                  onDelete={onItemDelete}
                  item={cartItem} 
                  key={index} 
                />
                
              ))
            }
          </div>
          
        </div>
        <Footer />
      </DocumentMeta>
  )
}


const WishlistItem = ({item, onAddToCart, onDelete})=>{


  return(
      <div className="relative w-full border-b border-b-black/5 py-2 flex items-center justify-between">
          <IoCloseCircle 
            className='absolute left-0 text-red-500 text-2xl cursor-pointer' 
            onClick={()=>onDelete(item)}
          />
          <img 
            src={item.img}
            className="w-16 h-16 object-contain"
            alt={item.name}
          />

          <span className='inline-block mx-2 text-center w-48 text-ellipsis overflow-hidden whitespace-nowrap'>
            {item.name}
          </span>

          <button 
            className="py-2 rounded px-4 bg-slate-800 text-white text-xs whitespace-nowrap"
            onClick={()=>onAddToCart({
              ...item,
              quantity: 1
            })}
          >
            Add to cart
          </button>
      </div>
  )
  
}