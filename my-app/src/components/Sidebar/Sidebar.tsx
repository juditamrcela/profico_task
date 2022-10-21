import React from "react";
import { useState } from "react";
import { AiFillHome,AiFillHeart } from "react-icons/ai"
import { NavLink } from 'react-router-dom'
import { BsBriefcaseFill,BsNewspaper } from "react-icons/bs";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { CgScreen } from "react-icons/cg";
import { FaBars} from 'react-icons/fa';
import { FiX } from "react-icons/fi";
import 'bootstrap/dist/css/bootstrap.css';
import './Sidebar.scss';
const Sidebar:React.FC=()=>{
    const [isOpen,setIsOpen]=useState<boolean>(false)
    const toggle=()=>setIsOpen(!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<AiFillHome/>
        },
        {
            path:"/world",
            name:"General",
            icon:<BsNewspaper/>
        },
        {
            path:"/business",
            name:"Business",
            icon:<BsBriefcaseFill/>
        },
        {
            path:"/health",
            name:"Health",
            icon:<AiFillHome/>
        },
        {
            path:"/science",
            name:"Science",
            icon:<AiFillHome/>
        },
        {
            path:"/sports",
            name:"Sports",
            icon:<MdOutlineSportsSoccer/>
        },
        {
            path:"/technology",
            name:"Technology",
            icon:<CgScreen/>
        },
        {
            path:"/favorites",
            name:"Favorites",
            icon:<AiFillHeart/>
        }
    ]
    return(
        
            <div style={{width : isOpen ? "600px" : "70px"}} className="sidebar">
                <div className="topSide">
                    <div className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                    <div className="exit" style={{display:isOpen ? "flex" : "none"}}> 
                        <FiX onClick={toggle}/>
                    </div>
                </div>
                <div className="links">
                { menuItem.map((item,index)=>(
                    <NavLink to={item.path} key={index} className="link">
                        <div className="icon">{item.icon}</div>
                        <div className="link_text">{item.name}</div>
                    </NavLink>
                ))}
                </div>
                

            </div>
            
        
    )
}
export default Sidebar