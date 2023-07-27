import React, { useState } from 'react'
import './input.css'
const Input = (props) => {
   const [focused, setFocused] =useState(false)
    const {label, errorMessage, onChange, id,  ...Inputprops} = props;
     const handleFocus= (e)=>{
       setFocused(true);
     }
  return (
    <div className='input'>
        <label htmlFor="">{label}</label>
        <input {...Inputprops}  onChange={onChange} 
         onBlur={handleFocus}
         onFocus={()=>
          Inputprops.name==="confrimpassword " && setFocused(true)}
          focused={focused.toString()}/>
        <span>{errorMessage}</span>
    </div>
  )
}

export default Input