import React, { useEffect } from 'react'
import { data } from '../Data'
import { useNavigate } from 'react-router-dom'
const EditTemplate = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    if(!sessionStorage.getItem("editContent")){
      navigate("/")
    }
  })
 
const template = sessionStorage.getItem("editContent")

  return (
    <div className='container-fluid px-2 py-2'>
       {template}
    </div>
  )
}

export default EditTemplate