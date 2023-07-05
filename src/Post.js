import React, {forwardRef} from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@mui/icons-material'

const Post = forwardRef(({name, description, message, photoUrl}, ref) => {
  return (
    <div ref={ref} className='post'>
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2> {name} </h2>
          <p> {description} </p>
        </div>

      </div>
      <div className="post__body">
        <p> {message} </p>
      </div>

      <div className="post__buttons">
        <InputOption 
        Icon={ThumbUpAltOutlined}
        Title="Like"
        Color='gray'
        />
        <InputOption 
        Icon={ChatOutlined}
        Title="Comment"
        Color='gray'
        />
        <InputOption 
        Icon={ShareOutlined}
        Title="Share"
        Color='gray'
        />
        <InputOption 
        Icon={SendOutlined}
        Title="Send"
        Color='gray'
        />
      </div>
    </div>
  )
})

export default Post