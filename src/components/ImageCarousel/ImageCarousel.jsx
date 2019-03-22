import React from 'react';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import './ImageCarousel.scss';

import {
    MDBCarousel,
    MDBCarouselCaption,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBView,
    MDBMask,
    MDBContainer
} from 'mdbreact';

const ImageCarousel = () => {
    return (
        <MDBContainer className="image-carousel-container">
            <MDBCarousel
                activeItem={1}
                length={4}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
                className="image-carousel"
            >
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src="https://source.unsplash.com/800x900/?earphones"
                                alt="First slide"
                            />
                            <MDBMask overlay="black-light" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Headphones</h3>
                            <p>First text</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src="https://source.unsplash.com/800x900/?iPhone"
                                alt="Second slide"
                            />
                            <MDBMask overlay="black-light" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">iPhones</h3>
                            <p>Second text</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src="https://source.unsplash.com/800x900/?macbook"
                                alt="Third slide"
                            />
                            <MDBMask overlay="black-light" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">MacBooks</h3>
                            <p>Third text</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="4">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src="https://source.unsplash.com/800x900/?toys"
                                alt="Mattonit's item"
                            />
                            <MDBMask overlay="black-light" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Toys</h3>
                            <p>Dummy text</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
    );
};

export default ImageCarousel;
