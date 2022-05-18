import React from 'react'
import RRating from 'react-rating'
import {IoMdStar, IoMdStarOutline} from 'react-icons/io'


export default function Rating({rateCount=1}) {
  
  return (
      <RRating 
        start={0} 
        initialRating={rateCount} 
        readonly 
        stop={5}
        fullSymbol={<IoMdStar className='lg:text-xl text-yellow-500' />}
        emptySymbol={<IoMdStarOutline className='lg:text-xl text-yellow-500' />}
      />
  )
}
