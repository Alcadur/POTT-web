import { useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setUser } from 'pott/store/loginSlice';
import styles from './login.module.css';


export default function Login() {
    const dispatch = useDispatch()

    const login = useRef();
    const password = useRef();

    async function submit(event) {
        event.preventDefault();

        const loginResponse = await fetch('/api/login', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',

            body: JSON.stringify({ login: login.current.value, password:  password.current.value })
        });

        const jsonLoginResponse = await loginResponse.json()
        dispatch(setUser(jsonLoginResponse.user));
    }

    return (
        <div className={styles.loginWrapper}>
            <Form onSubmit={submit}>
                <fieldset>
                    <Form.Group>
                        <Form.Label>Login</Form.Label>
                        <Form.Control
                            type="email"
                            ref={login}
                            data-testid="login-form-login"
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            ref={password}
                            data-testid="login-form-password"
                        ></Form.Control>
                    </Form.Group>

                    <Button
                        variant="primary"
                        type="submit"
                        data-testid="login-submit-button"
                    >
                        Submit
                    </Button>
                </fieldset>
            </Form>
        </div>
    );
}