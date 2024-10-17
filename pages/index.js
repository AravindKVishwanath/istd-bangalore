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
        <div className={styles.viewmore} style={{alignItems:"center",justifyContent:"center",display:"flex",width:"100%",margin:20}}>
            <button className="btn btn-primary" onClick={handleScroll} style={{height:50,width:200,borderRadius:15,backgroundColor:"#0070f3"}}>
            View More
            </button>
        </div>
        <Card/>
        <div ref={nextSectionRef} className="istd-people-section" style={{ marginTop: '50px', height: '100vh',color:"black"}}>
            <h2>Other Content</h2>
            <p>Here is more content that is displayed after clicking the 'View More' button.</p>
            {/* You can add more content here */}
            <Picture/>
        </div>
        <div className="footer-section" style={{ height: '50vh',color:"black"}}>
            {/* Additional content or sections */}
            <h3>Section 2</h3>
            <p>More details or sections as needed.</p>
        </div>
    </>
  );
}

//blue color
//rgb(28, 93, 151)