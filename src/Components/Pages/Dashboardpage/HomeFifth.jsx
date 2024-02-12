import React from "react";
import CircularProgressBar from "../../SubComponents/GraphComponents/CircularProgressbar";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
const HomeThird = () => {

    const data = [{
        heading: "Email Statistics",
        subheading: "Last Campaign Performance",
        color: "#51cbce",
        colorname: "blue",
        percentage: 60,
        status:"Open",
        dis:"Number of emails sent",
        icon:<CalendarTodayOutlinedIcon/>
    },
    {
        heading: "New Visitators",
        subheading: "Out Of Total Number",
        color: "#fbc658",
        colorname: "yellow",
        percentage: 34,
        dis:"Campaign sent 2 days ago",
        status:"Visited",
        icon:<DoneOutlinedIcon/>
    },
    {
        heading: "Orders",
        subheading: "Total Number",
        color: "#ef8157",
        colorname: "red",
        percentage: 80,
        dis:"Updated 3 minutes ago",
        status:"Completed",
        icon:<AccessTimeOutlinedIcon/>
    },
    {
        heading: "Subscriptions",
        subheading: "Our Users",
        color: "#66615b",
        colorname: "gray",
        percentage: 11,
        dis:"Total users",
        status:"Ended",
        icon:<RestoreOutlinedIcon/>
    }]

    return (
        <>
            <div className="row mainFifth">
                {
                    data.map((item, key) => (

                        <div className="col-md-3" key={key}>
                            <div className="card">
                                <div className="card-header">
                                    <div className="card-title">{item.heading}</div>
                                    <p className="card-category">{item.subheading}</p>
                                </div>
                                <div className="card-body">
                                    <div className="chartdive">
                                        <CircularProgressBar percentage={item.percentage} color={item.color} />
                                        <p>{item.percentage}%</p>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="legend">
                                        <span className={item.colorname} />{item.status}</div>

                                    <div className="stats">
                                        {item.icon}
                                        {item.dis}</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default HomeThird