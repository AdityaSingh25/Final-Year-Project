import React from "react";
import CardItems from "../CardItems/Carditems";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItems
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              
              path="/services"
            />
            <CardItems
              src="images/img-2.png"
              text="Travel through the Islands of Bali in a Private Cruise"
              
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItems
              src="images/img-3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              
              path="/services"
            />
            <CardItems
              src="images/img-4.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              
              path="/products"
            />
            <CardItems
              src="images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
