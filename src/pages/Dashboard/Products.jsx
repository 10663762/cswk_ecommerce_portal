import { useState } from 'react'
import { IoAdd } from 'react-icons/io5'
import { best_sellers } from '../../db'



export default function Products() {

    const [products] = useState(best_sellers)
    
    return (
        <div className='w-full h-full'>

            <div className="w-full py-2 mb-4">

                <header className="w-full px-2 py-4 flex justify-between items-center">
                    <h1 className="font-bold text-3xl text-slate-800">
                        Products
                    </h1>
                    <button className="px-2 py-1 text-sm bg-slate-800 text-white rounded flex items-center">
                        <IoAdd /> New product
                    </button>
                </header>

                <div className='w-full border-b border-b-slate-800/20' />

            </div>

            <div className="w-full h-full">

                <div className="px-2 flex justify-between items-center text-slate-700 mb-4 pb-2 border-b border-b-slate-700/20">
                    <div>
                        Total orders: <span className="font-bold">{products.length}</span>
                    </div>
                    <div>
                        Expected Revenue: <span className="font-bold">
                            {products.reduce((prev, cur)=>prev + (cur["price"] || 0), 0)
                        }</span>
                    </div>
                </div>

                <div className="px-4">
                    <div className="mt-8 w-full border border-text-slate-800/20 overflow-auto custom-scrollbar-x">

                        <table className='w-fit'>

                            <thead className="flex text-left border-b border-b-slate-800/20 bg-slate-700 text-white">
                                <th className="w-24 px-2 py-3 font-semibold">
                                    Id
                                </th>
                                <th className="w-24 px-2 py-3 font-semibold border-l border-l-gray-500">
                                    Image
                                </th>
                                <th className="w-36 px-2 py-3 font-semibold border-l border-l-gray-500">
                                    Name
                                </th>
                                <th className="w-32 px-2 py-3 font-semibold border-l border-l-gray-500">
                                    Brand
                                </th>
                                <th className="w-32 px-2 py-3 font-semibold border-l border-l-gray-500">
                                    Category
                                </th>
                                <th className="w-32 px-2 py-3 font-semibold border-l border-l-gray-500">
                                    Stock
                                </th>
                                <th className="w-32 px-2 py-3 font-semibold border-l border-l-gray-500">
                                    Price
                                </th>
                            </thead>

                            <tbody className="w-fit flex flex-col text-left">
                                {
                                    products.map((product, idx)=>(

                                        <tr className='flex' key={product.id}>
                                            <tr className="w-24 px-2 py-1 whitespace-nowrap overflow-hidden text-ellipsis">
                                                {product.id}
                                            </tr>
                                            <tr className="w-24 px-2 py-1 whitespace-nowrap overflow-hidden text-ellipsis border-l border-l-slate-800/10">
                                                <div className="w-12 h-12">
                                                    <img src={product.img} alt={product.name} className="w-full h-full object-contain" />
                                                </div>
                                            </tr>
                                            <tr className="w-36 px-2 py-1 border-l border-l-slate-800/10 whitespace-nowrap overflow-hidden text-ellipsis">
                                                {product.name}
                                            </tr>
                                            <tr className="w-32 px-2 py-1 border-l border-l-slate-800/10 whitespace-nowrap overflow-hidden text-ellipsis">
                                                {product.brand}
                                            </tr>
                                            <tr className="w-32 px-2 py-1 border-l border-l-slate-800/10 whitespace-nowrap overflow-hidden text-ellipsis">
                                                {product.category}
                                            </tr>
                                            <tr className="w-32 px-2 py-1 border-l border-l-slate-800/10 whitespace-nowrap overflow-hidden text-ellipsis">
                                                {product.in_stock}
                                            </tr>
                                            <tr className="w-32 px-2 py-1 border-l border-l-slate-800/10 whitespace-nowrap overflow-hidden text-ellipsis">
                                                {product.price}
                                            </tr>
                                        </tr>
                                        
                                    ))
                                }
                            </tbody>
                            
                        </table>

                    </div>
                </div>

            </div>
            
        </div>
    )
}
