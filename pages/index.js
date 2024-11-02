'use-client'
import { useRef } from 'react';
import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import axios from 'axios'
import { useEffect } from "react";
import Navbar from "../components/Navbar.js";
import CarouselGallery from "./Carousel";
import Card from '../components/Card.jsx';
import Picture from '../components/Picture.jsx'
import Footer from '../components/Footer';


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

    const nextSectionRef = useRef(null);

    // Function to scroll to the next section
    const handleScroll = () => {
      if (nextSectionRef.current) {
        nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

  return (
    <>
        <Navbar />  
        <CarouselGallery/>
        <div style={{alignItems:"center",justifyContent:"center",display:"flex",color:"black",margin:35 }}>
          <h1>
            There will some content here about ISTD bangalore
          </h1>
        </div>
        <div className="istd-people-section" style={{ height: '100vh',color:"black"}}>
            <div style={{height:30,backgroundColor:"#ffffff"}}></div>
            <Card/>
            {/* You can add more content here */}
            <Picture/>
        </div>
        <div className="footer-section" style={{ height: '50vh',color:"black"}}>
            {/* Additional content or sections */}
            <Footer/>
        </div>
    </>
  );
}

//blue color
//rgb(28, 93, 151)