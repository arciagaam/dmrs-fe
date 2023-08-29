import React from 'react'

const FormInput = ({id = "", name = "", label = "", value = "", placeholder = "", onInput}) => {
  return (
    <div className="flex flex-col gap-1">
        <label className='text-xs' htmlFor={id}>{label}</label>
        <input type="text" id={id} name={name} value={value} placeholder={placeholder} onInput={onInput} className='px-3 py-2 text-sm bg-transparent rounded-full ring-1 ring-white focus:outline-none placeholder:text-xs'/>
    </div>
  )
}

export default FormInput