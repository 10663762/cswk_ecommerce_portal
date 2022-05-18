import { Formik } from 'formik'
import React, { useContext, useState } from 'react'
import { BtnSubmit, Input } from '../components/atoms'
import * as Yup from 'yup'
import { auth as Auth } from '../services'
import { AuthContext } from '../contexts/AuthContext'


const validationSchema = Yup.object({
    gcb_pay_id: Yup.string().email().required(),
    shop_name: Yup.string().min(5).max(30).required(),
    password: Yup.string().min(5).max(12).required()
})

const initialValues = {
    gcb_pay_id: "",
    password: "",
    shop_name: "",
}

export default function Register() {

    const [errMessage, setErrMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const {setToken:setAuthToken, setUser:setAuthUser} = useContext(AuthContext)

    const handleSubmit = async(payload)=>{

        try {

            setLoading(true)
            const {user,token} = await Auth.register(payload)
            setAuthUser(user)
            setAuthToken(token)
            setLoading(false)
            
        } catch (error) {
            setLoading(false)
            setErrMessage(error.message)
        }
    }

    
    
  return (
        <div className='h-full duration-300 flex flex-col items-center  justify-center transition w-full'>

            <img src="./logo.png" alt="" className="h-32 w-32 lg:h-36 lg:w-36" />
            <header className='text-center my-4 w-3/4'>
                <h1 className='font-semibold text-2xl text-slate-900'>Register</h1>
                <p className='text-normal'>Complete the form below to register for an account</p>
            </header>

            <main className='lg:w-1/3 mt-4'>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <>
                        <Input 
                            label={"Shop name"}
                            placeholder="eg. Akosua's Retail"
                            name={"shop_name"}
                        />
                        <div className='my-4'/>
                        <Input 
                            label={"Password"}
                            placeholder="somerandomstrings"
                            name={"password"}
                            type="password"
                        />
                        <div className='my-4'/>
                        <Input 
                            label={"GCB Pay ID"}
                            placeholder="email used during registration"
                            name={"gcb_pay_id"}
                            type="email"
                        />
                        <div className='my-4'/>
                        

                        {
                            errMessage && <span className='text-red-400 text-xs'>{errMessage}</span>
                        }

                        <BtnSubmit 
                            disabled={loading}
                            loading={loading} 
                        />
                    </>
                </Formik>
            </main>
            
        </div>
  )
}
