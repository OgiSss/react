import React, { useState, useEffect, } from 'react';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(true)
    const [isOpenMessage, setIsOpenMessage] = useState(false)
    useEffect(() => {
        document.body.classList.toggle('sidebar-icon-only');
    }, [isOpen]);

    return (
        <Nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="navbar-brand-wrapper d-flex justify-content-center">
                <div className="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">
                    <a className="navbar-brand brand-logo" ><img src="images/logo.svg" alt="logo" /></a>
                    <a className="navbar-brand brand-logo-mini" ><img src="images/logo-mini.svg" alt="logo" /></a>
                    <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize" onClick={() => setIsOpen(!isOpen)}>
                        <span className="mdi mdi-sort-variant"></span>
                    </button>
                </div>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                <ul className="navbar-nav mr-lg-4 w-100">
                    <li className="nav-item nav-search d-none d-lg-block w-100">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="search">
                                    <i className="mdi mdi-magnify"></i>
                                </span>
                            </div>
                            <input type="text" className="form-control" placeholder="Search now" aria-label="search" aria-describedby="search" />
                        </div>
                    </li>
                </ul>
                <ul className="navbar-nav navbar-nav-right">
                    <li className={isOpenMessage ? "nav-item dropdown mr-1 show" : "nav-item dropdown mr-1 "} onClick={() => setIsOpenMessage(!isOpenMessage)}>
                        <a className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center" id="messageDropdown" data-toggle="dropdown">
                            <i className="mdi mdi-message-text mx-0"></i>
                            <span className="count"></span>
                        </a>
                        <div className={isOpenMessage ? "dropdown-menu dropdown-menu-right navbar-dropdown show" : "dropdown-menu dropdown-menu-right navbar-dropdown"} aria-labelledby="messageDropdown">
                            <p className="mb-0 font-weight-normal float-left dropdown-header">Messages</p>
                            <a className="dropdown-item">
                                <div className="item-thumbnail">
                                    <img src="/images/faces/face4.jpg" alt="image" className="profile-pic" />
                                </div>
                                <div className="item-content flex-grow">
                                    <h6 className="ellipsis font-weight-normal">David Grey</h6>
                                    <p className="font-weight-light small-text text-muted mb-0">
                                        The meeting is cancelled</p>
                                </div>
                            </a>
                            <a className="dropdown-item">
                                <div className="item-thumbnail">
                                    <img src="images/faces/face2.jpg" alt="image" className="profile-pic" />
                                </div>
                                <div className="item-content flex-grow">
                                    <h6 className="ellipsis font-weight-normal">Tim Cook</h6>
                                    <p className="font-weight-light small-text text-muted mb-0">
                                        New product launch</p>
                                </div>
                            </a>
                            <a className="dropdown-item">
                                <div className="item-thumbnail">
                                    <img src="images/faces/face3.jpg" alt="image" className="profile-pic" />
                                </div>
                                <div className="item-content flex-grow">
                                    <h6 className="ellipsis font-weight-normal"> Johnson</h6>
                                    <p className="font-weight-light small-text text-muted mb-0">
                                        Upcoming board meeting</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li className="nav-item dropdown mr-4">
                        <a className="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center notification-dropdown" id="notificationDropdown" data-toggle="dropdown">
                            <i className="mdi mdi-bell mx-0"></i>
                            <span className="count"></span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="notificationDropdown">
                            <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
                            <a className="dropdown-item">
                                <div className="item-thumbnail">
                                    <div className="item-icon bg-success">
                                        <i className="mdi mdi-information mx-0"></i>
                                    </div>
                                </div>
                                <div className="item-content">
                                    <h6 className="font-weight-normal">Application Error</h6>
                                    <p className="font-weight-light small-text mb-0 text-muted">
                                        Just now</p>
                                </div>
                            </a>
                            <a className="dropdown-item">
                                <div className="item-thumbnail">
                                    <div className="item-icon bg-warning">
                                        <i className="mdi mdi-settings mx-0"></i>
                                    </div>
                                </div>
                                <div className="item-content">
                                    <h6 className="font-weight-normal">Settings</h6>
                                    <p className="font-weight-light small-text mb-0 text-muted">
                                        Private message</p>
                                </div>
                            </a>
                            <a className="dropdown-item">
                                <div className="item-thumbnail">
                                    <div className="item-icon bg-info">
                                        <i className="mdi mdi-account-box mx-0"></i>
                                    </div>
                                </div>
                                <div className="item-content">
                                    <h6 className="font-weight-normal">New user registration</h6>
                                    <p className="font-weight-light small-text mb-0 text-muted">2 days ago</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li className="nav-item ">
                        {/* <a className="nav-link dropdown-toggle" data-toggle="dropdown" id="profileDropdown">
                        
                        <span className="nav-profile-name">Louis Barnett</span>
                    </a> */}
                        <NavDropdown className=" nav-profile" title="Oskar" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/logout" >
                                <i className="mdi mdi-logout text-primary"></i>
                            Log out
                            </NavDropdown.Item>
                        </NavDropdown>
                    </li>

                </ul>
                <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                    <span className="mdi mdi-menu"></span>
                </button>
            </div>
        </Nav>
    )
}

export default Navbar;