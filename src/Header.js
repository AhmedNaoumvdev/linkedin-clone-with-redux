import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HeaderOption from './HeaderOption.js';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>
        <div className="header__left">
            <LinkedInIcon className='linkedIn__icon' />
            <div className="header__search">
                <SearchIcon />
                <input type="text" placeholder='Search' />
            </div>
        </div>

        <div className="header__right">
            <HeaderOption Icon={HomeIcon} Title='Home'/>
            <HeaderOption Icon={SupervisorAccountIcon} Title='My Network'/>
            <HeaderOption Icon={BusinessCenterIcon} Title='jobs'/>
            <HeaderOption Icon={ChatIcon} Title='Messaging'/>
            <HeaderOption Icon={NotificationsIcon} Title='Notifications'/>
            <HeaderOption avatar={true} Title="Me"/>
        </div>
    </div>
  )
}

export default Header