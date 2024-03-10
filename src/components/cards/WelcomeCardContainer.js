import React from "react";
import WelcomeCard from "./WelcomeCard";
import { useSelector } from "react-redux";

function WelcomeCardContainer() {
  const dataWelcome = useSelector((state) => state.cardsData.dataWelcome);
  return (
    <div className="welcomeCardContainer col-">
      <div className="welcomeMessage">İyi akşamlar</div>
      <div className="cardContainer">
        {dataWelcome.map((v) => {
          return <WelcomeCard img={v.img} name={v.name} to={v.to} key={v.id} />;
        })}
      </div>
    </div>
  );
}

export default WelcomeCardContainer;
