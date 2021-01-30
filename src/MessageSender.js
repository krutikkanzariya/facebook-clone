import React, { useState } from 'react';
import {Avatar} from '@material-ui/core';
import './Feed.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {useStateValue} from './StateProvider';
import db from './firebase';
import firebase from 'firebase';



function MessageSender(){
	
	const [{user},dispatch]=useStateValue();
	
	const [input,setInput] = useState('');
	const [imageUrl,setImageUrl] = useState('');
	const handleSubmit = (e) =>{
		e.preventDefault();
		db.collection('posts').add({
			message:input,
			timestamp:firebase.firestore.FieldValue.serverTimestamp(),
			profilePic: user.photoURL,
			image:imageUrl,
			 username:user.displayName
		})
		setInput('');
		setImageUrl('');
	}
	return (
		<div className="messageSender">
			<div className="messageSender__top">
				<Avatar src={user.photoURL}/>
				<form>
					<input value={input}
					onChange={(e)=>setInput(e.target.value)}
					 class="messageSender__input" type="text" 
					placeholder={`what's in your mind, ${user.displayName} ?`} />
					<input value={imageUrl}
					onChange={(e)=>setImageUrl(e.target.value)}
					 class="mssageSender__input" 
					placeholder="image URL (oprional)" /> 
					<button onClick={handleSubmit} type="submit">
					 submit
					</button>
				</form>
			</div>
			<div className="messageSender__bottom">
				<div className="messageSender__option">
					<VideocamIcon style={{color:"red"}} />
					<h3> Live/video</h3>
				</div>
				<div className="messageSender__option">
					<PhotoLibraryIcon style={{color:"green"}}/>
					<h3>Photo/video</h3>
				</div>
				<div className="messageSender__option">
					<InsertEmoticonIcon style={{color:"orange"}}/>
					<h3>Feeling/Activity</h3>
				</div>
			</div>

	</div>);
}


export default MessageSender;