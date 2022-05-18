import React from 'react'
import {nanoid} from 'nanoid'
import { useLocation, useHistory } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

export default function Invoice() {

    const {state} = useLocation()
    const location = useHistory()
    const {clearCart} = useContext(CartContext)

    const billingDetails = state?.billingDetails
    const cartItems = state?.cartItems
    
    return (
        <div className="w-full flex justify-center items-center ">

            <div className="w-full lg:w-3/5 py-4 px-2 shadow-2xl">

                <header className="w-full bg-slate-800 p-4 lg:p-8 text-white">

                    <h2 className="text-2xl mb-3">
                       THANK YOU!
                       <br />
                       Invoice
                    </h2>

                    <div className='w-full text-sm mb-3 font-semibold'>
                        Invoice number:
                        <br />
                        <span className="text-xs font-normal">
                            {nanoid(10)}
                        </span>
                    </div>

                    <div className='w-full text-sm mb-3 font-semibold'>
                        Date:
                        <br />
                        <span className="text-xs font-normal">
                            {new Date().toDateString()}
                        </span>
                    </div>
                    
                </header>

                <main className='w-full p-4 lg:p-8'>

                    <div className="w-full flex flex-col mb-3">

                        <div className='w-full lg:w-1/3 text-sm mb-12 font-semibold'>
                            Bill from:
                            <br />
                            <span className="text-xs font-normal block">
                                Martin & Carl Luxury Shop 
                            </span>
                            <span className="text-xs font-normal block">
                                Accra - Ghana
                            </span>
                            <span className="text-xs font-normal block">
                                someone@example.com
                            </span>
                        </div>

                        <div className='w-full lg:w-1/3 text-sm font-semibold'>
                            Bill to:
                            <br />
                            <span className="text-xs font-normal block">
                                {`${billingDetails?.firstname} ${billingDetails?.lastname}`}
                            </span>
                            <span className="text-xs font-normal block">
                                {billingDetails?.country}
                            </span>
                            <span className="text-xs font-normal block">
                                {billingDetails?.email}
                            </span>
                            <span className="text-xs font-normal block">
                                {billingDetails?.phone}
                            </span>
                        </div>
                        
                    </div>

                    {/* <div className="w-full border-b border-b-black/20 my-8"/> */}

                    <div className="w-full my-16">

                        <table className="w-full">

                            <thead className="w-full flex text-sm font-semibold border-b border-b-black/20 pb-3">
                                <th className="w-full block text-sm font-semibold text-left">Item</th>
                                <th className="w-full block text-sm font-semibold text-left">Cost</th>
                                <th className="w-full block text-sm font-semibold text-left">Quantity</th>
                                <th className="w-full block text-sm font-semibold text-left">Price</th>
                            </thead>

                            <tbody className="w-full mt-4">

                                {
                                    cartItems?.map((cartItem)=>(

                                        <tr className="w-full flex text-sm py-3" key={cartItem?.id}>
                                            <td className="w-full block text-sm text-left">{cartItem?.name}</td>
                                            <td className="w-full block text-sm text-left">{cartItem?.revenue}</td>
                                            <td className="w-full block text-sm text-left">{cartItem?.quantity}</td>
                                            <td className="w-full block text-sm text-left">{cartItem?.price}</td>
                                        </tr>
                                        
                                    ))
                                }

                                
                            </tbody>
                            
                        </table>
                        
                    </div>
                    
                    <div className="w-full flex flex-col lg:flex-row justify-between">

                        <div>
                            Total Cost: <span className="font-bold">GHC {cartItems?.reduce((prev, cur)=>prev + (cur["revenue"] || 0), 0)}</span>
                        </div>

                        <button 
                            className="px-4 py-2 bg-green-800 rounded text-white mt-2 lg:mt-0"
                            onClick={()=>{
                                clearCart()
                                location.push("/store")
                            }}
                        >
                            Return to shop
                        </button>
                        
                    </div>

                    
                </main>

                
            </div>
            
        </div>
    )
}
