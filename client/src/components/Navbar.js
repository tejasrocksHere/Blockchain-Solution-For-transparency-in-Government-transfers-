import React from 'react';
import './Navbar.css';
import  './UrgentTransfer.js'
import './AnnualTransfer.js'
import './ViewInfo.js'
import blockchain from './blockchain.png'

import { Link } from 'react-router-dom';


function Navbar(){

      


    /*function logevent(){
        
          window.location.href = "/login.js";
    
    }*/
    
    return(
      <>
        <nav class="navbar navbar-expand-lg navbar-color">
          <div class="container-fluid">

            <div className = "abd">
              <div><Link to = "/"><img id = "bimg" src = {blockchain} alt = "blockchain img"></img></Link></div>
              <div className='logo'>
              <Link className='app' to = "/">GovTransactify</Link>
              </div>
            </div>
            

              <div class="cont">

                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                  <li class="nav-item">
                  <Link className='a1' to = "/AnnualTransfer">Annual Transfer</Link>
                  </li>

                  <li class="nav-item">
                  <Link className='a2' to = "/UrgentTransfer">Urgent Transfer</Link>
                  </li>

                  <li class="nav-item">
                  <Link className='a3' to="/UpdateVacancies">Update Vacancies</Link>
                  </li>

                  <li class="nav-item">
                  <Link className='a3' to="/Offices">Show Vacancies</Link>
                  </li>

                  <li class="nav-item">
                  <Link className='a3' to = "/formfill">Application Form</Link>
                  </li>

                  <li class="nav-item">
                  <Link className='a4' to="/Login"><button className = "btn btn-primary">Login</button></Link>
                  </li>

                </ul>

              </div>

          </div>
        </nav>
        
        </>
    )
  }
  export default Navbar;