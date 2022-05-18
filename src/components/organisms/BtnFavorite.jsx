import React from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs'

export default function BtnFavorite({favorite=false, onClick}) {
    return (
        <button onClick={onClick} className="p-2 rounded-full absolute top-2 right-2 border shadow-md bg-white">
            {
                favorite ? (
                    <BsHeartFill className="text-xs text-red-500" />
                ):(
                    <BsHeart className="text-xs" />
                )
            }
        </button>
    )
}
