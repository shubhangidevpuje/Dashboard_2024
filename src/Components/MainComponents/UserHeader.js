import { Link } from "react-router-dom";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import PanToolAltOutlinedIcon from '@mui/icons-material/PanToolAltOutlined';
import TagFacesOutlinedIcon from '@mui/icons-material/TagFacesOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';

const UserHeader = ({onPageChange}) => {
    const handlePageClick = () => {
        onPageChange();
    };
    return (
        <>
            <nav className="HeaderUser">

                <div className="container containerheader">
                    <div className="navbar-wrapper">
                        <Link to="/" onClick={() => handlePageClick()}>

                            Paper Dashboard PRO React
                        </Link>
                    </div>

                    <div className="mainleft">
                        <ul>
                            <li>
                                <Link to="/">
                                    <DashboardOutlinedIcon />Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link to="/register">
                                    <BookOutlinedIcon />Register</Link></li>
                            <li>
                                <Link to="/login">
                                    <PanToolAltOutlinedIcon />Login
                                </Link>
                            </li>
                            <li>
                                <Link to="/userprofile" onClick={() => handlePageClick()}>
                                    <TagFacesOutlinedIcon />User</Link></li>
                            <li>
                                <Link to="/lock">
                                    <VpnKeyOutlinedIcon />Lock</Link></li>
                        </ul>
                    </div>
                </div>

            </nav>
        </>
    )
}
export default UserHeader;