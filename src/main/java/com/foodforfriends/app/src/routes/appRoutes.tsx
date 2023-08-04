import { RouteType } from "./config";
import HomePage from "../pages/home/HomePage";
import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import DefaultPage from "../pages/dashboard/DefaultPage";
import DashboardIndex from "../pages/dashboard/DashboardIndex";
import ChangelogPage from "../pages/changelog/ChangelogPage";
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import DefaultPage2 from "../pages/dashboard/DefaultPage2";
import ReviewPage from "../pages/reviews/ReviewPage";
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';

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
    // Changelog Page
    {
        path: "/changelog",
                element: <ChangelogPage />,
                state: "changelog",
                sidebarProps: {
                    displayText: "Changelog",
                    icon: <FormatListBulletedOutlinedIcon />
                }
    }
];

export default appRoutes;