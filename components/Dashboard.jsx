import React from "react"
import SideMenu from "./SideMenu"
import SearchBar from "./SearchBar"
import SendInvoice from "./SendInvoice"

export default function Dashboard() { 
    return (
        <div className="big-container">
        <SearchBar />
        <SideMenu />
        <SendInvoice />
        </div>
    )
}