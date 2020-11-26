import React, { useState } from 'react';
import './DashboardTabs.scss';

const DashboardTabs = () => {
    const [tabs] = useState(['overview', 'sales', 'purchase']);
    const [activeTab, setActiveTab] = useState('overview');

    const headerTabs = tabs.map((tab, index) => {
        return (<li key={index} className="nav-item" style={{ cursor: 'pointer' }}>
            <a onClick={() => setActiveTab(tab)} className={activeTab === tab ? "nav-link active" : "nav-link"} id={tab + '-tab'} data-toggle="tab"
                role="tab" aria-controls={tab} aria-selected="true">{tab.charAt(0).toUpperCase() + tab.slice(1)}</a>
        </li>)
    });

    return (<div className="row">
        <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
                <div className="card-body dashboard-tabs p-0">
                    <ul className="nav nav-tabs px-4" role="tablist">
                        {headerTabs}
                    </ul>
                    <div className="tab-content py-0 px-0">
                        <div className={activeTab === 'overview' ? ("tab-pane fade-in active") : "tab-pane "} id="overview" role="tabpanel" aria-labelledby="overview-tab">
                            <div className="d-flex flex-wrap justify-content-xl-between">
                                <div className="d-none d-xl-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                                    <i className="mdi mdi-calendar-heart icon-lg mr-3 text-primary"></i>
                                    <div className="d-flex flex-column justify-content-around">
                                        <small className="mb-1 text-muted">Start date</small>
                                        <div className="dropdown">
                                            <a className="btn btn-secondary dropdown-toggle p-0 bg-transparent border-0 text-dark shadow-none font-weight-medium" role="button" id="dropdownMenuLinkA" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <h5 className="mb-0 d-inline-block">26 Jul 2018</h5>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLinkA">
                                                <a className="dropdown-item" >12 Aug 2018</a>
                                                <a className="dropdown-item" >22 Sep 2018</a>
                                                <a className="dropdown-item" >21 Oct 2018</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                                    <i className="mdi mdi-currency-usd mr-3 icon-lg text-danger"></i>
                                    <div className="d-flex flex-column justify-content-around">
                                        <small className="mb-1 text-muted">Revenue</small>
                                        <h5 className="mr-2 mb-0">$577545</h5>
                                    </div>
                                </div>
                                <div className="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                                    <i className="mdi mdi-eye mr-3 icon-lg text-success"></i>
                                    <div className="d-flex flex-column justify-content-around">
                                        <small className="mb-1 text-muted">Total views</small>
                                        <h5 className="mr-2 mb-0">9833550</h5>
                                    </div>
                                </div>
                                <div className="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                                    <i className="mdi mdi-download mr-3 icon-lg text-warning"></i>
                                    <div className="d-flex flex-column justify-content-around">
                                        <small className="mb-1 text-muted">Downloads</small>
                                        <h5 className="mr-2 mb-0">2233783</h5>
                                    </div>
                                </div>
                                <div className="d-flex py-3 border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                                    <i className="mdi mdi-flag mr-3 icon-lg text-danger"></i>
                                    <div className="d-flex flex-column justify-content-around">
                                        <small className="mb-1 text-muted">Flagged</small>
                                        <h5 className="mr-2 mb-0">3497843</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={activeTab === 'sales' ? "tab-pane fade-in show active" : "tab-pane"} id="sales" role="tabpanel" aria-labelledby="sales-tab">
                            <div className="d-flex flex-wrap justify-content-xl-between">
                                <div className="d-none d-xl-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                                    <i className="mdi mdi-calendar-heart icon-lg mr-3 text-primary"></i>
                                    <div className="d-flex flex-column justify-content-around">
                                        <small className="mb-1 text-muted">Start date</small>
                                        <div className="dropdown">
                                            <a className="btn btn-secondary dropdown-toggle p-0 bg-transparent border-0 text-dark shadow-none font-weight-medium" role="button" id="dropdownMenuLinkA" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <h5 className="mb-0 d-inline-block">26 Jul 2018</h5>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLinkA">
                                                <a className="dropdown-item" >12 Aug 2018</a>
                                                <a className="dropdown-item" >22 Sep 2018</a>
                                                <a className="dropdown-item">21 Oct 2018</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                                    <i className="mdi mdi-download mr-3 icon-lg text-warning"></i>
                                    <div className="d-flex flex-column justify-content-around">
                                        <small className="mb-1 text-muted">Downloads</small>
                                        <h5 className="mr-2 mb-0">2233783</h5>
                                    </div>
                                </div>
                                <div className="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                                    <i className="mdi mdi-eye mr-3 icon-lg text-success"></i>
                                    <div className="d-flex flex-column justify-content-around">
                                        <small className="mb-1 text-muted">Total views</small>
                                        <h5 className="mr-2 mb-0">9833550</h5>
                                    </div>
                                </div>
                                <div className="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                                    <i className="mdi mdi-currency-usd mr-3 icon-lg text-danger"></i>
                                    <div className="d-flex flex-column justify-content-around">
                                        <small className="mb-1 text-muted">Revenue</small>
                                        <h5 className="mr-2 mb-0">$577545</h5>
                                    </div>
                                </div>
                                <div className="d-flex py-3 border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                                    <i className="mdi mdi-flag mr-3 icon-lg text-danger"></i>
                                    <div className="d-flex flex-column justify-content-around">
                                        <small className="mb-1 text-muted">Flagged</small>
                                        <h5 className="mr-2 mb-0">3497843</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={activeTab === 'purchase' ? "tab-pane fade-in show active" : "tab-pane"} id="purchases" role="tabpanel" aria-labelledby="purchases-tab">
                            <div className="d-flex flex-wrap justify-content-xl-between">
                                <div className="d-none d-xl-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                                    <i className="mdi mdi-calendar-heart icon-lg mr-3 text-primary"></i>
                                    <div className="d-flex flex-column justify-content-around">
                                        <small className="mb-1 text-muted">Start date</small>
                                        <div className="dropdown">
                                            <a className="btn btn-secondary dropdown-toggle p-0 bg-transparent border-0 text-dark shadow-none font-weight-medium" role="button" id="dropdownMenuLinkA" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <h5 className="mb-0 d-inline-block">26 Jul 2018</h5>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLinkA">
                                                <a className="dropdown-item">12 Aug 2018</a>
                                                <a className="dropdown-item" >22 Sep 2018</a>
                                                <a className="dropdown-item" >21 Oct 2018</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                                    <i className="mdi mdi-currency-usd mr-3 icon-lg text-danger"></i>
                                    <div className="d-flex flex-column justify-content-around">
                                        <small className="mb-1 text-muted">Revenue</small>
                                        <h5 className="mr-2 mb-0">$577545</h5>
                                    </div>
                                </div>
                                <div className="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                                    <i className="mdi mdi-eye mr-3 icon-lg text-success"></i>
                                    <div className="d-flex flex-column justify-content-around">
                                        <small className="mb-1 text-muted">Total views</small>
                                        <h5 className="mr-2 mb-0">9833550</h5>
                                    </div>
                                </div>
                                <div className="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                                    <i className="mdi mdi-download mr-3 icon-lg text-warning"></i>
                                    <div className="d-flex flex-column justify-content-around">
                                        <small className="mb-1 text-muted">Downloads</small>
                                        <h5 className="mr-2 mb-0">2233783</h5>
                                    </div>
                                </div>
                                <div className="d-flex py-3 border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                                    <i className="mdi mdi-flag mr-3 icon-lg text-danger"></i>
                                    <div className="d-flex flex-column justify-content-around">
                                        <small className="mb-1 text-muted">Flagged</small>
                                        <h5 className="mr-2 mb-0">3497843</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
};

export default DashboardTabs;