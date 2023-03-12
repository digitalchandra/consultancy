import React from 'react'
import Nav from '../compoment/Nav'
import './Dashboard.css'
import Topbar from '../compoment/Topbar'
export default function Dashboard() {
  return (
    <div className="container-fluid">
       <div className="row">
          <Topbar/>
           <div className="col-md-2">
                <Nav/>
           </div>
           <div className="col-md-10">
               <h1> Dashboard </h1>
            </div>
       </div>
    </div>
  )
}
