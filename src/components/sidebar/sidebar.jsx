import React from 'react'
import './sidebar.css'
import {RssFeed,
    Chat,
    PlayCircleFilledOutlined,
    Group,
    Bookmark,
    HelpOutline,
    WorkOutline,
    Event,
    School,} from "@mui/icons-material"

import { Users } from "../../dummyData";
import CloseFriend from '../closeFriend/closeFriend'

export default function Sidebar(){
return(
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                         <img src="src/assets/1f3e0.svg" alt="readin list" 
                                    class="icono-home" width="24px" height="24px"/>
                        <span className="sidebarListItemText">
                            Home
                        </span>
                    </li>
                    <li className="sidebarListItem">
             <img src="/src/assets/1f6cd.svg" alt="readin list" 
                                    class="icono-home" width="24px" height="24px"/>
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <img src="/src/assets/1f4dc.svg" alt="readin list" 
                                    class="icono-home" width="24px" height="24px"/>
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
           <img src="/src/assets/2764.svg" alt="readin list" 
                                    class="icono-home" width="24px" height="24px"/>
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
          <img src="/src/assets/1f914.svg" alt="readin list" 
                                    class="icono-home" width="24px" height="24px"/>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
          <img src="/src/assets/1f399.svg" alt="readin list" 
                                    class="icono-home" width="24px" height="24px"/>
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
          <img src="/src/assets/1f3f7.svg" alt="readin list" 
                                    class="icono-home" width="24px" height="24px"/>
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
          <img src="/src/assets/1f4a1.svg" alt="readin list" 
                                    class="icono-home" width="24px" height="24px"/>
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
          <img src="/src/assets/1f3f7.svg" alt="readin list" 
                                    class="icono-home" width="24px" height="24px"/>
            <span className="sidebarListItemText">Courses</span>
          </li>
                </ul>
          <button className="sidebarButton">Show More</button>
          <br></br>
                <li className="sidebarListItem">
          <img src="/src/assets/1f44d.svg" alt="readin list" 
                                    class="icono-home" width="24px" height="24px"/>
            <span className="sidebarListItemText">Code of conduct</span>
          </li>
          <li className="sidebarListItem">
          <img src="/src/assets/1f913.svg" alt="readin list" 
                                    class="icono-home" width="24px" height="24px"/>
            <span className="sidebarListItemText">Privacy Policy</span>
          </li>
          <li className="sidebarListItem">
          <img src="/src/assets/1f440.svg" alt="readin list" 
                                    class="icono-home" width="24px" height="24px"/>
            <span className="sidebarListItemText">Terms of Use</span>
          </li>

        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
        {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
            </div>
        </div>
    );
}