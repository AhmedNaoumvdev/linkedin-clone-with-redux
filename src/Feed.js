import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption.js';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post.js';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import { db } from './firebase.js';
import { useSelector } from 'react-redux';
import { selectuser } from './features/userSlice';

function Feed() {
    const user = useSelector(selectuser)
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() =>{
        db.collection("posts")
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) =>(
            setPosts(
                snapshot.docs.map((doc) =>(
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))
    }, []);

    const sendPost = e =>{
        e.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoURL: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput("");
    };

  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form action="">
                    <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>
            <div className="feed__inputOption">
                <InputOption Icon={ImageIcon} Title='Photo' Color="#70b5f9"/>
                <InputOption Icon={SubscriptionsIcon} Title='Video' Color="#e7a33e"/>
                <InputOption Icon={EventNoteIcon} Title='Event' Color="#c0cbcd"/>
                <InputOption Icon={CalendarViewDayIcon} Title='Write article' Color="#7fc15e"/>
            </div>
        </div>
        {posts.map(({id, data: {name, description, message, photoUrl }}) => {
            return(
                <Post 
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
                />)
            })}

    </div>
  )
}

export default Feed