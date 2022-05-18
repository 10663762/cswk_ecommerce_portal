import { useFormikContext } from 'formik'
import React from 'react'
import Loading from 'react-loading'


export default function BtnSubmit({loading, ...props}) {

    const {handleSubmit} = useFormikContext()
    
    return (
        <button 
            {...props}
            className='bg-slate-800 flex font-normal disabled:bg-zinc-200 disabled:text-slate-800 items-center justify-center py-2 rounded text-white w-full'
            type='submit'
            onClick={handleSubmit}
        >
            {
                loading ? <Loading type='spokes' height={18} width={18} color="inherit" /> : "Submit"
            }
        </button>
    )
}
