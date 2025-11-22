import useWindowStore from '#store/window'
import React from 'react'

const WindowControls = ({target}) => {
  const {closeWindow}=useWindowStore()

  return (
    <div id='window-controls' onClick={()=>closeWindow(target)} className='cursor-pointer'>
      <div className='close' ></div>
      <div className='minimize'></div>
      <div className='maximize'></div>
    </div>
  )
}

export default WindowControls