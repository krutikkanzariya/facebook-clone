import React, { useEffect, useState } from 'react';
import './Feed.css'
import StoryReel from './StoryReel.js'
import MessageSender from './MessageSender.js'
import Post from "./Post.js";
import db from './firebase'

function Feed(){
	const [posts,setPosts] = useState([]);

	useEffect(()=>{
		db.collection('posts').onSnapshot((snapshot)=>
			setPosts(snapshot.docs.map((doc)=>({id:doc.id, data:doc.data() })))	
		);
	},[])


	return <div className="feed">
		<StoryReel />
		<MessageSender />
		{posts.map((post)=>(
			<Post 
				key={post.id}
				profileImage={post.data.profilePic}
				username={post.data.username}
				timestamp={post.data.timestamp}
				image={post.data.image}
				message={post.data.message}			
			/>
		))}
	</div>
}

export default Feed;