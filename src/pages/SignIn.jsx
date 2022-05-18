import { Formik } from 'formik'
import React, { useState } from 'react'
import { BtnSubmit, Input } from '../components/atoms'
import * as Yup from 'yup'
import { auth as Auth } from '../services'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'


const validationSchema = Yup.object({
    shop_name: Yup.string().min(5).max(30).required(),
    password: Yup.string().min(5).max(12).required()
})

const initialValues = {
    shop_name: "",
    password: ""
}

export default function SignIn() {

    const [errMessage, setErrMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const {setToken:setAuthToken, setUser:setAuthUser} = useContext(AuthContext)

    const handleSubmit = async(payload)=>{
        try {

            setLoading(true)
            const {token, user} = await Auth.signIn(payload)
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

            <img src="./logo.png" alt="" className="h-24 w-24" />
            <header className='text-center my-4 w-3/4'>
                <h1 className='font-semibold text-2xl'>Sign In</h1>
                <p className='text-normal'>Complete the form below to sign in.</p>
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
                            placeholder="eg. Ama Serwaa's Retail"
                            name={"shop_name"}
                        />
                        <div className='my-4'/>
                        <Input 
                            label={"Password"}
                            placeholder="a secret"
                            name={"password"}
                            type="password"
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
