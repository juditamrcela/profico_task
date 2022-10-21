import React from "react";
import './Header.scss';
const Header:React.FC=()=>{
    return(
        <div className="header">
            <p className="text">Make MyNews your homepage</p>
            <p className="text">Every day discover what's trending on the internet!</p>
            <div>
                <button>GET</button>
                <p className="text">No,thanks</p>
            </div>
            

        </div>

    );
}
export default Header;