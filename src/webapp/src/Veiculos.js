import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import {Link} from "react-router-dom";

function Veiculo() {
    return (
        <div className="Veiculo">

            <header
                className="shadow-sm d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-0 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <h1 id="uni"> uni </h1>
                    <h1 id="auto">Auto </h1>
                </a>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to="/" className="nav-link px-2 link-secondary">Home</Link></li>
                    <li><a href="#" className="nav-link px-2 link-dark">Reserva</a></li>
                    <li><Link to="/veiculos" className="nav-link px-2 link-dark">Veículos</Link></li>
                    <li><a href="#" className="nav-link px-2 link-dark">FAQs</a></li>
                    <li><a href="#" className="nav-link px-2 link-dark">Sobre</a></li>
                </ul>

                <div className="col-md-3 text-end" >
                    <button type="button" className="btn btn-outline-primary me-2">Login</button>
                    <button type="button" className="btn btn-primary">Registo</button>
                </div>
            </header>

            <div id="vehicle-container">
                {/* Carousel wrapper */}
                <div
                    id="carouselMultiItemExample"
                    class="carousel slide carousel-dark text-center"
                    data-mdb-ride="carousel"
                >
                    {/*} Controls */}
                    <div class="d-flex justify-content-center mb-4">
                        <button
                            class="carousel-control-prev position-relative"
                            type="button"
                            data-mdb-target="#carouselMultiItemExample"
                            data-mdb-slide="prev"
                        >
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                            class="carousel-control-next position-relative"
                            type="button"
                            data-mdb-target="#carouselMultiItemExample"
                            data-mdb-slide="next"
                        >
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    {/* Inner */}
                    <div class="carousel-inner py-4">
                        {/* Single item */}
                        <div class="carousel-item active">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="card">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/181.webp"
                                                class="card-img-top"
                                                alt="Waterfall"
                                            />
                                            <div class="card-body">
                                                <h5 class="card-title">Card title</h5>
                                                <p class="card-text">
                                                    Some quick example text to build on the card title and make up the bulk
                                                    of the card's content.
                                                </p>
                                                <a href="#!" class="btn btn-primary">Button</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-4 d-none d-lg-block">
                                        <div class="card">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp"
                                                class="card-img-top"
                                                alt="Sunset Over the Sea"
                                            />
                                            <div class="card-body">
                                                <h5 class="card-title">Card title</h5>
                                                <p class="card-text">
                                                    Some quick example text to build on the card title and make up the bulk
                                                    of the card's content.
                                                </p>
                                                <a href="#!" class="btn btn-primary">Button</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-4 d-none d-lg-block">
                                        <div class="card">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/183.webp"
                                                class="card-img-top"
                                                alt="Sunset over the Sea"
                                            />
                                            <div class="card-body">
                                                <h5 class="card-title">Card title</h5>
                                                <p class="card-text">
                                                    Some quick example text to build on the card title and make up the bulk
                                                    of the card's content.
                                                </p>
                                                <a href="#!" class="btn btn-primary">Button</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Single item */}
                        <div class="carousel-item">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-4 col-md-12">
                                        <div class="card">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                                                class="card-img-top"
                                                alt="Fissure in Sandstone"
                                            />
                                            <div class="card-body">
                                                <h5 class="card-title">Card title</h5>
                                                <p class="card-text">
                                                    Some quick example text to build on the card title and make up the bulk
                                                    of the card's content.
                                                </p>
                                                <a href="#!" class="btn btn-primary">Button</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-4 d-none d-lg-block">
                                        <div class="card">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/185.webp"
                                                class="card-img-top"
                                                alt="Storm Clouds"
                                            />
                                            <div class="card-body">
                                                <h5 class="card-title">Card title</h5>
                                                <p class="card-text">
                                                    Some quick example text to build on the card title and make up the bulk
                                                    of the card's content.
                                                </p>
                                                <a href="#!" class="btn btn-primary">Button</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-4 d-none d-lg-block">
                                        <div class="card">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/186.webp"
                                                class="card-img-top"
                                                alt="Hot Air Balloons"
                                            />
                                            <div class="card-body">
                                                <h5 class="card-title">Card title</h5>
                                                <p class="card-text">
                                                    Some quick example text to build on the card title and make up the bulk
                                                    of the card's content.
                                                </p>
                                                <a href="#!" class="btn btn-primary">Button</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*} Single item */}
                        <div class="carousel-item">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                                        <div class="card">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/187.webp"
                                                class="card-img-top"
                                                alt="Peaks Against the Starry Sky"
                                            />
                                            <div class="card-body">
                                                <h5 class="card-title">Card title</h5>
                                                <p class="card-text">
                                                    Some quick example text to build on the card title and make up the bulk
                                                    of the card's content.
                                                </p>
                                                <a href="#!" class="btn btn-primary">Button</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                                        <div class="card">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/188.webp"
                                                class="card-img-top"
                                                alt="Bridge Over Water"
                                            />
                                            <div class="card-body">
                                                <h5 class="card-title">Card title</h5>
                                                <p class="card-text">
                                                    Some quick example text to build on the card title and make up the bulk
                                                    of the card's content.
                                                </p>
                                                <a href="#!" class="btn btn-primary">Button</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                                        <div class="card">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/189.webp"
                                                class="card-img-top"
                                                alt="Purbeck Heritage Coast"
                                            />
                                            <div class="card-body">
                                                <h5 class="card-title">Card title</h5>
                                                <p class="card-text">
                                                    Some quick example text to build on the card title and make up the bulk
                                                    of the card's content.
                                                </p>
                                                <a href="#!" class="btn btn-primary">Button</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Inner */}
                </div>
                {/* Carousel wrapper */}
            </div>

        </div>
    );
}

export default Veiculo;
