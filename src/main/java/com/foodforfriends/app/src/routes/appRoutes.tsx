import { RouteType } from "./config";
import HomePage from "../pages/home/HomePage";
import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import DefaultPage from "../pages/dashboard/DefaultPage";
import DashboardIndex from "../pages/dashboard/DashboardIndex";
import MapPage from "../pages/changelog/MapPage";
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import DefaultPage2 from "../pages/dashboard/DefaultPage2";
import ReviewPage from "../pages/reviews/ReviewPage";
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import FriendPage from "../pages/friends/FriendPage";
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PostPage from "../pages/post/PostPage";
import { DriveFileRenameOutline } from "@mui/icons-material";

/**
 * Create paths for each page. These will show up in the sidebar.
 */

const appRoutes: RouteType[] = [
    {
        index: true,
        element: <HomePage />,
        state: "home"
    },
    // Dashboard Page
    {
        path: "/dashboard",
        element: <DashboardPageLayout />,
        state: "dashboard",
        sidebarProps: {
            displayText: "Dashboard",
            icon: <DashboardOutlinedIcon />
        },
        child: [
            {
                index: true,
                element: <DashboardIndex />,
                state: "dashboard.index",
            },
            {
                path: "/dashboard/default",
                element: <DefaultPage />,
                state: "dashboard.default",
                sidebarProps: {
                    displayText: "Default"
                }
            },
            {
                path: "/dashboard/default2",
                element: <DefaultPage2 />,
                state: "dashboard.default2",
                sidebarProps: {
                    displayText: "Default2"
                }
            }
        ]
    },
    // Friend Page
    {
        path: "/friends",
        element: <FriendPage />,
        state: "friends",
        sidebarProps: {
            displayText: "Friends",
            icon: <GroupOutlinedIcon />
        }
    },
    // Review Page
    {
        path: "/reviews",
        element: <ReviewPage />,
        state: "reviews",
        sidebarProps: {
            displayText: "Reviews",
            icon: <RateReviewOutlinedIcon />
        }
    },
    // Map Page
    {
        path: "/map",
        element: <MapPage />,
        state: "map",
        sidebarProps: {
            displayText: "Map",
            icon: <FormatListBulletedOutlinedIcon />
        }
    },
    // Post Page
    {
        path: "/post",
        element: <PostPage />,
        state: "post",
        sidebarProps: {
            displayText: "Post",
            icon: <DriveFileRenameOutline />
        }
    }
];

export default appRoutes;
