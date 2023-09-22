import { ReviewListProps, ReviewProps } from '../../components/common/CustomTypes';
import { List, ListItem, ListItemText, Typography, Box, ListItemIcon } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Review = ({ review }: ReviewProps) => {
    return (
        <div
            className='list-group-item'
            key={review['id']}>
            On {review['dateReadable']}, {review['username']} said:
            <br />
            {review['description']}
            <br />
            Rating: {review['rating']}/5
            Cost: {review['cost']}/5
            <br />
            Id: {review['id']}
        </div>
    );
}

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
                        <div>
                            <ListItemIcon >
                                <AccountCircleIcon fontSize='large' />
                            </ListItemIcon>
                        </div>

                        <ListItemText
                            primary={
                                <>
                                    <Typography variant="h6">
                                        {`${review.username} - ${review.restaurantName}`}
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {`Rating: ${review.rating}/5 Cost: ${review.cost}`}
                                    </Typography>
                                    <Typography variant="subtitle2">
                                        {`${review.dateReadable}`}
                                    </Typography>
                                </>
                            }
                            secondary={
                                <Typography variant="body1">
                                    {review.description}
                                </Typography>
                            }
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default FeedTable;
