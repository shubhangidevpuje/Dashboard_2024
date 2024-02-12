import React, { useEffect } from "react";
import './Sidebar.css';
import Collapse from '@mui/material/Collapse';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';

import routes from "./routes";
import { Link } from 'react-router-dom';
import { useState } from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';


const Sidebar = ({ open, onPageChange, pageName }) => {

    const [clickedDiv, setClickedDiv] = useState(null);

    const handleDivClick = (divId) => {
        setClickedDiv(divId);
    };

    // declare const values
    const [opendrop, setOpendrop] = React.useState({});

    //  here this function have parameter index 
    // index is unique number 
    const handleToCollapse = (index) => {
        setOpendrop(opendrop === index ? -1 : index);
    };

    const handlePageClick = (name) => {
        onPageChange(name);
    };

    useEffect(() => {
        handlePageClick("/")
    })

    console.log(pageName);
    return (
        <>

            <div className="topsider">

                <div className="mainSidebar">


                    <div className="sidebarheader img mb-3" >
                        <span className={`text ${open ? "d-block" : "d-none"}`}><DashboardIcon />&nbsp;&nbsp;&nbsp;<b className="center">Dashboard</b></span>
                    </div>

                    
                    <ul className="uistyle mb-5">
                        {routes.map((item, key) => (<>

                            {
                                item.route ?
                                    <Link to={item.route} onClick={() => handlePageClick(item.route)} key={key}>

                                        <li className={`listyle mt-3 ${clickedDiv === item.div ? 'checked' : ''}`}
                                            onClick={() => handleDivClick(item.div)}
                                        >

                                            <div className="lifirstDiv">
                                                <div className="liIcon" >
                                                    {item.icon}
                                                </div>
                                                <div className={`litext ${open ? "d-flex" : "d-none"}`}>
                                                    <h6 className="h6">
                                                        {item.name}
                                                    </h6>
                                                    {item.collapse && (opendrop === key ? <ArrowDropUpOutlinedIcon /> : <ArrowDropDownOutlinedIcon />)}
                                                </div>
                                            </div>
                                        </li>
                                    </Link>
                                    :
                                    <li className={`listyle mt-3 ${clickedDiv === item.div ? 'checked' : ''}`}
                                        onClick={() => item.collapse ? handleToCollapse(key) : handleDivClick(item.div)}
                                    >

                                        <div className="lifirstDiv">
                                            <div className="liIcon" >
                                                {item.icon}
                                            </div>
                                            <div className={`litext ${open ? "d-flex" : "d-none"}`}>
                                                <h6 className="h6">
                                                    {item.name}
                                                </h6>
                                                {item.collapse && (opendrop === key ? <ArrowDropUpOutlinedIcon /> : <ArrowDropDownOutlinedIcon />)}
                                            </div>
                                        </div>
                                    </li>
                            }

                            {item.collapse && (
                                <Collapse in={opendrop === key} timeout="auto" unmountOnExit className={`${open ? "d-block" : "d-none"}`} key={item.id}>
                                    <ul className="submenu">
                                        {item.collapse.map((subItem, index) => (

                                            <li key={index} className={`${clickedDiv === index ? 'checked' : 'li'}`}
                                                onClick={() => handleDivClick(index)}>

                                                <Link to={subItem.route} onClick={() => handlePageClick(subItem.route)}>
                                                    <span className="firstletter">{subItem.name.split('').filter(char => char === char.toUpperCase()).join('')}</span>
                                                    <span className="fullname">{subItem.name}</span>
                                                </Link>

                                            </li>
                                        ))}
                                    </ul>
                                </Collapse>
                            )}

                        </>
                        ))}
                    </ul>

                    <hr className="" style={{ borderColor: 'white' }} />
                    <div className="sidebarheader img" >
                        <img
                            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                            alt=""
                            style={{ width: '40px', height: '40px' }}
                            className="rounded-circle"
                        />
                        <span className={`text ${open ? "d-inline ms-3" : "d-none"}`}>Chet Faker</span>
                    </div>

                    <hr className="" style={{ borderColor: 'white' }} />
                </div>
            </div>

        </>
    )
}

export default Sidebar;