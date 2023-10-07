import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="bg-primary text-white p-5 text-center">
        <h1 className="display-4">Welcome to FreshStart</h1>
        <p className="lead">Your Comprehensive Guide to University Life</p>
      </header>

      <section className="features py-5">
        <div className="container text-center">
          <h2 className="text-center mb-4">Key Features</h2>
          <div className="row">
            <div className="col-md-3 mb-4 mx-auto">
              <div className="feature-icon text-center">
                <img src={require('../images/start.jpg')} alt="Budgeting Tools" />
                <h3 className="mt-2">Budgeting Tools</h3>
                <p className="mb-0">Manage your finances and stay on track.</p>
              </div>
            </div>
            <div className="col-md-3 mb-4 mx-auto">
              <div className="feature-icon text-center">
                <img src={require('../images/start.jpg')} alt="Budgeting Tools" />
                <h3 className="mt-2">Budgeting Tools</h3>
                <p className="mb-0">Manage your finances and stay on track.</p>
              </div>
            </div>
            <div className="col-md-3 mb-4 mx-auto">
              <div className="feature-icon text-center">
                <img src={require('../images/start.jpg')} alt="Budgeting Tools" />
                <h3 className="mt-2">Budgeting Tools</h3>
                <p className="mb-0">Manage your finances and stay on track.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta bg-image py-5">
        <div className="container text-center">
          <h2 className="text-white">Ready to Get Started?</h2>
          <p className="text-white mb-4">Empowering you for success.</p>
          <button className="btn btn-primary btn-lg">Get Started</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
