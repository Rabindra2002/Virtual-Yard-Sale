import React from 'react'
import "./BreadCrumb.css";

const Breadcrumb = () => {
    return (
      <div className="containers">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb" className="mb-0">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/" role="button" tabIndex="0">Home</a>
                  <span className="breadcrumb-separator"> / </span>
                </li>
                <li className="breadcrumb-item">
                  <a href="/browse-all" role="button" tabIndex="0">
                    <span>Shop</span>
                  </a>
                  <span className="breadcrumb-separator"> / </span>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Shop Grid
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    );
  };
  
  export default Breadcrumb;
  