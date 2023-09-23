import { RouteType } from "./config";
import FeedPage from "../pages/feed/FeedPage";
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import FriendPage from "../pages/friends/FriendPage";
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PostPage from "../pages/post/PostPage";
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';

/**
 * Create paths for each page. These will show up in the sidebar.
 */

const appRoutes: RouteType[] = [
    // Feed
    {
        index: true,
        element: <FeedPage />,
        state: "feed",
    },
    {
        path: "/",
        element: <FeedPage />,
        state: "feed",
        sidebarProps: {
            displayText: "Feed",
            icon: <FeedOutlinedIcon />
        },
    },
    // Post Page
    {
        path: "/post",
        element: <PostPage />,
        state: "post",
        sidebarProps: {
            displayText: "Post",
            icon: <RateReviewOutlinedIcon />
        }
    }
];

export default appRoutes;
