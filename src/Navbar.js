import React, {useState,useEffect} from 'react'
import './Navbar.css'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Drawer } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {
  BrowserRouter,
  Link,
} from "react-router-dom"


const Navbar = () => {
    const[show, handleShow] = useState(false);
    const[drawer, showDrawer] = useState(false);

    // const toggleDrawer = () => {
    //   showDrawer(true);
    // }

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
           if (window.scrollY > 70) {
            handleShow(true);
           } 
            else handleShow(false);
        });
        return()=>{
            window.removeEventListener("scroll",handleShow);
        };
    },[]);

  return (
    <div className={`navbar ${show ? 'navbar-black' : ''}`}>
        <img className='navbar-logo' 
        src='data:image/png;base64,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'
        alt='logo' />
    
        <button className='navbar-btn'
        >Log Out</button>
        <button className='navbar-menu' onClick = {()=>showDrawer(true)}>
       
          <MenuOutlinedIcon 
            fontSize = 'large'
            />
       </button>

       <Drawer
            open={drawer}
            anchor='right'
            onClose={()=>showDrawer(false)}

          >
          <div className='navbar-drawer'>
            <button className='navbar-drawer-btn' onClick={()=>{showDrawer(false)}}>
              <CloseOutlinedIcon fontSize='small'/>
            </button>
            <BrowserRouter>
              <ul className='navbar-drawer-list'>
                <Link to='/sprite'><li>Sprite</li></Link><br></br>
                <Link to='/fanta'><li>Fanta</li></Link><br></br>
                <Link to='/pepsi'><li>Pepsi</li></Link><br></br>
                <Link to='/jack daniels'><li>Jack Daniels</li></Link><br></br>
                <Link to='/cocacola'><li>Cocacola</li></Link><br></br>
              </ul>
           
            </BrowserRouter>
            
          </div>
          </Drawer>

    </div>
  )
}

export default Navbar