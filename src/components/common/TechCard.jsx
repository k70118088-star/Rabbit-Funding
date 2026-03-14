import React from 'react'
import Icons from './Icons'

const TechCard = ({text , icon}) => {
  return (
    <div className='max-w-70 flex items-center justify-center py-6'>
        <div className='flex flex-col items-center'>
            <div className='bg-green w-14.5 h-14.5 flex items-center justify-center rounded-xl'><Icons icon={icon}/></div>
            <h4 className='mt-3 max-w-57.25 font-semibold text-xl leading-[100%] text-primary text-center'>{text}</h4>
        </div>
    </div>
  )
}

export default TechCard