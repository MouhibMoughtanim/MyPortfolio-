import { Heading, HStack,Flex,Avatar,Box, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./css/card.css"

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
     <div className="card">
           <div className="card-image">
                <img src={imageSrc}/>
           </div>
           <div className="card-title">
                <h2>{title}</h2>
           </div>
           <div className="card-content">
               <p>
                {description}
               </p>
           </div>
           <div className="card-link">
                <p>
                  See more
                </p>
                <span>
                <FontAwesomeIcon icon={faArrowRight} size="1x" />
                </span>
           </div>
     </div>
  );
};

export default Card;
