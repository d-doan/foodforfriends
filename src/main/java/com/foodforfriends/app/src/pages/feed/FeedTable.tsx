import { ReviewListProps, ReviewProps } from '../../components/common/CustomTypes';
import { List, ListItem, ListItemText, Typography, Box, ListItemIcon, Rating } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CostRating from '../../configs/costRating';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


const FeedTable = ({ reviews }: ReviewListProps) => {

    return (
        <Box display="flex">
            <List disablePadding={true}>
                <ListItem divider={true}>
                    <ListItemText primary={
                        <Typography variant='h5'>
                            {"Recent Reviews"}
                        </Typography>}
                    />
                </ListItem>
                {reviews.map((review) => (
                    <ListItem key={review.id} divider={true}>
                        <Box alignItems="center" >
                            <ListItemIcon>
                                <AccountCircleIcon fontSize="large" />
                            </ListItemIcon>
                            <Typography variant="caption" display="block">
                                {`${review.username}`}
                            </Typography>
                        </Box>
                        <ListItemText
                            primary={
                                <>
                                    <Typography variant="h6">
                                        {`${review.restaurantName}`}
                                    </Typography>
                                    <Box mt={1}>
                                        <Rating
                                            name="rating"
                                            value={review.rating}
                                            readOnly
                                            precision={0.5}
                                        />
                                    </Box>
                                    <Box mt={1}>
                                        <CostRating
                                            name="cost"
                                            value={review.cost}
                                            max={4}
                                            readOnly
                                            icon={<AttachMoneyIcon fontSize="inherit" />}
                                            emptyIcon={<AttachMoneyIcon fontSize="inherit" />}
                                        />
                                    </Box>
                                    <Typography variant="subtitle2">
                                        {`${review.dateReadable}`}
                                    </Typography>
                                    <Box mt={1}>
                                        <Typography variant="body1">
                                            {review.description}
                                        </Typography>
                                    </Box>
                                </>
                            }
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default FeedTable;
