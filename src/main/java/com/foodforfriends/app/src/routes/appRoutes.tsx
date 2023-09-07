import { RouteType } from "./config";
import HomePage from "../pages/home/HomePage";
import ReviewPage from "../pages/reviews/ReviewPage";
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import FriendPage from "../pages/friends/FriendPage";
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PostPage from "../pages/post/PostPage";
import { DriveFileRenameOutline } from "@mui/icons-material";
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';

/**
 * Create paths for each page. These will show up in the sidebar.
 */

const appRoutes: RouteType[] = [
    // Feed
    {
        index: true,
        element: <HomePage />,
        state: "home",
    },
    {
        path: "/",
        element: <HomePage />,
        state: "home",
        sidebarProps: {
            displayText: "Feed",
            icon: <FeedOutlinedIcon />
        },
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
