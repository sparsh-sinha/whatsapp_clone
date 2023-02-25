import { Avatar } from '@mui/material'
import React from 'react';
import "./Chat.css";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MicIcon from '@mui/icons-material/Mic';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import {AttachFile, InsertEmoticon, SearchOutlined} from '@mui/icons-material';
function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />

        <div className="chat__headerInfo">
          <h3>
            Room name
          </h3>
         <p>last seen at 7:30PM</p> 
        </div>
        <div className="chat__headerRight">
        <IconButton>
        <DonutLargeIcon />
        </IconButton>
        <IconButton>
        <AttachFile />
        </IconButton>
        <IconButton>
        <MoreVertIcon />
        </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">
            Sonny
          </span>
          Hiii
          
          <span className="chat_timestamp">
            {new Date()
            .toUTCString()}


          </span>


        </p>


        <p className="chat__message chat__receiver">
          <span className="chat__name">
            Sonny
          </span>
          Hiii
          
          <span className="chat_timestamp">
            {new Date()
            .toUTCString()}


          </span>


        </p>






        <p className="chat__message">
          <span className="chat__name">
            Sonny
          </span>
          Heyyy!
          
          <span className="chat_timestamp">
            {new Date()
            .toUTCString()}


          </span>


        </p>

        <p className="chat__message">
          <span className="chat__name">
            Sonny
          </span>
          How are you doing?
          
          <span className="chat_timestamp">
            {new Date()
            .toUTCString()}


          </span>


        </p>
        

        
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input placeholder="Type a message"
          type="text" />
          <button type="submit">send a message
          </button>

        </form>
          <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
