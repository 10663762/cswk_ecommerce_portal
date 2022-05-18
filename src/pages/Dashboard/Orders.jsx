import React from 'react'

const orders = [
    {
        id: "A1L9S53M",
        date: new Date().toDateString(),
        revenue: 3000,
        totalSold: 5
    },
    {
        id: "F1O9K58L",
        date: new Date().toDateString(),
        revenue: 1000,
        totalSold: 5
    },
    {
        id: "X0O9J58C",
        date: new Date().toDateString(),
        revenue: 1000,
        totalSold: 5
    },
]

export default function Orders() {
    return (
        <div className='w-full h-full'>

            <div className="w-full py-2 mb-4">

                <header className="w-full px-2 py-4">
                    <h1 className="font-bold text-3xl text-slate-800">
                        Orders
                    </h1>
                </header>

            <div className='w-full border-b border-b-slate-800/20' />

            </div>

            <div className="w-full h-full">

                <div className="px-2 flex justify-between items-center text-xl text-slate-700 mb-4 pb-2 border-b border-b-slate-700/20">
                    <div>
                        Total orders: <span className="font-bold">{orders.length}</span>
                    </div>
                    <div>
                        Revenue: <span className="font-bold">
                            {orders.reduce((prev, cur)=>prev + (cur["revenue"] || 0), 0)
                        }</span>
                    </div>
                </div>

                <div className="px-2 mt-8 w-full border border-text-slate-800/20 overflow-auto custom-scrollbar-x">

                    <table className='w-fit'>

                        <thead className="flex text-left border-b border-b-slate-800/20">
                            <th className="w-24 px-2 py-1 font-semibold">
                                Order id
                            </th>
                            <th className="w-36 px-2 py-1 font-semibold border-l border-l-slate-800/10">
                                Date
                            </th>
                            <th className="w-32 px-2 py-1 font-semibold border-l border-l-slate-800/10">
                                Revenue
                            </th>
                            <th className="w-32 px-2 py-1 font-semibold border-l border-l-slate-800/10">
                                Total Sold
                            </th>
                        </thead>

                        <tbody className="w-fit flex flex-col text-left">
                            {
                                orders.map((order, idx)=>(

                                    <tr className='flex' key={order.id}>
                                        <tr className="w-24 px-2 py-1 whitespace-nowrap overflow-hidden text-ellipsis">
                                            {order.id}
                                        </tr>
                                        <tr className="w-36 px-2 py-1 border-l border-l-slate-800/10 whitespace-nowrap overflow-hidden text-ellipsis">
                                            {order.date}
                                        </tr>
                                        <tr className="w-32 px-2 py-1 border-l border-l-slate-800/10 whitespace-nowrap overflow-hidden text-ellipsis">
                                            {order.revenue}
                                        </tr>
                                        <tr className="w-32 px-2 py-1 border-l border-l-slate-800/10 whitespace-nowrap overflow-hidden text-ellipsis">
                                            {order.totalSold}
                                        </tr>
                                    </tr>
                                    
                                ))
                            }
                        </tbody>
                        
                    </table>

                </div>

            </div>
            
        </div>
    )
}
