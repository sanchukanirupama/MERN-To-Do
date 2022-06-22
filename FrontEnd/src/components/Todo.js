import React from 'react'

export default function Todo({text, remove, update}) {
  return (
    <div className='todo'>
      <div className='text'>{text}</div>
      <div className='icons'>
      <i className="ri-edit-line" id="update" onClick={update}></i>
      <i className="ri-delete-bin-5-line" id='delete' onClick={remove}></i>
      </div>

    </div>
  )
}
