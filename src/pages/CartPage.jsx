import React, { useContext } from 'react'
import { IoAdd, IoCloseCircle, IoRemove } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { ShoppingBag } from '../components/icons'
import { Navbar } from '../components/molecules'
import { Footer } from '../components/organisms'
import { CartContext } from '../contexts/CartContext'
import DocumentMeta, {} from 'react-document-meta'


export default function CartPage() {

  const {cartItems, toggleCartItem, increaseCartItemQuantity, decreaseCartItemQuantity} = useContext(CartContext)
  const onItemDelete = (item)=>toggleCartItem(item)

  const pageMeta = {
      title: "Martin and Carl Commerce Center - Cart",
      description:`You have ${cartItems.length} items in cart`,
  }

  if(cartItems.length === 0) return(

    <DocumentMeta {...pageMeta}>
      <div className="w-full h-full">
        <Navbar />
        <div className="w-full h-3/4 flex flex-col justify-center items-center">
            <div className="w-36 h-36 rounded-full bg-black/5 flex justify-center items-end overflow-hidden">
                <div className="w-28 h-28 opacity-75">
                    <ShoppingBag />
                </div>
            </div>
            <span className="my-8">
              No items in cart
            </span>
            <Link 
              className='inline-block py-4 px-6 bg-slate-800 rounded-full text-white'
              to={"/store"}
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
        
        <div className="w-full h-full flex flex-col items-center">
          <div className='w-full lg:w-7/12 h-full px-3'>

            <div className='w-full py-2 flex flex-col'>
              {
                cartItems.map((cartItem, index)=>(

                  <CartItem 
                    item={cartItem} 
                    key={index} 
                    onDelete={(item)=>onItemDelete(item)}
                    onDecrease={(item)=>decreaseCartItemQuantity(item)}
                    onIncrease={(item)=>increaseCartItemQuantity(item)}
                  />
                  
                ))
              }
            </div>

            <div className="w-full p-4 my-4 border border-black/5 rounded">

                <h2 className="text-xl font-bold capitalize">
                  Cart Totals
                </h2>

                <div className="w-full flex justify-between items-center my-4">
                  <span>Total</span>
                  <span>
                    GH₵ {
                      cartItems.reduce((prev, cur)=> prev + (cur["revenue"] || 0), 0)
                    }
                  </span>
                </div>

                <Link 
                  className="w-full inline-block text-center p-3 bg-slate-800 text-white rounded"
                  to="/checkout"
                >
                    Proceed to checkout
                </Link>

            </div>
            
          </div>
        </div>
        <Footer />
      </DocumentMeta>
  )
}


const CartItem = ({item, onDelete, onIncrease, onDecrease})=>{

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

          <div className="flex justify-center items-center">
              <button onClick={()=>onDecrease(item)} className="bg-black/10 p-1 rounded-full">
                  <IoRemove />
              </button>
              <span className="inline-block mx-4">
                {item.quantity}
              </span>
              <button onClick={()=>onIncrease(item)} className="bg-black/10 p-1 rounded-full">
                  <IoAdd />
              </button>
          </div>
      </div>
  )
  
}