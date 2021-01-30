import React from 'react'
import './sidebar.css'
import SidebarRow from "./SidebarRow.js"
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStateValue} from './StateProvider';
function Sidebar(){
	const [{user},dispatch]=useStateValue();

	return <div className="sidebar">
			<SidebarRow src={user.photoURL} title={user.displayName} />
			<SidebarRow Icon={LocalHospitalIcon} title="COVID-19 info center"/>
			<SidebarRow Icon={EmojiEmotionsIcon} title='Pages'/>
			<SidebarRow Icon={PeopleIcon} title='Friends'/>
			<SidebarRow Icon={ChatIcon} title='Massenger'/>
			<SidebarRow Icon={StorefrontIcon} title='Marketplace'/>
			<SidebarRow Icon={VideoLibraryIcon} title='video'/>
			<SidebarRow Icon={ExpandMoreIcon} title="Marketplace" />
	</div>
}

export default Sidebar;