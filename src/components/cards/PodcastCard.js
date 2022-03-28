import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../Icons'
import PropTypes from 'prop-types'
import '../../style/Card.less'
import { useDispatch } from 'react-redux'
import { selectedPodcast } from '../../store/CardsDataSlice'

function PodcastCard(props) {
    const { img, to, name, explanation, type, color } = props;
    const dispatch = useDispatch();

    function playListFunction() {
        return (
            <div className='podcastCardArea col- row-12'>
                <div className='podcastCardClickBtn col- row-12' />
                <div className='flex relative'>
                    <img className='podcastCardImg col- row-12' style={{ borderRadius: "4px" }} src={img} />
                    <div className='cardPlay'>
                        <button className='cardPlayBtn'
                            onClick={() => dispatch(selectedPodcast(props))}>
                            <Icon name="cardPlay" />
                        </button>
                    </div>
                </div>
                <div className='podcastCardBottomContainer'>
                    <Link className='podcastCardName' to={to}>
                        <div className='podcastCardNameDiv'>
                            {name}
                        </div>
                    </Link>
                    <div className='podcastCardExplanation'>
                        {explanation}
                    </div>
                </div>
            </div>
        )
    }
    function artistFunction() {
        return (
            <div className='podcastCardArea col- row-12'>
                <div className='podcastCardClickBtn col- row-12' />
                <div className='flex relative'>
                    <img className='podcastCardImg col- row-12' src={img} />
                    <div className='cardPlay'>
                        <button className='cardPlayBtn'
                            onClick={() => dispatch(selectedPodcast(props))}>
                            <Icon name="cardPlay" />
                        </button>
                    </div>
                </div>
                <div className='podcastCardBottomContainer'>
                    <Link className='podcastCardName' to={to}>
                        <div className='podcastCardNameDiv'>
                            {name}
                        </div>
                    </Link>
                    <div className='podcastCardExplanation'>
                        {explanation}
                    </div>
                </div>
            </div>
        )
    }
    function podcastTypesFunction() {
        return (
            <Link to={"/"} className='podcastCardArea Link row-12' style={{ backgroundColor: `${color}` }}>
                <h3>{name}</h3>
                <img className='typesImg' src={img} />
            </Link>
        )
    }
    function podcastTypesSmallFunction() {
        return (
            <Link to={"/"} className='typesSmallCardArea Link col- row-12' style={{ backgroundColor: `${color}` }}>
                <h3>{name}</h3>
                <img className='typesImg' src={img} />
            </Link>
        )
    }


    switch (type) {
        case "playList":
            return playListFunction();
        case "artist":
            return artistFunction();
        case "type":
            return podcastTypesFunction();
        case "typeSmall":
            return podcastTypesSmallFunction();
        default:
            console.log("default ", type)
    }

}
PodcastCard.propTypes = {
    img: PropTypes.string,
    to: PropTypes.string,
    name: PropTypes.string,
    explanation: PropTypes.string,
    type: PropTypes.string,
    color: PropTypes.string,
}

export default PodcastCard