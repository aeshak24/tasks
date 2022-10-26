import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >;

    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<string>("0");
    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts left: {attemptsLeft}</p>
            <Form.Group controlId="formAttempts" as={Row}>
                <Form.Label column sm={1}>
                    Increase Attempts
                </Form.Label>
                <Col>
                    <Form.Control
                        type="number"
                        value={attemptsRequested}
                        onChange={(event: ChangeEvent) =>
                            setAttemptsRequested(event.target.value)
                        }
                    ></Form.Control>
                </Col>
            </Form.Group>
            <div>
                <Button
                    onClick={() => setAttemptsLeft(attemptsLeft - 1)}
                    disabled={attemptsLeft <= 0 ? true : false}
                >
                    Use
                </Button>
                <Button
                    onClick={() =>
                        setAttemptsLeft(
                            parseInt(attemptsRequested) + attemptsLeft ||
                                attemptsLeft
                        )
                    }
                    disabled={false}
                >
                    Gain
                </Button>
            </div>
        </div>
    );
}
