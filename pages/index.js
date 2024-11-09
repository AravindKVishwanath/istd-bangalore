'use-client'
import { useRef, useEffect, useState } from 'react';
import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import axios from 'axios';
import Navbar from "../components/Navbar.js";
import CarouselGallery from "./Carousel";
import Card from '../components/Card.jsx';
import Picture from '../components/Picture.jsx';
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
  const [quote, setQuote] = useState("Loading...");

  // Fetch the quote from the API when the component mounts
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get('/api/quotes');
        setQuote(response.data.Quote);
      } catch (error) {
        console.error("Error fetching quote:", error);
        setQuote("Stay inspired and keep innovating!"); // Fallback message
      }
    };

    fetchQuote();
  }, []);

  // Function to scroll to the next section
  const handleScroll = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar />
      <CarouselGallery />
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          color: "#ffffff",
          margin: 35,
          fontSize: "1.3em",
          background: "linear-gradient(45deg, #0077b6, #0096c7, #00b4d8, #90e0ef)", // Elegant blue gradient
          borderRadius: "12px",
          padding: "25px",
          textAlign: "center",
          fontFamily: "var(--font-geist-sans)",
          textShadow: "1px 1px 5px rgba(0, 0, 0, 0.3)", // Slight shadow for contrast
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)", // Subtle box shadow for elevation
          // maxWidth: "80%", // Responsive width
        }}
      >
        <h2>{quote}</h2>
      </div>
      <div className="istd-people-section" style={{ height: '100vh', color: "black" }}>
        <div style={{ height: 30, backgroundColor: "#ffffff" }}></div>
        <Card/>
        <Picture/>
      </div>
      {/* <div className="footer-section" style={{ height: '50vh', color: "black" }}> */}
      <div className="footer-section">
        <Footer/>
      </div>
    </>
  );
}
