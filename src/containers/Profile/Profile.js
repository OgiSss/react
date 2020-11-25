import React, { useState } from 'react';
import EditProfileModal from './EditProfileModal/EditProfileModal';
import ProfileGallery from './EditProfileModal/EditProfileModal';
import './Profile.scss';

const Profile = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <div className="col-md-12 mx-auto">
                <div className="bg-white shadow rounded overflow-hidden">
                    <div className="px-4 pt-5 pb-4 cover">
                        <div className="media align-items-end profile-head">
                            <div className="profile mr-3"><img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="..." width="130" className="rounded mb-2 img-thumbnail" />
                                <a onClick={() => handleShow(true)} className="btn btn-outline-dark btn-sm btn-block">Edit profile</a></div>
                            <div className="media-body mb-5 text-white">
                                <h4 className="mt-0 mb-0">Mark Williams</h4>
                                <p className="small mb-4"> <i className="fas fa-map-marker-alt mr-2"></i>New York</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-light p-4 d-flex justify-content-end text-center">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <h5 className="font-weight-bold mb-0 d-block">215</h5>
                                <small className="text-muted"> <i className="fas fa-image mr-1"></i>Photos</small>
                            </li>
                            <li className="list-inline-item">
                                <h5 className="font-weight-bold mb-0 d-block">745</h5>
                                <small className="text-muted"> <i className="fas fa-user mr-1"></i>Followers</small>
                            </li>
                            <li className="list-inline-item">
                                <h5 className="font-weight-bold mb-0 d-block">340</h5>
                                <small className="text-muted"> <i className="fas fa-user mr-1"></i>Following</small>
                            </li>
                        </ul>
                    </div>
                    <div className="px-4 py-3">
                        <h5 className="mb-0">About</h5>
                        <div className="p-4 rounded shadow-sm bg-light">
                            <p className="font-italic mb-0">Web Developer</p>
                            <p className="font-italic mb-0">Lives in New York</p>
                            <p className="font-italic mb-0">Photographer</p>
                        </div>
                    </div>
                    <ProfileGallery />
                </div>
            </div>
            <EditProfileModal handleClose={handleClose} show={show} />
        </React.Fragment>
    );
};

export default Profile;