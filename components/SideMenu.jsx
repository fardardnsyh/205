import React from "react"

export default function SideMenu() { 
    return (
        <section id="sideMenu">
            <nav>
                <a href="#" className="active"> 
                    <i className="fa-regular fa-paper-plane"></i>
                    Send Invoice
                </a>
                
                <a href="#">
                    <i className="fa-solid fa-database"></i>
                    GET Invoices
                </a>
                
                <a href="#">
                    <i className="fa-solid fa-server"></i>
                    POST an Invoice
                </a>
                
                <a href="#">
                    <i className="fa-solid fa-upload"></i>
                    PUT an Invoice
                </a>
                
                <a href="#">
                    <i className="fa-solid fa-server fa-fade"></i>
                    PATCH an Invoice
                </a>
            </nav>
        </section>
    )
}

//design idea from dribbble dashboard
//dribbble.com/shots/3118180-IT-Recruitement-Dashboard/attachments/659148
// by Kukuh Andik

