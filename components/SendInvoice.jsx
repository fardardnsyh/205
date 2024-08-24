import React from "react"
import InvoiceCreator from "./InvoiceCreator"
import Chart from "./Chart"

//Chart Js

export default function SendInvoice() { 
    
    return (
        
        <section id="send-invoice-area">
        
            <div className="heading">
                <h1>Dashboard</h1>
                <p>Welcome to InvoiceCentral the goto invoicing dashboard for AramCodes</p>
            </div>
            
            <div className="cards">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-3 col-xl-4">
                        <div className="card">
                            <div className="user-img"></div>
                            <span className="user-name">Aram Valcourt</span>
                            <span className="user-title">Full-Stack Developer</span>
                            <hr></hr>
                            
                            <div className="col-md-3">
                                <span className="education">Education</span>
                            </div>
                            
                            <div className="col-md-9">
                                <span className="schools">Scrimba</span>
                                <span className="schools">GenerationUSA</span>
                                <span className="schools">OneTen</span>
                            </div>   
                        </div>
                    </div>
                
                    <div className="col-sm-12 col-md-12 col-lg-3 col-xl-4">
                        <div className="card">
                            <h6>Recent Invoice</h6>
                            <span className="date">
                                Sep 07, 2023   
                            </span>
                            <div className="col-md-2">
                                <span className="job-type">IT</span>
                            </div>
                            
                            <div className="col-md-10">
                                <span className="company">Aramark HQ</span>
                                <span className="contract-type">Build</span>
                                <span className="time">54 Hrs</span>
                            </div>
                               
                        </div>
                    </div>
                    
                    <div className="col-sm-12 col-md-12 col-lg-3 col-xl-4">
                        <div className="card">
                            <h6>Company's Trajectory</h6>
                            <span className="date month">
                                Current Month  
                            </span>
                            
                            <Chart />
                                                 
                            
                        </div>
                    </div>
                    
                    
                </div>
                
                
                <InvoiceCreator />
                
            </div>
            
        </section>
    )
}

//design idea from dribbble dashboard
//dribbble.com/shots/3118180-IT-Recruitement-Dashboard/attachments/659148
// by Kukuh Andik

//if decided to add a graph card
// third card <div className="card col-md-4"></div>