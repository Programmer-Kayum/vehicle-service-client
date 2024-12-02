import React from "react";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import OurServices from "./OurService";
import ContactInfo from "./Info";
import BrowseProducts from "./ProductCard";
import MeetOurTeam from "./MeatOurTeam";
import Features from "./Features";
import Testimonials from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <OurServices></OurServices>
      <ContactInfo></ContactInfo>
      <BrowseProducts></BrowseProducts>
      <MeetOurTeam></MeetOurTeam>
      <Features></Features>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
