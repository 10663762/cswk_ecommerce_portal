import React from 'react'

export default function HorizontalScrollWrapper({children}) {
  return (
    <div className='w-full overflow-x-scroll flex custom-scrollbar-x'>{children}</div>
  )
}
