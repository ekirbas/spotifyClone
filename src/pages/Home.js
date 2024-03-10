import React from "react";
import "../style/Home.less";
import { useSelector } from "react-redux";
import WelcomeCardContainer from "../components/cards/WelcomeCardContainer";
import PodcastCardContainer from "../components/cards/PodcastCardContainer";

function Home() {
  const dataPodcast = useSelector((state) => state.cardsData.dataPodcast);
  return (
    <div className="home col-">
      <WelcomeCardContainer />
      <PodcastCardContainer
        data={dataPodcast}
        title={"En sevdiğin sanatçılar"}
      />
      <PodcastCardContainer data={dataPodcast} title={"Moduna göre"} />
    </div>
  );
}

export default Home;
