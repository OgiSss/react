import React from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import './Sidebar.scss'

const Sidebar = props => {

    return (
        <Nav className="sidebar sidebar-offcanvas" id="sidebar">

            <ul className="nav w-100">
                <li className="nav-item">
                    <a className="nav-link" >
                        <i className="mdi mdi-home menu-icon"></i>
                        <span className="menu-title">Dashboard</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="collapse" aria-expanded="false" aria-controls="ui-basic">
                        <i className="mdi mdi-circle-outline menu-icon"></i>
                        <span className="menu-title">UI Elements</span>
                        <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="ui-basic">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"> <a className="nav-link">Buttons</a></li>
                            <li className="nav-item"> <a className="nav-link">Typography</a></li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" >
                        <i className="mdi mdi-view-headline menu-icon"></i>
                        <span className="menu-title">Form elements</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">
                        <i className="mdi mdi-chart-pie menu-icon"></i>
                        <span className="menu-title">Charts</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">
                        <i className="mdi mdi-grid-large menu-icon"></i>
                        <span className="menu-title">Tables</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">
                        <i className="mdi mdi-emoticon menu-icon"></i>
                        <span className="menu-title">Icons</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="collapse" aria-expanded="false" aria-controls="auth">
                        <i className="mdi mdi-account menu-icon"></i>
                        <span className="menu-title">User Pages</span>
                        <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="auth">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"> <a className="nav-link" > Login </a></li>
                            <li className="nav-item"> <a className="nav-link" > Login 2 </a></li>
                            <li className="nav-item"> <a className="nav-link" > Register </a></li>
                            <li className="nav-item"> <a className="nav-link" > Register 2 </a></li>
                            <li className="nav-item"> <a className="nav-link" > Lockscreen </a></li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" >
                        <i className="mdi mdi-file-document-box-outline menu-icon"></i>
                        <span className="menu-title">Documentation</span>
                    </a>
                </li>
            </ul>
        </Nav>

    );
};
export default withRouter(Sidebar)
