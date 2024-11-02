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
                        src="https://i.ytimg.com/vi/uvPOTMJBM1g/maxresdefault.jpg"
                        alt="Image 1"
                    />
                    <p className="legend">Image 1</p>
                </div>
                <div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rq4OqEx-PHUnuRHe2HevTUVZEdQliq5x_A&s"
                        alt="Image 2"
                    />
                    <p className="legend">Image 2</p>
                </div>
                <div>
                    <img
                        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a2bf2e3962975.5cd493d6a85a4.jpg"
                        alt="Image 3"
                    />
                    <p className="legend">Image 3</p>
                </div>
                <div>
                    <img
                        src="https://th.bing.com/th/id/R.b77956bb8ed7990ebe59e1062235eaa7?rik=fu45HFf7772yvg&riu=http%3a%2f%2fistdchennai.org%2fimages%2fGallery%2fNOV-2022%2f16.jpg&ehk=aAC3PFar6qCKnJZ%2bCogrzpyNAnOReZPQW1MUmannMIA%3d&risl=&pid=ImgRaw&r=0"
                        alt="Image 4"
                    />
                    <p className="legend">Image 4</p>
                </div>
                <div>
                    <img
                        src="https://static.wixstatic.com/media/9828aa_08259e2df78d48be8fcfed629f283752~mv2.png/v1/fill/w_534,h_250,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Natcon-removebg-preview.png"
                        alt="Image 5"
                    />
                    <p className="legend">Image 5</p>
                </div>
            </Carousel>

            <style jsx>{`
                .carousel-container {
                    max-height:600px;
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
                    max-height: 600px;
                    object-fit: cover;
                }
            `}</style>
        </div>
    );
}