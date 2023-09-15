import { SyntheticEvent, useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

// restaurant represents a PlacesSearchResult
function AddReviewButtons({ restaurant }: any) {
    const restaurantName = restaurant.name;
    const [username, setUsername] = useState('');
    const [rating, setRating] = useState('');
    const [cost, setCost] = useState('');
    const [description, setDescription] = useState('');


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
        // create review and add to repo's
        // useEffect(() => {

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
            .then(response => response.json())
            .then(data => { });

        // reset values to default
        setUsername('');
        setRating('');
        setCost('');
        setDescription('');

        return alert("Restaurant: " + restaurantName
            + "\nUsername: " + username
            + "\nRating: " + rating
            + "\nCost: " + cost
            + "\nDescription: " + description);
    };

    return (
        <div>
            <h4>Review for {restaurantName}</h4>
            <Form onSubmit={SubmitHandler}>
                <Form.Group as={Row} className="mb-3" controlId="username">
                    <Form.Label column sm={1}>Username</Form.Label>
                    <Col sm={5}>
                        <Form.Control
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={usernameChangeHandler}
                        //required
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="rating">
                    <Form.Label column sm={1}>Rating</Form.Label>
                    <Col sm={1}>
                        <Form.Control
                            type="text"
                            placeholder="Rating"
                            value={rating}
                            onChange={ratingChangeHandler}
                        //required
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="cost">
                    <Form.Label column sm={1}>Cost</Form.Label>
                    <Col sm={1}>
                        <Form.Control
                            type="text"
                            placeholder="Cost"
                            value={cost}
                            onChange={costChangeHandler}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="description">
                    <Form.Label column sm={1}>Description</Form.Label>
                    <Col sm={5}>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Description"
                            value={description}
                            onChange={descriptionChangeHandler}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm="auto">
                        <Button type="submit">Submit Review</Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
}

export default AddReviewButtons;
