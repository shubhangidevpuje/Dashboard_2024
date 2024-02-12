import "./pages.css"
const LockScreen = () => {
    return (
        <>


            <div className="wrapper wrapper-full-page ps">

                <div className="full-page section-image">

                    <div className="lock-page">
                        <div className="container authentication">
                            <div className="ml-auto mr-auto col-md-6 col-lg-4">
                                <div className="card-lock text-center card">
                                    <div className="card-header">
                                        <img alt="broken" src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" />
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title header">Joe Gardner</h4>
                                        <div className="form-group">
                                            <input placeholder="Enter Password.." autoComplete="off" type="password" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="card-footer border-0 py-4">
                                        <a href="#pablo" className="btnLock">Unlock</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="full-page-background" style={{ backgroundImage: 'url("https://demos.creative-tim.com/paper-dashboard-pro-react/static/media/bruno-abatti.ac5426e5.jpg")' }} /></div>
                </div>
            </div>
        </>
    )
}

export default LockScreen;