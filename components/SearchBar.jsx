import React from "react"

export default function SideMenu() { 
    return (
        <header>
        
            <div className="search-area">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" name=""></input>
            </div>
            
            <div  className="user-area">
                <a href="#" className="add">+ Add</a>
                <a href="#" className="notification">
                    <i className="fa-regular fa-bell"></i>
                    <span className="circle">2</span>
                </a>
                <a href="#">
                    <div className="user-img"></div>
                    <i className="fa-solid fa-angle-down"></i>
                </a>
            </div>
            
        </header>
    )
}

//design idea from dribbble dashboard
//dribbble.com/shots/3118180-IT-Recruitement-Dashboard/attachments/659148
// by Kukuh Andik