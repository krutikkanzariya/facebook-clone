import { Avatar } from '@material-ui/core';
import { AccountCircle, ChatBubbleOutline, ExpandMore, NearMe, ThumbUp, ThumbUpAltRounded } from '@material-ui/icons';
import React   from 'react';
import './Feed.css'

function Post({profileImage,image,username,timestamp,message}){
    return (
        <div className="post">
            <div className="post__top">
                <Avatar className="post__avatar" src={profileImage}/>
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__image">
                <img src={image} alt=""/>
            </div>
            <div className="post__options">
                <div className="post__option">
                    <ThumbUp />
                    <p>like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutline />
                    <p>comment</p>
                </div>
                <div className="post__option">
                    <NearMe />
                    <p>
                        share
                    </p>
                </div>
                <div className="post__option">
                    <AccountCircle />
                    <ExpandMore />
                </div>
            </div>
        </div>
    );
}      

export default Post;