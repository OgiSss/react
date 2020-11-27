import React from 'react';
import * as fromActions from '../../../store/actions/index';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const SignUp = (props) => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        props.onAuth(data.email, data.password);
    };
    return (
        <React.Fragment>
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper full-page-wrapper">
                    <div className="content-wrapper d-flex align-items-center auth px-0">
                        <div className="row w-100 mx-0">
                            <div className="col-lg-4 mx-auto">
                                <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                                    <div className="brand-logo">
                                        <img src="../../images/logo.png" alt="logo" />
                                    </div>
                                    <h4>Hello! let's get started</h4>
                                    <h6 className="font-weight-light">Create account.</h6>
                                    <form className="pt-3" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-group">
                                            <input type="email" name="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email"
                                                ref={register({
                                                    required: true,
                                                    pattern: {
                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                        message: "Invalid email address"
                                                    }
                                                })} />
                                            {errors.email && <span className="text-danger mt-2 d-block">This field is required</span>}
                                            {errors.email && errors.email.message ? <span className="text-danger mt-1 d-block">{errors.email.message}</span> : ''}
                                        </div>
                                        <div className="form-group">
                                            <input type="password" name="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" ref={register({ required: true })} />
                                            {errors.password && <span className="text-danger mt-1">This field is required</span>}
                                        </div>
                                        <div className="form-group">
                                            <input type="password" name="confirmPassword" className="form-control form-control-lg" id="exampleInputPassword2" placeholder="Confirm password" ref={register({ required: true })} />
                                            {errors.confirmPassword && <span className="text-danger mt-1"> This field is required</span>}
                                        </div>
                                        <div className="mt-3">
                                            <button type="submit" className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" >SIGN UP</button>
                                        </div>
                                        <div className="text-center mt-4 font-weight-light">
                                            Already have an account? <Link className="text-primary" to="/auth" >SIGN IN</Link>
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
        onAuth: (email, password) => dispatch(fromActions.signup(email, password))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);
