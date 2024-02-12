import React from "react";
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import CloseIcon from '@mui/icons-material/Close';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import DoneIcon from '@mui/icons-material/Done';
import DoubleColumnChart from "../../SubComponents/GraphComponents/DoubleColumnChart";

const HomeForth = () => {
    return (
        <>

            <div className="row pb-4 forthSection">
                <div className="col-md-6">
                    <div className="card-tasks card">
                        <div className="card-header"><h4 className="card-title">Tasks</h4><h5 className="card-category">Backend development</h5></div>
                        <div className="card-body">
                            <div className="table-full-width table-responsive">
                                <table className="table">
                                    <tbody>

                                        <tr>
                                            <td>
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input type="checkbox" className="form-check-input" defaultChecked /><span className="form-check-sign" />
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="img-row">
                                                <div className="img-wrapper">
                                                    <img alt="broken" className="img-raised" src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" />
                                                </div>
                                            </td>
                                            <td className="text">Sign contract for "What are conference organizers afraid of?"</td>
                                            <td className="td-actions">
                                                <button >
                                                    <DesignServicesOutlinedIcon />
                                                </button>
                                                <button>
                                                    <CloseIcon />
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input type="checkbox" className="form-check-input" defaultChecked /><span className="form-check-sign" />
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="img-row">
                                                <div className="img-wrapper">
                                                    <img alt="broken" className="img-raised" src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" />
                                                </div>
                                            </td>
                                            <td className="text">Sign contract for "What are conference organizers afraid of?"</td>
                                            <td className="td-actions">
                                                <button >
                                                    <DesignServicesOutlinedIcon />
                                                </button>
                                                <button>
                                                    <CloseIcon />
                                                </button>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input type="checkbox" className="form-check-input" defaultChecked /><span className="form-check-sign" />
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="img-row">
                                                <div className="img-wrapper">
                                                    <img alt="broken" className="img-raised" src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" />
                                                </div>
                                            </td>
                                            <td className="text">Sign contract for "What are conference organizers afraid of?"</td>
                                            <td className="td-actions">
                                                <button >
                                                    <DesignServicesOutlinedIcon />
                                                </button>
                                                <button>
                                                    <CloseIcon />
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input type="checkbox" className="form-check-input" defaultChecked /><span className="form-check-sign" />
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="img-row">
                                                <div className="img-wrapper">
                                                    <img alt="broken" className="img-raised" src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" />
                                                </div>
                                            </td>
                                            <td className="text">Sign contract for "What are conference organizers afraid of?"</td>
                                            <td className="td-actions">
                                                <button >
                                                    <DesignServicesOutlinedIcon />
                                                </button>
                                                <button>
                                                    <CloseIcon />
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="stats">
                                <CachedOutlinedIcon />Updated 3 minutes ago
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">2021 Sales</h4><p className="card-category">All products including Taxes</p>
                        </div>
                        <div className="card-body">
                        <DoubleColumnChart/>
                        </div>

                        <div className="card-footer">
                            <div className="legend">
                                <span className="blue"></span>
                                Tesla Model S
                                <span className="red"></span>
                                BMW 5 Series
                                </div>
                            <div className="stats">
                                <DoneIcon />Data information certified</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeForth;