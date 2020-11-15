import React from 'react';
import './Layout.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const layout = props => {
  let isAuth;
  if (!props.isAuthenticated) {
    isAuth = props.children;
  } else {
    isAuth = (
      <div className="container-scroller">
        <Navbar />
        <div className="container-fluid page-body-wrapper">
          <Sidebar />
          <div className="main-panel">
            <div className="content-wrapper">
              {props.children}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    )
  }

  return (
    <React.Fragment>
      {isAuth}
    </React.Fragment>
  );
};


export default layout;
