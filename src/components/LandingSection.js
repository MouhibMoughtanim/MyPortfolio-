import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import  img  from "../images/mouhib.jpg";
import "./css/image.css"
const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <div className="profile-card" >
      <img src={img}  alt='Mouhib Moughtanim' className="logo"/>
      <span className="salut"><p> Hello I'm Mouhib!</p></span>
      <span><h1>A frontend developer specialised in React</h1></span>
    </div>
  </FullScreenSection>
);

export default LandingSection;
