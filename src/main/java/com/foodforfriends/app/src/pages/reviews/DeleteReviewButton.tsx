import { SyntheticEvent, useState, useEffect } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

function DeleteReviewButton() {
    const [reviewId, setReviewId] = useState('');

    const reviewChangeHandler = (e: SyntheticEvent) => {
        setReviewId((e.target as HTMLInputElement).value);
    };

    const submitHandler = (e: SyntheticEvent) => {

        // TODO actually delete the review

        setReviewId('');

        return alert("Review " + reviewId + " has been deleted");
    }
    return (
        <div>
            <Form onSubmit={submitHandler}>
                <Form.Group as={Row} className="mb-3" controlId="id">
                    <Form.Label column sm={1}>Review ID</Form.Label>
                    <Col sm={5}>
                        <Form.Control
                            type="text"
                            placeholder="Review ID"
                            value={reviewId}
                            onChange={reviewChangeHandler}
                            required
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Col sm="auto">
                        <Button type="submit">Delete Review</Button>
                    </Col>
                </Form.Group>
            </Form>

        </div>
    )
}

export default DeleteReviewButton;
