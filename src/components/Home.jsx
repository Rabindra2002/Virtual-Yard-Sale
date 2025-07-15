import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

const Home = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <>
            <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
                {/* Carousel Indicators */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>

                {/* Carousel Inner */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="bd-placeholder-img w-100" src="home1.png" alt="" height="500" />
                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1>Welcome To The Virtual Yard Sale Platform</h1>
                                <h4 style={{ color: 'black' }}>Sign Up here to gain the benefit of this Platform</h4>
                                <p><Link className="btn btn-lg btn-primary" to="/signup">Sign up today</Link></p>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img className="bd-placeholder-img w-100" src="home2.png" alt="" height="500" />
                        <div className="container">
                            <div className="carousel-caption text-end">
                                <h1>Hello, Browse The Items You Want</h1>
                                <h4 style={{ color: "black" }}>Sell and Buy your second-hand or new items</h4>
                                <p><Link className="btn btn-lg btn-primary" to="/browse-all">Browse gallery</Link></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Carousel Controls */}
                <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Featured Categories */}
            <div className="containers mt-5  flex-wrap justify-content-between bg-white">
                <h3 className="mb-4">Featured Categories</h3>
                <Slider {...sliderSettings}>
                    <div>
                        <Link to="/browse-all" className="text-decoration-none text-inherit">
                            <div className="card-product card text-center">
                                <div className="card-body">
                                    <img src="https://images.unsplash.com/photo-1602810319428-019690571b5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFwcGFyZWx8ZW58MHx8MHx8fDA%3D" alt="" className="mb-3 img-fluid" />
                                    <p>Shirts , classy pant and other clothes</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/browse-all" className="text-decoration-none text-inherit">
                            <div className="card-product card text-center">
                                <div className="card-body">
                                    <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwYXJlbHxlbnwwfHwwfHx8MA%3D%3D" alt="" className="mb-3 img-fluid" />
                                    <p>Shoes, shirt, pant and other apparel</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/browse-all" className="text-decoration-none text-inherit">
                            <div className="card-product card text-center">
                                <div className="card-body">
                                    <img src="https://images.unsplash.com/photo-1649373123712-bc9b39c527e8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhcml8ZW58MHx8MHx8fDA%3D" alt="" className="mb-3 img-fluid" />
                                    <p>chair and other furnitures</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/browse-all" className="text-decoration-none text-inherit">
                            <div className="card-product card text-center">
                                <div className="card-body">
                                    <img src="https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlfGVufDB8fDB8fHww" alt="" className="mb-3 img-fluid" />
                                    <p>Mobile phone, fridge and other electronics</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/browse-all" className="text-decoration-none text-inherit">
                            <div className="card-product card text-center">
                                <div className="card-body">
                                    <img src="https://plus.unsplash.com/premium_photo-1664202526559-e21e9c0fb46a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwYXJlbHxlbnwwfHwwfHx8MA%3D%3D" alt="" className="mb-3 img-fluid" />
                                    <p>combo clothes</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/browse-all" className="text-decoration-none text-inherit">
                            <div className="card-product card text-center">
                                <div className="card-body">
                                    <img src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9va3N8ZW58MHx8MHx8fDA%3D" alt="" className="mb-3 img-fluid" />
                                    <p>Boooks</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/browse-all" className="text-decoration-none text-inherit">
                            <div className="card-product card text-center">
                                <div className="card-body">
                                    <img src="https://plus.unsplash.com/premium_photo-1678718713393-2b88cde9605b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlrZXxlbnwwfHwwfHx8MA%3D%3D" alt="" className="mb-3 img-fluid" />
                                    <p>cycle, bike, cars and other automobiles</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/browse-all" className="text-decoration-none text-inherit">
                            <div className="card-product card text-center">
                                <div className="card-body">
                                    <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mYXxlbnwwfHwwfHx8MA%3D%3D" alt="" className="mb-3 img-fluid" />
                                    <p>sofa,chair and other furniture</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </Slider>
            </div>
        </>
    );
};

export default Home;
