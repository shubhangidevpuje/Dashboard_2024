
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import Login from '../Pages/Pages/Login';
import HomeMainSection from '../Pages/Dashboardpage/HomeMainSection';
import Timeline from '../Pages/Pages/Timeline';
import Register from '../Pages/Pages/Register';
import LockScreen from '../Pages/Pages/LockScreen';
import UserProfile from '../Pages/Pages/UserProfile';
import ButtonSection from '../Pages/Components/ButtonSection';
import GridSystemSection from '../Pages/Components/GridSystemSection';
import Typography from '../Pages/Components/Typography';
import RegularTable from '../Pages/Tables/RegularTable';
import ExtendedTable from '../Pages/Tables/ExtendedTable';
import ReactTable from '../Pages/Tables/ReactTable';
import RegularForm from '../Pages/Forms/RegularForm';
import ExtendedForm from '../Pages/Forms/ExtendedForm';
import ValidationForm from '../Pages/Forms/ValidationForm';
import WizardSection from '../Pages/Forms/WizardSection';


const routes =
    [
        {
            id: 1,
            div: 'div1',
            name: "Dashboard",
            icon: <AccountBalanceOutlinedIcon />,
            route: "/",
            component: <HomeMainSection />

        },
        {
            id: 2,
            div: 'div2',
            name: "Pages",
            icon: <CollectionsBookmarkOutlinedIcon />,
            dropdown: true,
            route: false,
            collapse: [
                {
                    name: "Timeline",
                    route: "/timeline",
                    component: <Timeline />
                },
                {
                    name: "Login",
                    route: "/login",
                    component: <Login />
                },
                {
                    name: "Register",
                    route: "/register",
                    component: <Register />
                },
                {
                    name: "LockScreen",
                    route: "/lock",
                    component: <LockScreen />
                },
                {
                    name: "UserProfile",
                    route: "/userprofile",
                    component: <UserProfile />
                }
            ]
        },
        {
            id: 3,
            div: "div3",
            name: "Components",
            icon: <DashboardOutlinedIcon />,
            dropdown: true,
            route: false,
            collapse: [
                {
                    name: "Buttons",
                    route: "/buttons",
                    component: <ButtonSection />
                },
                {
                    name: "Grid System",
                    route: "/gridsystem",
                    component: <GridSystemSection />
                },
                {
                    name: "Panels",
                    route: "/table",
                    component: <HomeMainSection />
                },
                {
                    name: "Sweet Alert",
                    route: "/table",
                    component: <HomeMainSection />
                },
                {
                    name: "Notification",
                    route: "/table",
                    component: <HomeMainSection />
                },
                {
                    name: "Typography",
                    route: "/typography",
                    component: <Typography />
                },
            ]

        },
        {
            id: 4,
            div: "div4",
            name: "Forms",
            icon: <DesignServicesOutlinedIcon />,
            dropdown: true,
            route: false,
            collapse: [
                {
                    name: "Regular Forms",
                    route: "/regularform",
                    component: <RegularForm />
                },
                {
                    name: "Extended Forms",
                    route: "/extendedform",
                    component: <ExtendedForm />
                },
                {
                    name: "Validation Forms",
                    route: "/validationform",
                    component: <ValidationForm />
                },
                {
                    name: "Wizard",
                    route: "/wizard",
                    component: <WizardSection />
                },
            ]
        },
        {
            id: 5,
            div: "div5",
            name: "tables",
            icon: <ArticleOutlinedIcon />,
            dropdown: true,
            route: false,
            collapse: [
                {
                    name: "Regular Tables",
                    route: "/regulartable",
                    component: <RegularTable />
                },
                {
                    name: "Extended Tables",
                    route: "/extendedtable",
                    component: <ExtendedTable />
                },
                {
                    name: "React Tables",
                    route: "/reacttable",
                    component: <ReactTable />
                }
            ]
        },
        {
            id: 6,
            div: "div7",
            name: "Widgets",
            icon: <Inventory2OutlinedIcon />,
        },
        {
            id: 7,
            div: "div8",
            name: "charts",
            icon: <LeaderboardOutlinedIcon />,
        },
        {
            id: 8,
            div: "div9",
            name: "calender",
            icon: <CalendarTodayOutlinedIcon />,
        }
    ]

export default routes