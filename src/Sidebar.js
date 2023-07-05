import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'
import { selectuser } from './features/userSlice';
import { useSelector } from 'react-redux';

function Sidebar() {
    const user = useSelector(selectuser)
    const recentItem = (topic) =>{
        return(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>)
    };

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="" alt="" />
                <Avatar className='sidebar__avatar'>
                    {user.email[0]}
                </Avatar>
                <h2> {user.displayName} </h2>
                <h4> {user.email} </h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p> 
                    <p className='sidebar__statNumber'>5.543</p>  
                </div>
                <div className="sidebar__stat">
                    <p>views on post</p> 
                    <p className='sidebar__statNumber'>5.543</p>  
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactJS")}
                {recentItem('Programming')}
                {recentItem('SoftwareEngineer')}
                {recentItem('CyberSecurity')}
                {recentItem('Assembly')}
            </div>
        </div>
    )
}

export default Sidebar