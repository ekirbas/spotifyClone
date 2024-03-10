import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import PodcastCard from "./PodcastCard";
import PropTypes from "prop-types";
import ScrollContainer from "react-indiana-drag-scroll";
import { Icon } from "../Icons";

function PodcastCardContainer(props) {
  const { data, title } = props;
  const typesRef = useRef(null);
  const [isStart, setIsStart] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  const typesScroll = () => {
    setIsStart(typesRef.current.scrollLeft === 0 ? true : false);
    setIsEnd(
      typesRef.current.scrollLeft + typesRef.current.clientWidth >=
        typesRef.current.scrollWidth
        ? true
        : false
    );
  };

  function podcastContainerF() {
    return (
      <div className="podcastCardContainerDiv col-">
        <div className="podcastCardTop">
          <Link to="/" className="Link">
            <div className="podcastCardMessage">{title}</div>
          </Link>
          <Link to="/" className="Link">
            <div className="seeAll">HEPSİNİ GÖR</div>
          </Link>
        </div>
        <div className="podcastCardContainer">
          {data.map((v) => {
            return (
              <PodcastCard
                img={v.img}
                name={v.name}
                explanation={v.explanation}
                to={v.to}
                key={v.id}
                type={v.type}
                color={v.color}
                mediaSrc={v.mediaSrc}
              />
            );
          })}
        </div>
      </div>
    );
  }
  function podcastCardPlaylistF() {
    return (
      <div className="podcastCardContainerDiv col-">
        <div className="podcastCardTop">
          <Link to="/" className="Link">
            <div className="podcastCardMessage">{title}</div>
          </Link>
        </div>
        <div
          className="podcastCardContainer"
          style={{ gridGap: "24px", gridAutoRows: "inherit" }}
        >
          {data.map((v) => {
            return (
              <PodcastCard
                img={v.img}
                name={v.name}
                explanation={v.explanation}
                to={v.to}
                key={v.id}
                type={v.type}
                color={v.color}
                mediaSrc={v.mediaSrc}
              />
            );
          })}
        </div>
      </div>
    );
  }
  function podcastTypsContainerF() {
    return (
      <div className="podcastCardContainerDiv col-">
        <div className="podcastCardTop">
          <Link to="/" className="Link">
            <div className="podcastCardMessage">{title}</div>
          </Link>
        </div>
        {!isStart && (
          <div className="prevDiv">
            <button
              className="prevBtn"
              onClick={() => {
                typesRef.current.scrollLeft -=
                  typesRef.current.clientWidth * 0.7;
              }}
            >
              <Icon name="back" />
            </button>
          </div>
        )}
        {!isEnd && (
          <div className="nextDiv">
            <button
              className="nextBtn"
              onClick={() => {
                typesRef.current.scrollLeft +=
                  typesRef.current.clientWidth * 0.7;
              }}
            >
              <Icon name="forward" />
            </button>
          </div>
        )}
        <ScrollContainer
          style={{ scrollBehavior: "smooth" }}
          innerRef={typesRef}
          vertical={false}
          onScroll={typesScroll}
        >
          <div className="podcastTypesCardContainer">
            {data.map((v) => {
              return (
                <PodcastCard
                  img={v.img}
                  name={v.name}
                  explanation={v.explanation}
                  to={v.to}
                  key={v.id}
                  type={v.type}
                  color={v.color}
                />
              );
            })}
          </div>
        </ScrollContainer>
      </div>
    );
  }
  function podcastTypsSmallContainerF() {
    return (
      <div className="podcastCardContainerDiv col-">
        <div className="podcastCardTop">
          <Link to="/" className="Link">
            <div className="podcastCardMessage">{title}</div>
          </Link>
        </div>
        <div className="podcastTypesSmallCardContainer">
          {data.map((v) => {
            return (
              <PodcastCard
                img={v.img}
                name={v.name}
                explanation={v.explanation}
                to={v.to}
                key={v.id}
                type={v.type}
                color={v.color}
              />
            );
          })}
        </div>
      </div>
    );
  }
  switch (data[0].type) {
    case "type":
      return podcastTypsContainerF();
    case "typeSmall":
      return podcastTypsSmallContainerF();
    case "playListCollection":
      return podcastCardPlaylistF();
    default:
      return podcastContainerF();
  }
}

PodcastCardContainer.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
};
export default PodcastCardContainer;
