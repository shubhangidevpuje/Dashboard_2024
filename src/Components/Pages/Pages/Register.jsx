import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import "./pages.css";

const Register = () => {
    return (
        <>

            <div className="wrapper wrapper-full-page ps">
                <div className="full-page section-image">
                    <div className="register-page">
                        <div className="container authentication">
                            <div className="row">
                                <div className="ml-auto mr-auto col-md-6 col-lg-4">
                                    <form action method className="form">
                                        <div className="card-Register card">
                                            <div className="card-header">
                                                <div className="card-header">
                                                    <h3 className="header text-center">Register</h3>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                            <PersonOutlineOutlinedIcon />
                                                        </span>
                                                    </div>
                                                    <input placeholder="First Name..." type="text" className="form-control" />
                                                </div>

                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                            <EmailOutlinedIcon />
                                                        </span>
                                                    </div>
                                                    <input placeholder="Email..." type="text" className="form-control" />
                                                </div>

                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                            <VpnKeyOutlinedIcon />
                                                        </span>
                                                    </div>
                                                    <input placeholder="Password" autoComplete="off" type="password" className="form-control" /></div><br />
                                                <div className="form-group">
                                                    <div className="form-check">
                                                        <label className="form-check-label">
                                                            <input type="checkbox" className="form-check-input" defaultValue defaultChecked />
                                                            <span className="form-check-sign" />Subscribe to newsletter
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer mb-4">
                                                <a href="#pablo" className="btnLogin">Get Started</a></div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="full-page-background"
                            style={{ backgroundImage: 'url("https://demos.creative-tim.com/paper-dashboard-pro-react/static/media/fabio-mangione.488bc249.jpg")' }} />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;