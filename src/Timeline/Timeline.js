
import './Timeline.css'
import Suggestion from './Suggestion'
import Post from './post/Post'
import React, { useState } from 'react';


function Timeline() {

  const[post,setPost]= useState([
    {
      user: 'Garvey',
      postImage:'https://images.pexels.com/photos/289998/pexels-photo-289998.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      likes:12,
      timespage:"1d"
    },
    {
      user: 'shady',
      postImage:'https://images.pexels.com/photos/5313158/pexels-photo-5313158.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes:12,
      timespage:"12d"
    },
    {
      user: 'dime',
      postImage:'https://images.pexels.com/photos/1181415/pexels-photo-1181415.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
      likes:12,
      timespage:"3d"
    },
    {
      user: 'dime',
      postImage:'https://images.pexels.com/photos/7605927/pexels-photo-7605927.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes:12,
      timespage:"30mins"
    },

  ]);
   
  return (
    <div className='timeline'>
        <div className="timeline__left">
          <div className="timeline__posts">

          {post.map((post) =>(
            <Post user={post.user} 
            postImage={post.postImage} 
            likes={post.likes}
             timestamp={post.timestamp}/>
          )
            )}

          </div>
        </div>
        <div className="timeline__right">
        <Suggestion/>

        </div>

    </div>
    
  )
}

export default Timeline

