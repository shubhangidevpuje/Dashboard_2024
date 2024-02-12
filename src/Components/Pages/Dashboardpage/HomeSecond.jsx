import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LineChart from "../../SubComponents/GraphComponents/LineChart";

const HomeSecond = () => {

    const data = [
        {
            val: "$34,657",
            begde: "+18%",
            color:"green",
            dis: "TOTAL EARNINGS IN LAST TEN QUARTERS",
            chartColor: "#6bd098"
        },
        {
            val: "169",
            begde: '-14%',
            color:"red",
            dis: "TOTAL SUBSCRIPTIONS IN LAST 7 DAYS",
            chartColor: "#ef8157"
        },
        {
            val: "8,960",
            begde: "-51%",
            color:"yellow",
            dis: "TOTAL DOWNLOADS IN LAST 6 YEARS",
            chartColor: "#fbc658"
        }
    ]
    return (
        <>
            <div className="row pt-4 MainSecond">
                {data.map((item, key) => (

                    <div className="col-md-4" key={key}>
                        <div className="card">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="numbers float-start">{item.val}</div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="float-end">
                                            <span className={`badge ${item.color}`}>{item.begde}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h6 className="big-title">{item.dis}</h6>
                                    <LineChart color={item.chartColor} height={203} width={444} />

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default HomeSecond;