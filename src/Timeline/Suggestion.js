import React from 'react'
import './Suggestion.css'
import Avatar from '@mui/material/Avatar';


function Suggestion() {
  return (
    <div className='suggestion'>
      <div className="sugestion__title">
        Suggestion for you
      </div>
      <div className="suggestions__usernames">
        
        <div className="sugestion__username">   
        <div className="username__left">
        <span className='avatar'>
          <Avatar>G</Avatar>
        </span>
        <div className="username-info">
          <span className='username'>Garvey_</span>
          <span className='relation'>New to instagram</span>
        </div>
        </div>
        <button className="follow_button"> follow</button>

       
        </div>
        <div className="sugestion__username">   
        <div className="username__left">
        <span className='avatar'>
          <Avatar>G</Avatar>
        </span>
        <div className="username-info">
          <span className='username'>Garvey_</span>
          <span className='relation'>New to instagram</span>
        </div>
        </div>

        
        <button className="follow_button"> follow</button>

       
        </div>
        <div className="sugestion__username">   
        <div className="username__left">
        <span className='avatar'>
          <Avatar>G</Avatar>
        </span>
        <div className="username-info">
          <span className='username'>Garvey_</span>
          <span className='relation'>New to instagram</span>
        </div>
        </div>
        <button className="follow_button"> follow</button>

       
        </div>
      </div>
    </div>
  )
}

export default Suggestion