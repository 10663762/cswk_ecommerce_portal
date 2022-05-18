import React, { useContext } from 'react'
import {Formik, useFormikContext} from 'formik'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'
import { Input } from '../components/atoms'
import { Navbar } from '../components/molecules'
import { Footer } from '../components/organisms'
import { CartContext } from '../contexts/CartContext'

export default function Checkout() {

    const {cartItems} = useContext(CartContext)
    const {push} = useHistory()

    const initialValues = {
        firstname: "",
        lastname: "",
        country: "",
        email: "",
        phone: ""
    }

    const validationSchema = Yup.object({
        firstname: Yup.string().min(5).max(30).required(),
        lastname: Yup.string().min(5).max(30).required(),
        country: Yup.string().required(),
        email: Yup.string().email().required(),
        phone: Yup.string().min(5).max(12).required(),
    })

    const handleOnSubmit = (values)=>{
        push("/payment-portal",{
            billingDetails: values,
            cartItems
        })
    }
    
  return (
    <div className="w-full h-full flex flex-col items-center">
        <Navbar />

        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleOnSubmit}
        >
            <div className="w-full lg:w-9/12 px-2 py-6 block lg:grid lg:grid-cols-2 lg:gap-10 lg:my-16">

                <div className="w-full border border-black/10 p-2 lg:p-4 rounded">
                    <h2 className="text-lg font-medium">
                        Billing Details
                    </h2>
                    <div className="w-full border-b border-b-black/5 my-2"/>
                        
                    <Input 
                        label={"First name"}
                        required
                        name="firstname"
                    />
                    <div className="mb-4"/>
                    <Input 
                        label={"Last name"}
                        required
                        name="lastname"
                    />
                    <div className="mb-4"/>
                    <Input 
                        label={"Country"}
                        required
                        name="country"
                    />
                    <div className="mb-4"/>
                    <Input 
                        label={"Phone"}
                        required
                        name="phone"
                        type="number"
                    />
                    <div className="mb-4"/>
                    <Input 
                        label={"Email"}
                        required
                        type="email"
                        name="email"
                    />
                </div>

                <div className="w-full h-fit lg:w-9/12 border border-slate-800 rounded p-3 lg:p-4 mt-8 lg:mt-0 flex flex-col">
                    <h2 className="text-lg font-medium">
                        Order Details
                    </h2>
                    <div className="w-full border-b border-b-black/5 my-2"/>
                        
                    <div className="w-full flex justify-between items-center mt-8 text-gray-400 ">
                        <span>Product</span>
                        <span>Subtotal</span>
                    </div>
                    <div className="w-full border-b border-b-black/5 my-2"/>

                    {
                        cartItems.map((cartItem, idx)=>(

                            <div className="w-full flex justify-between items-center mb-4 text-sm">
                                <div className='flex items-center'>
                                    <span className="inline-block w-28 overflow-hidden whitespace-nowrap text-ellipsis">
                                        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, a. */}
                                        {cartItem.name}
                                    </span>
                                    <span className='font-bold'>x{cartItem.quantity}</span>
                                </div>
                                <span>GH₵ {cartItem.revenue}</span>
                            </div>
                            
                        ))
                    }

                    <div className="w-full border-b border-b-black/10 mt-8 mb-2"/>
                    <div className="w-full flex justify-between items-center text-sm">
                        <span>Total</span>
                        <span className='text-base font-bold'>GH₵ {
                        cartItems.reduce((prev, cur)=> prev + (cur["revenue"] || 0), 0)
                    }</span>
                    </div>

                    <ValidatedBtn 
                        className="w-full p-2 rounded mt-12 bg-yellow-500 text-slate-800 flex justify-center items-center self-end"
                        // to={"/payment-portal"}
                    >
                        Place order
                    </ValidatedBtn>
                    
                </div>
                
            </div>
        </Formik>

        <Footer/>
        
    </div>
  )
}


const ValidatedBtn = ({children})=>{

    const {handleSubmit} = useFormikContext()
    
    return(

        <button 
            className="w-full p-2 rounded mt-12 bg-yellow-500 text-slate-800 flex justify-center items-center self-end"
            onClick={handleSubmit}
        >
            {children}
        </button>
        
    )
    
}