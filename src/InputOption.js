import React from 'react'
import './InputOption.css'

function InputOption({Icon, Title, Color}) {
  return (
    <div className='inputOption'>
        <Icon style={{color: Color}} />
        <h4>{Title}</h4>
    </div>
  )
}

export default InputOption