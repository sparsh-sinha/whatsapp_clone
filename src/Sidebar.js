import React from 'react'
import "./Sidebar.css"
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { IconButton } from '@mui/material';
import {Avatar} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {SearchOutlined} from '@mui/icons-material';
import SidebarChat from './SidebarChat';
function Sidebar() {
  return (
    <div className='sidebar'>
      
      <div className="sidebar__header">
      <IconButton>
        <Avatar src="https://www.google.com/search?q=avatar+for+developers&tbm=isch&chips=q:avatar+for+developers,online_chips:png:CrxCvzi2qI0%3D&hl=en&sa=X&ved=2ahUKEwiznYm3rIH9AhXMiNgFHdsyCz0Q4lYoAXoECAEQJw&biw=802&bih=669#imgrc=uVj6k6ICqTpJ8M"/>
        </IconButton>
      <div className="sidebar__headerRight">
      <IconButton>
        <DonutLargeIcon />
        </IconButton>
        <IconButton>
        <ChatIcon />
        </IconButton>
        <IconButton>
        <MoreVertIcon />
        </IconButton>

      </div>
      </div>
      <div className="siderbar__search">
        <div className="siderbar__searchContainer">
          <SearchOutlined />
          <input placeholder="search or start new chat" type="text" />
        </div>
        </div>
        <div className="sidebar__chats">
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />


        
      </div>
    </div>
  );
}

export default Sidebar;
