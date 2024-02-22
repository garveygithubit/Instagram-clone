import React from 'react'
import "./Post.css"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkIcon from '@mui/icons-material/Bookmark';

function Post({user,postImage,likes,timestamp}) {
  return (
    <div className='post'>
        <div className="post__header">
            <div className="post__headerAuthor">
            <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
            {user}* <span>{timestamp}</span>
            </div>
            <MoreHorizIcon/>
    
        </div>
        <div className="post__image">
            <img src={postImage} alt="" />

        </div>
        <div className="post__footer">
        <div className="post__footericon">
            <div className="post__iconsmain">
            <FavoriteIcon className='post-icon'/>
            <ChatBubbleIcon className='post-icon'/>
            <TelegramIcon className='post-icon'/>
            </div>
                <div className="post__iconsave">
                    <BookmarkIcon className ="post-icon"/>

              
            </div>
        </div>
        Liked by {likes} people.
        </div>
    </div>
  )
}

export default Post