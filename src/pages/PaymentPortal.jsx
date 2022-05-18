import React, { useState } from 'react'
import { Formik, useFormikContext } from 'formik'
import { useHistory, useLocation } from 'react-router-dom'
import { Input } from '../components/atoms'
import * as Yup from 'yup'
import CardInput from '../components/atoms/CardInput'
import product from '../services/Product'

const validationSchema = Yup.object({
    nameOnCard: Yup.string().min(5).max(30).required(),
    cardNumber: Yup.string().min(12).required(),
    expiryDate: Yup.string().required(),
    cvc: Yup.string().max(3).required(),
})

const initialValues = {
    nameOnCard: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
}

export default function PaymentPortal() {

    const {state} = useLocation()
    const {push} = useHistory()
    const cartItems = state?.cartItems
    const billing_details = state?.billingDetails
    const [isLoading, setIsLoading] = useState(false)

    console.log(billing_details)

    const handleOnPay = async(e)=>{

        try {

            const payload = {
                payer_credit_card_name: e.nameOnCard,
                payer_credit_card_number: e.cardNumber,
                payer_credit_card_expiry_date: "27th May 2022",
                payer_credit_card_cvc: e.cvc,
                payer_name: `${billing_details.firstname} ${billing_details.lastname}`,
                amount: cartItems.reduce((prev, cur)=> prev + (cur["revenue"] || 0), 0),
                payer_phone: billing_details.phone.toString(),
                payer_email: billing_details.email,
                payee_email: "mvrtin21@gmail.com",
            }
    
            setIsLoading(true)
    
            await product.sell(payload)
    
            push("/invoice",{
                cartItems,
                billingDetails: state?.billingDetails
            })
            
        } catch (error) {
            setIsLoading(false)
            console.log(error)
        }

        
    }
    
    return (
        <div className='w-full h-full p-6 flex flex-col justify-center items-center'>

            <div className="w-full lg:w-1/3 h-fit p-4 flex flex-col justify-center items-center shadow-md rounded">

                <img 
                    src='/img/gcb_logo.png' 
                    alt='gcb logo'
                    className='w-10 h-10 self-start' 
                />

                <header>

                    <h2 className="font-bold text-2xl self-start mt-4">
                        Pay with GCBPay
                    </h2>
                    <p className="mb-8 self-start text-sm text-gray-500">
                        Please fill in your card details to pay <b className='whitespace-nowrap text-slate-800'>GH₵ {cartItems.reduce((prev, cur)=> prev + (cur["revenue"] || 0), 0)}</b> to <span className='whitespace-nowrap text-slate-800 underline'>Martin & Carl Luxury Shop</span>
                    </p>
                    
                </header>
               

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleOnPay}
                >
                    <>
                        <div className="mb-2 w-full">
                            <Input 
                                placeholder="Name on card"
                                required
                                name="nameOnCard"
                            />
                        </div>
                        {/* <div className="mb-2 w-full">
                            <Input 
                                label="Card number"
                                required
                                name="cardNumber"
                            />
                        </div>

                        <div className="w-full flex">

                            <div
                                className='w-1/2 mr-4'
                            >
                                <Input 
                                    label="Expiry Date"
                                    required
                                    name="expiryDate"
                                    type="date"
                                />
                            </div>
                            <div
                                className='w-1/2'
                            >
                                <Input 
                                    label="CVC"
                                    required
                                    name="cvc"
                                />
                            </div>
                            
                        </div> */}
                        <CardInput/>

                        <ValidatedBtn loading={isLoading}>
                            Pay
                        </ValidatedBtn>
                    </>
                </Formik>
                
            </div>
            <div className="w-full lg:w-1/3 text-left py-2">
                <span className="text-sm text-gray-400">
                    Powered by <span className="text-black">GCBPay&trade;</span>
                </span>
            </div>

        </div>
    )
}


const ValidatedBtn = ({children, loading})=>{

    const {handleSubmit} = useFormikContext()
    
    return(

        <button 
            className="mt-6 w-full p-2 rounded text-center bg-yellow-500 text-black font-bold"
            onClick={handleSubmit}
            type="button"
        >
            {loading ? <span>loading...</span> : <>{children}</>}
        </button>
        
    )
    
}