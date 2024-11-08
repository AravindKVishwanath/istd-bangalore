import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function CarouselGallery() {
    return (
        <div className="carousel-container">
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                showIndicators={true}
                swipeable
                dynamicHeight={false}
                interval={5000} // Set to 5 seconds
            >
                <div className="carousel-slide">
                    <img
                        src="https://i.ytimg.com/vi/uvPOTMJBM1g/maxresdefault.jpg"
                        alt="Image 1"
                        className="animated-img"
                    />
                    {/* <p className="legend">Image 1</p> */}
                </div>
                <div className="carousel-slide">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rq4OqEx-PHUnuRHe2HevTUVZEdQliq5x_A&s"
                        alt="Image 2"
                        className="animated-img"
                    />
                    {/* <p className="legend">Image 2</p> */}
                </div>
                <div className="carousel-slide">
                    <img
                        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a2bf2e3962975.5cd493d6a85a4.jpg"
                        alt="Image 3"
                        className="animated-img"
                    />
                    {/* <p className="legend">Image 3</p> */}
                </div>
                <div className="carousel-slide">
                    <img
                        src="https://th.bing.com/th/id/R.b77956bb8ed7990ebe59e1062235eaa7?rik=fu45HFf7772yvg&riu=http%3a%2f%2fistdchennai.org%2fimages%2fGallery%2fNOV-2022%2f16.jpg&ehk=aAC3PFar6qCKnJZ%2bCogrzpyNAnOReZPQW1MUmannMIA%3d&risl=&pid=ImgRaw&r=0"
                        alt="Image 4"
                        className="animated-img"
                    />
                    {/* <p className="legend">Image 4</p> */}
                </div>
                <div className="carousel-slide">
                    <img
                        src="https://static.wixstatic.com/media/9828aa_08259e2df78d48be8fcfed629f283752~mv2.png/v1/fill/w_534,h_250,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Natcon-removebg-preview.png"
                        alt="Image 5"
                        className="animated-img"
                    />
                    {/* <p className="legend">Image 5</p> */}
                </div>
            </Carousel>

            <style jsx>{`
                .carousel-container {
                    max-height: 600px;
                    max-width: 100%;
                    margin-top: 60px;
                }

                .carousel-slide {
                    position: relative;
                }

                .animated-img {
                    max-height: 600px;
                    object-fit: cover;
                    width: 100%;
                    animation: zoomFadeRotate 5s ease-in-out infinite;
                }

                /* Keyframes for smooth zoom, fade, and rotation effect */
                @keyframes zoomFadeRotate {
                    0% {
                        transform: scale(1) rotate(0deg);
                        opacity: 0;
                    }
                    25% {
                        transform: scale(1.05) rotate(1deg);
                        opacity: 0.8;
                    }
                    50% {
                        transform: scale(1.1) rotate(2deg);
                        opacity: 1;
                    }
                    75% {
                        transform: scale(1.05) rotate(1deg);
                        opacity: 0.8;
                    }
                    100% {
                        transform: scale(1) rotate(0deg);
                        opacity: 0;
                    }
                }

                .legend {
                    background: rgba(0, 0, 0, 0.5);
                    color: white;
                    font-size: 1.2rem;
                    padding: 10px;
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 100%;
                    text-align: center;
                }
            `}</style>
        </div>
    );
}