import { Formik } from 'formik'
import { useRef, useState } from 'react'
import { IoCameraOutline } from 'react-icons/io5'
import { BtnSubmit, Input } from '../components/atoms'
import * as Yup from 'yup'
import product from '../services/Product'

const validationSchema = Yup.object({
    name: Yup.string().min(5).max(30).required(),
    brand: Yup.string().min(1).max(30).required(),
    category: Yup.string().min(1).max(30).required(),
    price: Yup.number().required(),
    description: Yup.string().min(5).max(30).required(),
})

export default function UploadPage() {

    const [imgSrc, setImgSrc] = useState("./img/dashboard/image_placeholder.png")
    const [selectedImg, setSelectedImg] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const imgRef = useRef()

    const onFileSelect = ({target})=>{

        imgRef.current.file = target.files[0]
        const reader = new FileReader()
        reader.onload = ()=>{
            setImgSrc(reader.result)
        }

        reader.readAsDataURL(target.files[0])
        setSelectedImg(target.files[0])
        
    }

    const handleOnSubmit = async(payload)=>{

        try {
            console.log(payload)

            setIsLoading(true)
            await product.uploadImage(selectedImg)
            setIsLoading(false)
            
        } catch (error) {
            setErrorMessage(error.message)
            setIsLoading(false)
        }
        
    }
    
  return (
    <div className='pb-8 w-full'>
        {/* Navbar */}
        <div className="flex items-center justify-between p-3 shadow-md w-full">
            <img 
                src="./logo.png" 
                alt="logo" 
                className='h-20 w-20'
                ref={imgRef}
                
            />
            <div className="bg-black/10 flex items-center justify-center h-10 rounded-full w-10">
                <span className="font-bold text-black/70 text-xl">
                    S
                </span>
            </div>
        </div>

        {/* main content */}
        <main className="mt-16 flex flex-col items-center justify-center w-full">

            <header className='text-left mb-8 w-3/4 lg:w-5/12'>
                <h1 className="text-2xl font-bold">
                    Add New Product
                </h1>
                <p className='text-zinc-500' >Fill the form to add new product to your shop</p>
            </header>
            
            <img 
                src={imgSrc} 
                alt="item" 
                className="border h-64 w-52 object-cover rounded" 
            />

            
            <div className="mt-4 w-3/4 lg:w-5/12">

                <div className="text-left text-sm w-full">
                    Product image
                    <div className="mb-8 relative w-full">
                        <input 
                            type="file" //setting input type to file type
                            name="" 
                            id="" 
                            className='h-full w-full'
                            accept="image/png, image/jpeg" //accept only png and jpg image formats
                            onChange={onFileSelect}
                        />
                        <div className="absolute bg-zinc-100 flex items-center left-0 text-black/50 p-2 pointer-events-none rounded text-left top-0 w-full">
                            <IoCameraOutline className='mr-2' /> Select product image
                        </div>
                    </div>
                </div>

                <Formik
                    initialValues={{}}
                    validationSchema={validationSchema}
                    onSubmit={handleOnSubmit}
                >
                    <>
                        <Input 
                            label={"Name"}
                            placeholder="eg. Black Tie"
                            name={"name"}
                        />
                        <div className='my-4' />
                        <Input 
                            label={"Category"}
                            placeholder="eg. Black Tie"
                            name={"category"}
                        />
                        <div className='my-4' />
                        <Input 
                            label={"Brand"}
                            placeholder="eg. Black Tie"
                            name={"brand"}
                        />
                        <div className='my-4' />
                        <Input 
                            label={"Price"}
                            placeholder="eg. Black Tie"
                            type="number"
                            name={"price"}
                        />
                        <div className='my-4' />
                        <Input 
                            label={"Description"}
                            placeholder="Description"
                            name={"description"}
                        />
                        <div className='my-4' />
                        <span className="text-sm text-red-400">
                            {
                                errorMessage
                            }
                        </span>
                        <BtnSubmit loading={isLoading} />
                    </>
                </Formik>
                
            </div>
                
            
        </main>

    </div>
  )
}
