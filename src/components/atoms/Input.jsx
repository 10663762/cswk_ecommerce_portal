import { useFormikContext } from 'formik'
import React from 'react'

export default function Input({name, label, required, ...inputProps}) {

    const {values, errors,touched, handleChange, handleBlur} = useFormikContext()

    
    return (
        <div className="w-full flex flex-col">

            <span className="text-sm">
                
                    <span 
                        className={(errors[name] && touched[name]) &&'flex justify-between text-red-400'}
                    >
                        {label} 
                        {/* {(errors[name] && touched[name]) &&  <span>{errors[name]} </span>} */}
                    </span>
            </span>
            <input 
                {...inputProps}
                value={values[name]}
                // type="text"
                name={name}
                className={
                    (errors[name] && touched[name]) ? "w-full px-3 py-2 bg-red-400/10 border-2 border-red-200 focus:bg-slate-800 focus:text-white outline-none rounded" : "w-full px-3 py-2 bg-black/5 focus:bg-slate-800 focus:text-white outline-none rounded" 
                }
                onChange={handleChange}
                onBlur={handleBlur}
            />
        </div>
    )
}
