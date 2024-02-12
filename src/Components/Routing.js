import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeMainSection from './Pages/Dashboardpage/HomeMainSection';
import Sidebar from './MainComponents/Sidebar';
import Header from './MainComponents/Header';
import UserHeader from './MainComponents/UserHeader';
import Login from './Pages/Pages/Login';
import Register from './Pages/Pages/Register';
import LockScreen from './Pages/Pages/LockScreen';
import UserProfile from './Pages/Pages/UserProfile';
import ButtonSection from './Pages/Components/ButtonSection';
import GridSystemSection from './Pages/Components/GridSystemSection';
import Typography from './Pages/Components/Typography';
import RegularTable from './Pages/Tables/RegularTable';
import ExtendedTable from './Pages/Tables/ExtendedTable';
import ReactTable from './Pages/Tables/ReactTable';
import RegularForm from './Pages/Forms/RegularForm';
import ExtendedForm from './Pages/Forms/ExtendedForm';
import ValidationForm from './Pages/Forms/ValidationForm';
import WizardSection from './Pages/Forms/WizardSection';


const width = "260px"

const Routing = () => {

    const [open, setOpen] = React.useState(true);

    const handleOpenandCloseDrawer = () => {
        setOpen(!open);
    };

    const [pageName, setPageName] = useState(window.location.pathname);

    const handlePageChange = (name) => {
        setPageName(name);
    };
    // 👇 Get route data

    return (
        <>
            <Router>

                <div className='MainBackground'>
                    {pageName === '/register' || pageName === '/login' || pageName === '/lock' ?
                        < >

                            <UserHeader pageName={pageName} onPageChange={handlePageChange} />
                            <Switch>
                                <Route path="/login" component={Login}></Route>
                                <Route path="/register" component={Register}></Route>
                                <Route path="/lock" component={LockScreen}></Route>

                            </Switch>
                        </>
                        :
                        <div className='container-fluid'>
                            <div className='mainLayout'>
                                <div className='fisrtColumn'
                                    style={{ width: open ? width : '' }}>
                                    <Sidebar open={open} onPageChange={handlePageChange} pageName={pageName} />
                                </div>
                                <div className='secondColumn' style={{ width: open ? `calc(100% - ${width})` : '100%' }}>
                                    <Header handleFun={handleOpenandCloseDrawer} open={open} />
                                    <div className='pl-4'>
                                        <Switch>
                                            <Route exact path="/" component={HomeMainSection}></Route>
                                            {/* Pages */}
                                            <Route path="/userprofile" component={UserProfile}></Route>
                                            {/* components */}
                                            <Route path="/buttons" component={ButtonSection}></Route>
                                            <Route path="/gridsystem" component={GridSystemSection}></Route>
                                            <Route path="/typography" component={Typography}></Route>

                                            {/* Forms */}
                                            <Route path="/regularform" component={RegularForm}></Route>
                                            <Route path="/extendedform" component={ExtendedForm}></Route>
                                            <Route path="/validationform" component={ValidationForm}></Route>
                                            <Route path="/wizard" component={WizardSection}></Route>

                                            {/* Tables */}
                                            <Route path="/regulartable" component={RegularTable}></Route>
                                            <Route path="/extendedtable" component={ExtendedTable}></Route>
                                            <Route path="/reacttable" component={ReactTable}></Route>
                                         
                                        </Switch>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </Router>
        </>
    )
}

export default Routing