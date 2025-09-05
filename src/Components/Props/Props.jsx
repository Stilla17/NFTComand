import React from 'react'

const Props = ({children, flex, ptext}) => {
  return (
    <div>
        {
            children
        }
        <img src={flex} alt="" />
        <p className='text-white text-2xl ps-5 pt-1.5'>{ptext}</p>
    </div>
  )
}

export default Props