import React, { useState } from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StoreIcon from '@material-ui/icons/Store';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStateValue} from './StateProvider'


function Header() {
	
	const [{user},dispatch]=useStateValue();

	return <div className="header">
		<div className="header__left">
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/150px-Facebook_f_logo_%282019%29.svg.png"
			 alt="Facebook_logo" />
			 <div className="header__search">
			 	<SearchIcon />
			 	<input type="text" placeholder="Search facebook"/>
			 </div> 
		</div>
		<div className="header__middle">
			<div className="header__option
			 header__option--active">
				<HomeIcon fontsize="large" />
			</div>
			<div className="header__option">
				<FlagIcon fontsize="large" />
			</div>
			<div className="header__option">
				<SubscriptionsIcon fontsize="large" />
			</div>
			<div className="header__option">
				<StoreIcon fontsize="large" />
			</div>
			<div className="header__option">
				<SupervisedUserCircleIcon fontsize="large" />
			</div>

		</div>
		<div className="header__right">
			<div className="header__info">
				<Avatar src={user.photoURL}/>
				<h4>{user.displayName}</h4>
			</div>

			<IconButton>
				<AddIcon />
			</IconButton>
			<IconButton>
				<ForumIcon />
			</IconButton>
			<IconButton>
				<NotificationsActiveIcon />
			</IconButton>
			<IconButton>
				<ExpandMoreIcon />
			</IconButton>

		</div>
	</div>
}
export default Header;