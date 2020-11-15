import React, { useState } from 'react';
import * as fromActions from '../../store/actions/index';
import { connect } from "react-redux";
import { updateObject, checkValidity } from '../../shared/utility';
import { Link } from 'react-router-dom';

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

    const [isValid, setIsValid] = useState(true);

    const submitHandler = event => {
        event.preventDefault();
        if (authForm.email.valid && authForm.password.valid) {
            props.onAuth(authForm.email.value, authForm.password.value);
        } else {
            setIsValid(!isValid);
        }
    };

    const inputChangedHandler = (event, type) => {
        setIsValid(true);
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

    return (
        <React.Fragment>
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper full-page-wrapper">
                    <div className="content-wrapper d-flex align-items-center auth px-0">
                        <div className="row w-100 mx-0">
                            <div className="col-lg-4 mx-auto">
                                <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                                    <div className="brand-logo">
                                        <img src="../../images/logo.svg" alt="logo" />
                                    </div>
                                    <h4>Hello! let's get started</h4>
                                    <h6 className="font-weight-light">Sign in to continue.</h6>
                                    <form className="pt-3" onSubmit={submitHandler}>
                                        <div className="form-group">
                                            <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email" onChange={(event) => inputChangedHandler(event, 'email')} />
                                            {(authForm.email.validation.required && !isValid) && <span className="text-danger mt-2 d-block">This field is required</span>}
                                            {(authForm.email.validation.isEmail && !isValid) && <span className="text-danger mt-2 d-block">This field isn't email</span>}
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" onChange={(event) => inputChangedHandler(event, 'password')} />
                                            {(authForm.password.validation.required && !isValid) && <span className="text-danger mt-2 d-block">This field is required</span>}
                                            {(authForm.password.validation.minLength && !isValid) && <span className="text-danger mt-2 d-block">Min length 6</span>}
                                        </div>
                                        <div className="mt-3">
                                            <button type="submit" className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" >SIGN IN</button>
                                        </div>
                                        <div className="my-2 d-flex justify-content-between align-items-center">
                                            <div className="form-check">
                                                <label className="form-check-label text-muted">
                                                    <input type="checkbox" className="form-check-input" />
                                                                    Keep me signed in
                                                <i className="input-helper"></i>
                                                </label>
                                            </div>
                                            <a className="auth-link text-black">Forgot password?</a>
                                        </div>
                                        {/* <div className="mb-2">
                                            <button type="button" className="btn btn-block btn-facebook auth-form-btn">
                                                <i className="mdi mdi-facebook mr-2"></i>Connect using facebook</button>
                                        </div> */}
                                        <div className="text-center mt-4 font-weight-light">
                                            Don't have an account? <Link className="text-primary" to="/signup" >CREATE</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
