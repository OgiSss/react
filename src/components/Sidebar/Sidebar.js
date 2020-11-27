
import React from "react";
import { Nav } from "react-bootstrap";
import './Sidebar.scss'
import { Link } from 'react-router-dom';

const Sidebar = props => {

    return (
        <Nav className="sidebar sidebar-offcanvas" id="sidebar">

            <ul className="nav w-100">
                <li className="nav-item">
                    <span className="nav-link" >
                        <i className="mdi mdi-home menu-icon"></i>
                        <Link className="menu-title" to="/dashboard" >Dashboard</Link>
                    </span>
                </li>
                <li className="nav-item">
                    <span className="nav-link" >
                        <i className="mdi mdi-view-headline menu-icon"></i>
                        <Link className="menu-title" to="/profile" >Profile</Link>
                    </span>
                </li>

            </ul>
        </Nav>

    );
};
export default Sidebar
