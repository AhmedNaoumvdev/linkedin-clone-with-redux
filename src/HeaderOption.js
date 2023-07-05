import React from 'react'
import './HeaderOption.css'
import { useSelector } from 'react-redux'
import { selectuser } from './features/userSlice'
import { Avatar } from '@mui/material'

function HeaderOption({Icon, Title, avatar}) {
  const user = useSelector(selectuser)
  return (
    <div className="headerOption">
        {Icon && <Icon className="headerOption__icon" />}
        {avatar && (
        <Avatar className="headerOption__iconspec">
          {user?.email[0]}
          </Avatar>)}
        <h3 className='headerOption__title'> {Title} </h3>
        
    </div>
  )
}

export default HeaderOption