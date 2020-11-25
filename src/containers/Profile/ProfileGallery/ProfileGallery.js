import React, { useState } from 'react';
import ReactBnbGallery from 'react-bnb-gallery';

const photos = [
    'https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    'https://images.unsplash.com/photo-1493571716545-b559a19edd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    'https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
]

const ProfileGallery = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <React.Fragment>
            <div className="py-4 px-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <h5 className="mb-0">Recent photos</h5><a className="btn btn-link text-muted">Show all</a>
                </div>
                <div className="row">
                    <div className="col-lg-6 mb-2 pr-lg-1"><img onClick={() => setIsOpen(true)} src={photos[0]} alt="" className="img-fluid rounded shadow-sm" /></div>
                    <div className="col-lg-6 mb-2 pl-lg-1"><img onClick={() => setIsOpen(true)} src={photos[1]} alt="" className="img-fluid rounded shadow-sm" /></div>
                    <div className="col-lg-6 pr-lg-1 mb-2"><img onClick={() => setIsOpen(true)} src={photos[2]} alt="" className="img-fluid rounded shadow-sm" /></div>
                    <div className="col-lg-6 pl-lg-1"><img onClick={() => setIsOpen(true)} src={photos[3]} alt="" className="img-fluid rounded shadow-sm" /></div>
                </div>
            </div>
            <ReactBnbGallery
                show={isOpen}
                photos={photos}
                onClose={() => setIsOpen(false)}
            />
        </React.Fragment>

    )
}
export default ProfileGallery