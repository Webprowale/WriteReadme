import React from 'react'
import { data } from '../Data'

function Template({ children }) {
  return (
    <div className='container-fluid pt-2 pb-5'id="target-component">
      { children }
    <p className='text-center fw-semibold'>Our simple editor allows you to quickly add and customize all the sections you need for your project's readme</p>
    </div>
  )
}

export default Template