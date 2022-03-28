import React, { useState } from 'react'
import { Icon } from '../Icons'
import { Range, getTrackBackground } from "react-range";


function MediaPlayer() {
    const [shuffle, setShuffle] = useState(false);
    const [repeat, setRepeat] = useState(0);
    const [rangeHover, setRangeHover] = useState(false);

    function podcastRange() {
        const STEP = 0.1;
        const MIN = 0;
        const MAX = 100;
        const [values, setValues] = useState([50])

        return (
            <Range
                values={values}
                step={STEP}
                min={MIN}
                max={MAX}
                onChange={(values) => setValues(values)}
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
                                    values: values,
                                    colors: ["#1db954", "#535353"],
                                    min: MIN,
                                    max: MAX
                                }),
                            }}
                        >
                            {children}
                        </div>
                    </div>
                )}
                renderThumb={({ props, isDragged }) => (
                    <div className="rangeBall rangeHover"
                        {...props}
                        style={props.style}
                    >
                    </div>
                )}
            />
        );
    }

    return (
        <>
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
                    <div className='playbackBarContainer col-'
                        onMouseOver={() => setRangeHover(!rangeHover)}
                        onMouseLeave={() => { setRangeHover(!rangeHover) }}>
                        {podcastRange()}
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
                        <div className='volumeBarContainer col-'
                            onMouseOver={() => setRangeHover(!rangeHover)}
                            onMouseLeave={() => { setRangeHover(!rangeHover) }}>
                            {podcastRange()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MediaPlayer