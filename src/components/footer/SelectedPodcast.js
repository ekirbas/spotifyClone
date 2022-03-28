import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../Icons'
import '../../style/Footer.less'
import MediaPlayer from './MediaPlayer'
import { useSelector } from 'react-redux'

/* const data = {
    artist: "Sagopa Kajmer",
    podcast: "Galiba - Orijinal Rap Versiyon ",
    picture: "https://i.scdn.co/image/ab67616d00004851b5ed0b7cb7f3bddf23979e63",
    artistUrl: "/sagopaKajmer",
    podcastUrl: "/sagopaKajmer/galiba-original"
} */
function SelectedPodcast() {
    const mediaPlayerData = useSelector(state => state.cardsData.mediaPlayerData)
    return (
        <>
            <div className='selectedPodcastDiv col-p30 row-12'>
                <div className='flex'>
                    <img className='selectedPodcastImg' src={mediaPlayerData.img} />
                </div>
                <div className='mediaPlayerPodcastNameDiv'>
                    <div className='podcastTxt'>
                        <Link to={mediaPlayerData.to} className='Link'>
                            {mediaPlayerData.name}
                        </Link>
                    </div>
                    <div className='podcastArtistTxt'>
                        <Link to={mediaPlayerData.to} className='Link'>
                            {mediaPlayerData.explanation}
                        </Link>
                    </div>

                </div>
                <div className='flex'>
                    <button className='mediaPlayerFavBtn'>
                        <Icon name="mediaPlayerFav" />
                    </button>
                    <button className='mediaPlayerPopupBtn'>
                        <Icon name="popup" />
                    </button>
                </div>
            </div>
            <MediaPlayer />
        </>
    )
}

export default SelectedPodcast