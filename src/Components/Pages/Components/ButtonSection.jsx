import React from "react";
import './componenets.css';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import SettingsIcon from '@mui/icons-material/Settings';
import CheckIcon from '@mui/icons-material/Check';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

const ButtonSection = () => {

    return (

        <>
            <div className="buttonscomponents py-4">
                <div className=" card">
                    <div className="card-body">

                        <div className="row  maincomponents pb-4" >
                            <div className="col-md-6 p-4">
                                <div>
                                    <p className="picksize">Pick your Color</p>
                                    <div className="">
                                        <button className="Default mr-1">DEFAULT</button>
                                        <button className="Primary mr-1">PRIMARY</button>
                                        <button className="info mr-1">INFO</button>
                                        <button className="success mr-1">SUCCESS</button>
                                        <button className="warning">WARNING</button>
                                        <button className="danger">DANGER</button>
                                    </div>
                                </div>
                                <div>
                                    <p className="picksize mt-4">Pick your size</p>
                                    <div>
                                        <button className="small mr-1">SMALL</button>
                                        <button className="regular mr-1">REGULAR</button>
                                        <button className="large ">LARGE</button>
                                    </div>
                                </div>
                                <p class="picksize mt-4">Pagination</p>
                                <div class="card-body">
                                    <nav aria-label="Page navigation example">
                                        <nav class="pagination pagination-primary" aria-label="pagination">
                                            <ul class="pagination-primary pagination gap-2">
                                                <li class="active page-item"><a href="#pablo" class="page-link bgchange">1</a></li>
                                                <li class="page-item"><a href="#pablo" class="page-link">2</a></li>
                                                <li class="page-item"><a href="#pablo" class="page-link">3</a></li>
                                                <li class="page-item"><a href="#pablo" class="page-link">4</a></li>
                                                <li class="page-item"><a href="#pablo" class="page-link">5</a></li>
                                            </ul></nav>
                                        <nav class="" aria-label="pagination ">
                                            <ul class="pagination gap-0 side">
                                                <li class="page-item"><a aria-label="Previous" href="#pablo" class="page-link "><p aria-hidden="true"><KeyboardDoubleArrowLeftIcon /></p></a></li>
                                                <li class="page-item"><a href="#pablo" class="page-link">1</a></li>
                                                <li class="active page-item"><a href="#pablo" class="page-link bgchange">2</a></li>
                                                <li class="page-item"><a href="#pablo" class="page-link">3</a></li>
                                                <li class="page-item"><a aria-label="Next" href="#pablo" class="page-link "><p aria-hidden="true"><KeyboardDoubleArrowRightIcon /></p></a></li>
                                            </ul>
                                        </nav>
                                    </nav>
                                </div>

                            </div>
                            <div className="col-md-6 p-4">
                                <p className="picksize">Buttons with Label</p>
                                <div className="d-flex">
                                    <button className="info mr-1 d-flex"><SettingsIcon sx={{ fontSize: '15px' }} />INFO</button>
                                    <button className="success Primary mr-1 d-flex"><CheckIcon sx={{ fontSize: '15px' }} />SUCCESS</button>
                                    <button className=" warning mr-1 d-flex"><SearchIcon sx={{ fontSize: '15px' }} />WARNING</button>
                                    <button className="danger mr-1 d-flex"><CloseIcon sx={{ fontSize: '15px' }} /> DANGER</button>

                                </div>
                                <button className="Default"><ChevronLeftIcon sx={{ fontSize: '15px' }} />LEFT</button>
                                <button className="Default">RIGHT<ChevronRightIcon sx={{ fontSize: '15px' }} /></button>
                                <div>
                                    <p className="picksize mt-4">Pick your style</p>
                                    <div>
                                        <button className="regular mr-1">DEFAULT</button>
                                        <button className="round mr-1">ROUND</button>
                                        <button className="roundradius mr-1"><FavoriteIcon sx={{ fontSize: '19px' }} /></button>
                                        <button className="radiusborder mr-3"><FavoriteIcon sx={{ fontSize: '19px' }} />WITH ICON</button>
                                        <button className="blank">LINK</button>
                                    </div>
                                </div>
                                <div>
                                    <p className="picksize mt-4">Button Group</p>
                                    <div>
                                        <div class="btn-group shadow-0 radius" role="group" aria-label="Basic example">
                                            <button type="button" class="btn btn-outline-primary" data-mdb-color="dark">Left</button>
                                            <button type="button" class="btn btn-outline-primary" data-mdb-color="dark">Middle</button>
                                            <button type="button" class="btn btn-outline-primary" data-mdb-color="dark">Right</button>
                                        </div>
                                        <div class="btn-group shadow-0 radius mt-4" role="group" aria-label="Basic example">
                                            <button type="button" class="btn btn-outline-primary" data-mdb-color="dark">1</button>
                                            <button type="button" class="btn btn-outline-primary" data-mdb-color="dark">2</button>
                                            <button type="button" class="btn btn-outline-primary" data-mdb-color="dark">3</button>
                                            <button type="button" class="btn btn-outline-primary mr-5" data-mdb-color="dark">4</button>

                                            <button type="button" class="btn btn-outline-primary" data-mdb-color="dark">5</button>
                                            <button type="button" class="btn btn-outline-primary" data-mdb-color="dark">6</button>
                                            <button type="button" class="btn btn-outline-primary" data-mdb-color="dark">7</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 ">
                                <p className="picksize">Social buttons</p>
                                <div className=" d-flex">

                                    <div className="col-md-4 ">
                                        <button className="connectwith"><TwitterIcon sx={{ fontSize: '20px' }} />CONNECT WITH TWITTER</button>
                                    </div>
                                    <div className="col-md-1">
                                        <button className="infor"><TwitterIcon sx={{ fontSize: '20px' }} /></button>
                                    </div>
                                    <div className="col-md-1">
                                        <button className="infos"><TwitterIcon sx={{ fontSize: '20px' }} /></button>
                                    </div>
                                    <div className="col-md-1">
                                        <button className="infoss"><TwitterIcon sx={{ fontSize: '20px' }} /></button>
                                    </div>
                                    <div className="col-md-4 ">
                                        <button className="connectwithtwitter"><TwitterIcon sx={{ fontSize: '20px' }} />CONNECT WITH TWITTER</button>
                                    </div>
                                </div>

                                <div className=" d-flex">

                                    <div className="col-md-4 ">
                                        <button className="connectwiths"><FacebookIcon sx={{ fontSize: '20px' }} />SHARE.2.2K</button>
                                    </div>
                                    <div className="col-md-1">
                                        <button className="infors"><FacebookIcon sx={{ fontSize: '20px' }} /></button>
                                    </div>
                                    <div className="col-md-1">
                                        <button className="infoss"><FacebookIcon sx={{ fontSize: '20px' }} /></button>
                                    </div>
                                    <div className="col-md-1">
                                        <button className="infosss"><FacebookIcon sx={{ fontSize: '20px' }} /></button>
                                    </div>
                                    <div className="col-md-4 ">
                                        <button className="connectwithtwitters"><FacebookIcon sx={{ fontSize: '20px' }} />SHARE.2.2K</button>
                                    </div>
                                </div>

                                <div className=" d-flex">

                                    <div className="col-md-4 ">
                                        <button className="connectwithsr"><GoogleIcon sx={{ fontSize: '20px' }} />SHARE.2.2K</button>
                                    </div>
                                    <div className="col-md-1">
                                        <button className="inforsr"><GoogleIcon sx={{ fontSize: '20px' }} /></button>
                                    </div>
                                    <div className="col-md-1">
                                        <button className="infossr"><GoogleIcon sx={{ fontSize: '20px' }} /></button>
                                    </div>
                                    <div className="col-md-1">
                                        <button className="infosssr"><GoogleIcon sx={{ fontSize: '20px' }} /></button>
                                    </div>
                                    <div className="col-md-4 ">
                                        <button className="connectwithtwittersr"><GoogleIcon sx={{ fontSize: '20px' }} />SHARE.2.2K</button>
                                    </div>
                                </div>

                                <div className=" d-flex">

                                    <div className="col-md-4 ">
                                        <button className="connectwithsrr"><GoogleIcon sx={{ fontSize: '20px' }} />SHARE.2.2K</button>
                                    </div>
                                    <div className="col-md-1">
                                        <button className="inforsrr"><GoogleIcon sx={{ fontSize: '20px' }} /></button>
                                    </div>
                                    <div className="col-md-1">
                                        <button className="infossrr"><GoogleIcon sx={{ fontSize: '20px' }} /></button>
                                    </div>
                                    <div className="col-md-1">
                                        <button className="infosssrr"><GoogleIcon sx={{ fontSize: '20px' }} /></button>
                                    </div>
                                    <div className="col-md-4 ">
                                        <button className="connectwithtwittersrr"><GoogleIcon sx={{ fontSize: '20px' }} />SHARE.2.2K</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default ButtonSection;