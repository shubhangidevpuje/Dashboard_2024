import React, { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import "./Header.css"
const Header = ({ handleFun, open }) => {

    return (
        <>
            <div className={`headerContainer`}>
                <div className="firstDive">
                    <div className="subheading">
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleFun}
                            edge="start"
                        >
                            {open ?
                                <ArrowBackIosNewIcon /> : <ArrowForwardIosOutlinedIcon/>
                            }
                        </IconButton>
                        <Typography variant="h6" noWrap component="div" >
                           <b>Hello People</b>
                        </Typography>


                    </div>
                </div>
                <div className="secondDiv ">
                    <div className="serach">
                        <div className="serachdivefirst">
                            <div className={'inputbox inputBoxFocus '}>
                                <input className="" placeholder="Search..." type="text" defaultValue />
                            </div>
                            <div className="box ">
                                <SearchIcon />
                            </div>
                        </div>
                    </div>
                    <div className="signInbox">
                        {/* <DashboardOutlinedIcon />
                        <NotificationsNoneOutlinedIcon className="icon " />
                        <SettingsOutlinedIcon className="icon" /> */}

                    </div>
                </div>
            </div>

        </>

    )
}

export default Header;