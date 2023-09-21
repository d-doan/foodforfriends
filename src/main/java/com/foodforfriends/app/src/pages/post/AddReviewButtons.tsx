import { SyntheticEvent, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// restaurant represents a PlacesSearchResult object
function AddReviewButtons({ restaurant }: any) {
    const restaurantName = restaurant.name;
    const [username, setUsername] = useState('');
    const [rating, setRating] = useState('');
    const [cost, setCost] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();


    const usernameChangeHandler = (e: SyntheticEvent) => {
        setUsername((e.target as HTMLInputElement).value);
    };
    const ratingChangeHandler = (e: SyntheticEvent) => {
        setRating((e.target as HTMLInputElement).value);
    };
    const costChangeHandler = (e: SyntheticEvent) => {
        setCost((e.target as HTMLInputElement).value);
    };
    const descriptionChangeHandler = (e: SyntheticEvent) => {
        setDescription((e.target as HTMLInputElement).value);
    };

    const SubmitHandler = async (e: SyntheticEvent) => {

        // prevents full page reload, handles success and failure below
        e.preventDefault();

        console.log("submitted");

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
        setRating('');
        setCost('');
        setDescription('');
    };

    return (
        <div>
            <h4>Review for {restaurantName}</h4>
            <Form onSubmit={SubmitHandler}>

                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={usernameChangeHandler}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="rating">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control
                        as="select"
                        required
                        value={rating}
                        onChange={ratingChangeHandler}>
                        <option value="" disabled></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="cost">
                    <Form.Label>Cost</Form.Label>
                    <Form.Control
                        as="select"
                        required
                        value={cost}
                        onChange={costChangeHandler}>
                        <option value="" disabled></option>
                        <option value="1">$</option>
                        <option value="2">$$</option>
                        <option value="3">$$$</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={descriptionChangeHandler}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit Review
                </Button>
            </Form>
        </div>
    );
}

export default AddReviewButtons;
