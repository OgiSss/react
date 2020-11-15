import React, { useState } from 'react';
import { Button, Form, Toast } from 'react-bootstrap';
import * as fromActions from '../../store/actions/index';
import { connect } from "react-redux";
import { updateObject, checkValidity } from '../../shared/utility';

const Auth = (props) => {
    const [authForm, setAuthForm] = useState({
        email: {
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false
        },
        password: {
            value: '',
            validation: {
                required: true,
                minLength: 6
            },
            valid: false,
            touched: false
        }
    });

    const [isValid, setIsValid] = useState(false);

    const submitHandler = event => {
        event.preventDefault();
        if (authForm.email.valid && authForm.password.valid) {
            props.onAuth(authForm.email.value, authForm.password.value);
        } else {
            setIsValid(!isValid);
        }
    };

    const inputChangedHandler = (event, type) => {
        const updatedAuthState = {
            ...authForm,
            [type]: updateObject(
                authForm[type],
                {
                    value: event.target.value,
                    valid: checkValidity(
                        event.target.value,
                        authForm[type].validation
                    ),
                    touched: true
                }
            )
        }
        setAuthForm(updatedAuthState)
    }

    const toggleIsValid = () => setIsValid(!isValid);

    return (
        <React.Fragment>
            <Toast show={isValid} onClose={toggleIsValid} animation={false}>
                <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded mr-2"
                        alt=""
                    />
                    <strong className="mr-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
            </Toast>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="formBasicEmail" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(event) => inputChangedHandler(event, 'email')} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                 </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(event) => inputChangedHandler(event, 'password')} />
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Log In
            </Button>
            </Form>
        </React.Fragment>
    );
};
const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(fromActions.auth(email, password))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth);
