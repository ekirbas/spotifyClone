import React, { useEffect, useState } from 'react'
import { Icon } from '../Icons'
import { Range, getTrackBackground } from "react-range";
import { useSelector } from 'react-redux'
import { useAudio } from 'react-use';

function MediaPlayer() {
    const [shuffle, setShuffle] = useState(false);
    const [repeat, setRepeat] = useState(0);
    const podcastAudioSrc = useSelector(state => state.cardsData.mediaPlayerData.mediaSrc)
    const [audio, state, controls, ref] = useAudio({
        src: podcastAudioSrc,
        autoPlay: true,
    })
    console.log("çalıştı");

    function podcastCurrentDuration() {
        const minute = parseInt(state?.time / 60);
        const second = parseInt(state?.time % 60)
        return `${minute > 0 ? minute : `0${minute}`}:${second > 0 ? second : `0${second}`}`;
    }
    function podcastDuration() {
        const minute = parseInt(state?.duration / 60);
        const second = parseInt(state?.duration % 60)
        return `${minute > 0 ? minute : `0${minute}`}:${second > 0 ? second : `0${second}`}`;
    }

    function podcastRange() {
        const STEP = 0.1;
        const MIN = 0;
        const MAX = 100;
        /* const [values, setValues] = useState([0]) */

        return (
            <Range
                values={[state?.time]}
                step={STEP}
                min={MIN}
                max={state?.duration || 1}
                onChange={(values) => controls.seek(values[0])}
                renderTrack={({ props, children }) => (
                    <div className='rangeContainer col-'
                        onMouseDown={props.onMouseDown}
                        onTouchStart={props.onTouchStart}
                        style={props.style}
                    >
                        <div className='rangeBar rangeHover col-'
                            ref={props.ref}
                            style={{
                                background: getTrackBackground({
                                    values: [state?.time],
                                    colors: ["#1db954", "#535353"],
                                    min: MIN,
                                    max: state?.duration || 1
                                }),
                            }}
                        >
                            {children}
                        </div>
                    </div>
                )}
                renderThumb={({ props, isDragged }) => (
                    <div className={`rangeBall rangeHover ${isDragged ? "rangeVisibleTrue" : ""}`}
                        {...props}
                        style={props.style}
                    >
                    </div>
                )}
            />
        );
    }
    function podcastVolumeRange() {
        const STEP = 0.01;
        const MIN = 0;
        return (
            <Range
                values={[state?.volume]}
                step={STEP}
                min={MIN}
                max={1}
                onChange={(values) => controls.volume(values[0])}
                renderTrack={({ props, children }) => (
                    <div className='rangeContainer col-'
                        onMouseDown={props.onMouseDown}
                        onTouchStart={props.onTouchStart}
                        style={props.style}
                    >
                        <div className='rangeBar rangeHover col-'
                            ref={props.ref}
                            style={{
                                background: getTrackBackground({
                                    values: [state?.volume],
                                    colors: ["#1db954", "#535353"],
                                    min: MIN,
                                    max: 1
                                }),
                            }}
                        >
                            {children}
                        </div>
                    </div>
                )}
                renderThumb={({ props, isDragged }) => (
                    <div className={`rangeBall rangeHover ${isDragged ? "rangeVisibleTrue" : ""}`}
                        {...props}
                        style={props.style}
                    >
                    </div>
                )}
            />
        );
    }
    function volumeIcon() {
        if (!state?.muted) {
            if (state?.volume > .66) {
                return <Icon name="volume3" />
            } else if (state?.volume > .33) {
                return <Icon name="volume2" />
            } else {
                return <Icon name="volume1" />
            }
        } else {
            return <Icon name="volumeMute" />
        }
    }

    return (
        <>
            {audio}
            <div className='mediaPlayerDiv col-p40 row-12'>
                <div className='mediaPlayerButtons'>
                    <button onClick={() => setShuffle(!shuffle)} className={shuffle ? "shuffleAfter" : ""}>
                        <Icon name="shuffle" />
                    </button>
                    <button>
                        <Icon name="previous" />
                    </button>
                    <button className='playBtnBackground' onClick={state.playing ? controls.pause : controls.play}>
                        {
                            state?.playing ? <Icon name="stop" /> : <Icon name="play" />
                        }

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
                        {podcastCurrentDuration()}
                    </div>
                    <div className='playbackBarContainer col-'>
                        {podcastRange()}
                    </div>
                    <div className='playbackDuration'>
                        {podcastDuration()}
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
                            {
                                volumeIcon()
                            }

                        </button>
                        <div className='volumeBarContainer col-'>
                            {podcastVolumeRange()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MediaPlayer