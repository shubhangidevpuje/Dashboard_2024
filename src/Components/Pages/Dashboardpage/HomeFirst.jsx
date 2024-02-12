import React from "react";
import LanguageIcon from '@mui/icons-material/Language';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import LineAxisOutlinedIcon from '@mui/icons-material/LineAxisOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

const data = [
    {
        name: "Capacity",
        val: '150GB',
        color:'yellow',
        mainIcon: <LanguageIcon />,
        lastname: "Update Now",
        lastIcon: <CachedOutlinedIcon />
    },
    {
        name: "Revenue",
        val: '$ 1,345',
        color:'green',
        mainIcon: <WorkHistoryOutlinedIcon />,
        lastname: "Last day",
        lastIcon: <CalendarTodayOutlinedIcon />
    },
    {
        name: "Errors",
        val: '23',
        color:'red',
        mainIcon: <LineAxisOutlinedIcon />,
        lastname: "In the last hour",
        lastIcon: <AccessTimeOutlinedIcon />
    },
    {
        name: "Followers",
        val: '+45K',
        color:'blue',
        mainIcon: <FavoriteBorderOutlinedIcon />,
        lastname: "Update Now",
        lastIcon: <CachedOutlinedIcon />
    }
]

const HomeFirst = () => {
    return (
        <>
            <div className="row pt-4 mainHome">
                {data.map((item, key) => (

                    <div className="col-md-3" key={key}>
                        <div className="card p-0">
                            <div className="card-body p-3">
                                <div className="cardtop">
                                    <div className={`first ${item.color}`}>
                                        <div className="setbg">
                                        {item.mainIcon}
                                        </div>
                                    </div>
                                    <div className="second">
                                        <h6>{item.name}</h6>
                                        <h4 className="textset">{item.val}</h4>
                                    </div>
                                </div>
                                <div className="cardbottom">
                                        {item.lastIcon}
                                    <h6>{item.lastname}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}

export default HomeFirst;