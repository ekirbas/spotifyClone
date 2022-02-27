import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../Icons'
import '../../style/Footer.less'

const data = {
    artist: "Sagopa Kajmer",
    podcast: "Galiba - Orijinal Rap Versiyon ",
    picture: "https://i.scdn.co/image/ab67616d00004851b5ed0b7cb7f3bddf23979e63",
    artistUrl: "/sagopaKajmer",
    podcastUrl: "/sagopaKajmer/galiba-original"
}

function SelectedPodcast() {
    const [shuffle, setShuffle] = useState(false);
    const [repeat, setRepeat] = useState(0);


    return (
        <>
            <div className='selectedPodcastDiv col-p30 row-12'>
                <div className='flex'>
                    <img className='selectedPodcastImg' src={data.picture} />
                </div>
                <div className='mediaPlayerPodcastNameDiv'>
                    <div className='podcastTxt'>
                        <Link to={data.artistUrl} className='Link'>
                            {data.podcast}
                        </Link>
                    </div>
                    <div className='podcastArtistTxt'>
                        <Link to={data.podcastUrl} className='Link'>
                            {data.artist}
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

            {/* MediaPlayer.js    --- redux yüklendikten sonra ayrılıcak */}
            <div className='mediaPlayerDiv col-p40 row-12'>
                <div className='mediaPlayerButtons'>
                    <button onClick={() => setShuffle(!shuffle)} className={shuffle ? "shuffleAfter" : ""}>
                        <Icon name="shuffle" />
                    </button>
                    <button>
                        <Icon name="previous" />
                    </button>
                    <button className='playBtnBackground'>
                        <Icon name="play" />

                    </button>
                    <button>
                        <Icon name="next" />

                    </button>
                    <button
                        className={
                            (repeat === 1) ? "repeatActive"
                                : (repeat === 2) ? "repeatActive repeat1Active"
                                    : ""
                        }
                        onClick={() => (repeat === 2) ? setRepeat(0) : setRepeat(repeat + 1)}>
                        {
                            (repeat > 1) ? <Icon name="repeat1" /> : <Icon name="repeat" />
                        }
                    </button>
                </div>
                <div className='playbackArea col-'>
                    <div className='playbackPosition'>
                        02.41
                    </div>
                    <div className='playbackBarContainer col-'>
                        <div className='playbackBarHoverBall'></div>
                        <div className='playbackBar col-'>
                            <div className='playbackBarSlider'>
                            </div>
                        </div>
                    </div>
                    <div className='playbackDuration'>
                        02.41
                    </div>

                </div>
            </div>

            {/* Tools.js */}
            <div className='toolsDiv col-p30 row-12'>
                <div className='toolButtons col-'>
                    <button>
                        <Icon name="lyrics" />
                    </button>
                    <button>
                        <Icon name="addQueue" />
                    </button>
                    <button>
                        <Icon name="connectDevice" />
                    </button>
                    <div className='volumeIconDiv'>
                        <button className='volumeIconBtn'>
                            <Icon name="volume" />
                        </button>
                        <div className='volumeBarContainer col-'>
                            <div className='volumeBarHoverBall'></div>
                            <div className='volumeBar col-'>
                                <div className='volumeBarSlider'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SelectedPodcast