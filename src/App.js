import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useSelector } from 'react-redux';
import { selectuser } from './features/userSlice';
import Login from './Login';
import Widgets from './Widgets';

function App() {
  const user = useSelector(selectuser); 
  return (
    <div className="app">
      <Header />  
      {!user ? (<Login />):
      (
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div> 
      )}     
    </div>
  );
}

export default App;
