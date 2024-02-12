import EmailIcon from '@mui/icons-material/Email';
const UserProfile = () => {
    return (
        <>

            <div className="content py-4 profileScreen">

                <div className="row">
                    <div className="col-md-4">

                        <div className="card-user card mb-4">
                            <div className="image">
                                <img alt="broken" src="https://demos.creative-tim.com/paper-dashboard-pro-react/static/media/damir-bosnjak.efcaca50.jpg" /></div>
                            <div className="card-body">
                                <div className="author">
                                    <img alt="broken" className="avatar border-gray" src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" />
                                    <h5>Chet Faker</h5>

                                    <p className="description">
                                        @chetfaker
                                    </p>
                                </div>
                                <p className="description text-center">
                                    "I like the way you work it <br />No diggity <br />I wanna bag it up"
                                </p>
                            </div>
                            <div className="card-footer">
                                <div className="button-container">
                                    <div className="row">
                                        <div className="ml-auto col-6 col-md-6 col-lg-3">
                                            <h5>
                                                12 <br />
                                                <small>Files
                                                </small>
                                            </h5>
                                        </div>
                                        <div className="ml-auto mr-auto col-6 col-md-6 col-lg-4">
                                            <h5>2GB <br />
                                                <small>Used
                                                </small>
                                            </h5>
                                        </div>
                                        <div className="mr-auto col-lg-3"><h5>24,6$ <br />
                                            <small>Spent
                                            </small>
                                        </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="card ">
                            <div className="card-header"><h4 className="card-title">Team Members</h4></div>
                            <div className="card-body team-members">
                                <ul >
                                    <li>
                                        <div className="row">
                                            <div className="col-2 col-md-2">
                                                <div className="avatar">
                                                    <img alt="broken" src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" />
                                                </div>
                                            </div>
                                            <div className="col-7 col-md-7 subtext">
                                                DJ Khaled <br />
                                                <span className="text-muted">
                                                    <small>Offline</small>
                                                </span>
                                            </div>
                                            <div className="text-right col-3 col-md-3">
                                                <button className="btnprofile">
                                                    <EmailIcon />
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row">
                                            <div className="col-2 col-md-2">
                                                <div className="avatar">
                                                    <img alt="broken" src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" />
                                                </div>
                                            </div>
                                            <div className="col-7 col-md-7 subtext">Creative Tim <br />
                                                <span className="text-success">
                                                    <small>Available</small>
                                                </span>
                                            </div>
                                            <div className="text-right col-3 col-md-3">
                                                <button className="btnprofile">
                                                    <EmailIcon />
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row">
                                            <div className="col-2 col-md-2">
                                                <div className="avatar">
                                                    <img alt="broken" src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" />
                                                </div>
                                            </div>
                                            <div className="col-ms-7 col-7 subtext">Flume <br />
                                                <span className="text-danger"><small>Busy</small>
                                                </span>
                                            </div>
                                            <div className="text-right col-3 col-md-3">
                                                <button className="btnprofile">
                                                    <EmailIcon />
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="heading">Edit Profile</h5>
                            </div>
                            <div className="card-body">
                                <form className>
                                    <div className="row">
                                        <div className="pr-1 col-md-5">
                                            <div className="form-group">
                                                <label>Company (disabled)</label><input disabled placeholder="Company" type="text" className="form-control" defaultValue="Creative Code Inc." />
                                            </div>
                                        </div>
                                        <div className="px-1 col-md-3">
                                            <div className="form-group">
                                                <label>Username</label>
                                                <input placeholder="Username" type="text" className="form-control" defaultValue="michael23" />
                                            </div>
                                        </div>
                                        <div className="pl-1 col-md-4">
                                            <div className="form-group"><label htmlFor="exampleInputEmail1">Email address</label>
                                                <input placeholder="Email" type="email" className="form-control" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="pr-1 col-md-6">
                                            <div className="form-group">
                                                <label>First Name</label>
                                                <input placeholder="Company" type="text" className="form-control" defaultValue="Chet" />
                                            </div>
                                        </div>
                                        <div className="pl-1 col-md-6">
                                            <div className="form-group">
                                                <label>Last Name</label>
                                                <input placeholder="Last Name" type="text" className="form-control" defaultValue="Faker" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Address</label>
                                                <input placeholder="Home Address" type="text" className="form-control" defaultValue="Melbourne, Australia" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="pr-1 col-md-4">
                                            <div className="form-group">
                                                <label>City</label>
                                                <input placeholder="City" type="text" className="form-control" defaultValue="Melbourne" />
                                            </div>
                                        </div>
                                        <div className="px-1 col-md-4">
                                            <div className="form-group">
                                                <label>Country</label>
                                                <input placeholder="Country" type="text" className="form-control" defaultValue="Australia" />
                                            </div>
                                        </div>
                                        <div className="pl-1 col-md-4">
                                            <div className="form-group">
                                                <label>Postal Code</label>
                                                <input placeholder="ZIP Code" type="number" className="form-control" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>About Me</label><textarea cols={80} rows={4} className="textarea form-control" defaultValue={"Oh so, your weak rhyme You doubt I'll bother, reading into it"} />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile;