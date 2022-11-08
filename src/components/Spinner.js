
import React from 'react'
import loading from '../loading.gif'
const Spinner=()=>  {
  
    return (
      <div className='text-center'>
        <span className='align-middle' >
          <img  className='my-3' src={loading} alt={loading} />
        </span>
      </div>
    )
  }


export default Spinner
