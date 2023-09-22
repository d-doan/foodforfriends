import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { TextField, Box, Typography } from '@mui/material';
import CostRating from '../../configs/costRating';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

// restaurant represents a PlacesSearchResult object
function AddReviewButtons({ restaurant }: any) {
    const restaurantName = restaurant.name;
    const [username, setUsername] = useState('');
    const [rating, setRating] = useState<number | null>(null);
    const [cost, setCost] = useState<number | null>(null);
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const usernameChangeHandler = (e: SyntheticEvent) => {
        setUsername((e.target as HTMLInputElement).value);
    };
    const ratingChangeHandler = (e: React.ChangeEvent<{}>, newValue: number | null) => {
        setRating(newValue);
    };
    const costChangeHandler = (e: React.ChangeEvent<{}>, newValue: number | null) => {
        setCost(newValue);
    };
    const descriptionChangeHandler = (e: SyntheticEvent) => {
        setDescription((e.target as HTMLInputElement).value);
    };

    const validateForm = () => {
        if (rating === null || cost === null) {
            alert("Rating and cost cannot be empty")
            return false;
        }
        return true;
    };

    const SubmitHandler = async (e: SyntheticEvent) => {
        // prevents full page reload, handles success and failure below
        e.preventDefault();

        if (validateForm()) {
            const newReview = {
                restaurantName: restaurantName,
                username: username,
                rating: rating,
                cost: cost,
                description: description
            };

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    review: newReview,
                    restaurantData: restaurant
                })
            };

            fetch('review/', requestOptions)
                .then(response => {
                    if (!response.ok) {
                        alert("An error has occured, please try again");
                        throw new Error(`HTTP Error. Status: ${response.status}`);
                    }
                })
                .then(data => {
                    console.log('Success:', data);
                    navigate('/');
                })
                .catch((error) => {
                    alert("An error has occured, please try again");
                });

            // reset values to default
            setUsername('');
            setRating(null);
            setCost(null);
            setDescription('');
        }
    };

    return (
        <div>
            <Typography variant='h5'>
                {`Review for ${restaurantName}`}
            </Typography>

            <form onSubmit={SubmitHandler}>
                <Box display="flex" flexDirection="column">
                    <Box mt={2}>
                        <TextField
                            id="username"
                            label="Username"
                            variant="outlined"
                            value={username}
                            onChange={usernameChangeHandler}
                        />
                    </Box>

                    <Box mt={2}>
                        <FormControl>
                            <FormLabel>Rating</FormLabel>
                            <Rating
                                name="rating"
                                value={rating}
                                precision={0.5}
                                onChange={ratingChangeHandler}
                            />
                        </FormControl>
                    </Box>
                    <Box mt={2}>
                        <FormControl>
                            <FormLabel>Cost</FormLabel>
                            <CostRating
                                name="cost"
                                value={cost}
                                max={4}
                                onChange={costChangeHandler}
                                icon={<AttachMoneyIcon fontSize="inherit" />}
                                emptyIcon={<AttachMoneyIcon fontSize="inherit" />}
                            />
                        </FormControl>
                    </Box>

                    <Box mt={2}>
                        <TextField
                            fullWidth
                            multiline
                            id="description"
                            label="Description"
                            variant="outlined"
                            value={description}
                            onChange={descriptionChangeHandler}
                        />
                    </Box>

                    <Box mt={2}>
                        <Button variant="contained" color="primary" type="submit">
                            Submit
                        </Button>
                    </Box>
                </Box>
            </form >
        </div>
    );
}

export default AddReviewButtons;
