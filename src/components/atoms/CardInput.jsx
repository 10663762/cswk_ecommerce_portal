import { useFormikContext } from 'formik'
import React from 'react'
import {PaymentInputsContainer} from 'react-payment-inputs'
import images from 'react-payment-inputs/images'

export default function CardInput({title}) {

    const {errors, setFieldValue, setFieldTouched} = useFormikContext()
    
    const handleInputOnChange = (field_name, data)=>{
        setFieldValue(field_name, data)
        setFieldTouched(field_name)
    }

    console.log(errors)
    

    return (
        <div
            className="duration-300 w-full"
        >
        
            <PaymentInputsContainer>
                {({ meta, getCardNumberProps, getExpiryDateProps, getCVCProps, getCardImageProps }) => (
                    <>
                        <label className='mb-1 flex flex-row text-left justify-between font-medium text-graphite_x2' htmlFor={title}
                        >
                            {title}
                            {(meta.isTouched && meta.error) && <span className='text-red-400'>*</span>}
                        </label>
                        
                        {/* <div className=" px-4 w-full rounded  focus-within:text-light_col"> */}
                                
                            <div className='bg-black/5 px-2 rounded mb-3 focus-within:bg-slate-800 focus-within:text-white'>
                                <svg className='inline mr-2' {...getCardImageProps({images})} />
                                <input
                                    {...getCardNumberProps({ onChange: ({target})=>handleInputOnChange("cardNumber", target.value)})}  
                                    className='bg-transparent w-48 outline-none py-4'
                                />
                            </div>
                           <div className='flex'>
                                <input 
                                    {...getExpiryDateProps({onChange: ({target})=>handleInputOnChange("expiryDate", target.value)})} 
                                    className='bg-black/5 w-16 p-4 outline-none mr-3 flex-1 focus-within:bg-slate-800 focus-within:text-white rounded'
                                />
                                <input 
                                    {...getCVCProps({onChange: ({target})=>handleInputOnChange("cvc", target.value)})}  
                                    className='bg-black/5 w-16 p-4 outline-none flex-1 focus-within:bg-slate-800 focus-within:text-white rounded'
                                />
                           </div>
                        {/* </div> */}
                    </>
                )}
            </PaymentInputsContainer>
        </div>
    )
}
