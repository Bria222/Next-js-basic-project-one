import React from 'react'

const loading = () => {
  return (
    <div className='d-flex justify-content-center text-success'>
      <div className='spinner-border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  )
}

export default loading
