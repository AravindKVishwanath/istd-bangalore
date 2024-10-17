import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function CarouselGallery(){
    return(
        <div className="carousel-container">
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                showIndicators={true}
                swipeable
                dynamicHeight={false}
                interval={4500}
            >
                <div>
                    <img
                        src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172224/1.png"
                        alt="Image 1"
                    />
                    <p className="legend">Image 1</p>
                </div>
                <div>
                    <img
                        src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172225/2.png"
                        alt="Image 2"
                    />
                    <p className="legend">Image 2</p>
                </div>
                <div>
                    <img
                        src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172226/3.png"
                        alt="Image 3"
                    />
                    <p className="legend">Image 3</p>
                </div>
                <div>
                    <img
                        src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172227/4.png"
                        alt="Image 4"
                    />
                    <p className="legend">Image 4</p>
                </div>
                <div>
                    <img
                        src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172229/5.png"
                        alt="Image 5"
                    />
                    <p className="legend">Image 5</p>
                </div>
            </Carousel>

            <style jsx>{`
                .carousel-container {
                    min-height:600px;
                    max-width: 100%;
                    margin-top:60px;
                }
                .legend {
                    background: rgba(0, 0, 0, 0.5);
                    color: white;
                    font-size: 1.2rem;
                    padding: 10px;
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    width: 100%;
                    text-align: center;
                }
                img {
                    margin-top:20px;
                    max-height: 600px;
                    object-fit: cover;
                }
            `}</style>
        </div>
    );
}