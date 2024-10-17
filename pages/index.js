'use-client'

import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import axios from 'axios'
import { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Navbar from "./Navbar";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <Navbar />
        <div className="carousel-container">
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                showIndicators={true}
                swipeable
                dynamicHeight={false}
                interval={3000}
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
                    max-width: 100%;
                    margin: 0 auto;
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
                img {
                    margin-top:80px;
                    max-height: 600px;
                    object-fit: cover;
                }
            `}</style>
        </div>
      <div>

      </div>
      <div>

      </div>
      <div>

      </div>
      <div>

      </div>
    </>
  );
}

//blue color
//rgb(28, 93, 151)