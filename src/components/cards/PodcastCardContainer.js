import React, { useEffect, useRef, useState } from 'react'
import PodcastCard from './PodcastCard'
import PropTypes from 'prop-types'
import ScrollContainer from 'react-indiana-drag-scroll'
import { Icon } from '../Icons';

function PodcastCardContainer(props) {
    const { data, title } = props;
    const typesRef = useRef(null);
    const [isStart, setIsStart] = useState(true)
    const [isEnd, setIsEnd] = useState(false)

    const typesScroll = () => {
        setIsStart(typesRef.current.scrollLeft === 0 ? true : false)
        setIsEnd((typesRef.current.scrollLeft + typesRef.current.clientWidth) >= typesRef.current.scrollWidth ? true : false)
    }

    function podcastContainerF() {
        return (
            <div className='podcastCardContainerDiv col-'>
                <div className='podcastCardTop'>
                    <div className='podcastCardMessage'>
                        {title}
                    </div>
                    <div className='seeAll'>
                        HEPSİNİ GÖR
                    </div>
                </div>
                <div className='podcastCardContainer'>
                    {data.map(v => {
                        console.log("data", v.color)
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
                        )
                    })}
                </div>
            </div>
        )
    }
    function podcastTypsContainerF() {
        return (
            <div className='podcastCardContainerDiv col-'>
                <div className='podcastCardTop'>
                    <div className='podcastCardMessage'>
                        {title}
                    </div>
                    {/*  <div className='seeAll'>
                        HEPSİNİ GÖR
                    </div> */}
                </div>
                {
                    !isStart &&
                    <div className='prevDiv'>
                        <button className='prevBtn' onClick={
                            () => { typesRef.current.scrollLeft -= typesRef.current.clientWidth * .7 }
                        }>
                            <Icon name="back" />
                        </button>
                    </div>
                }
                {
                    !isEnd &&
                    <div className='nextDiv'>
                        <button className='nextBtn' onClick={
                            () => { typesRef.current.scrollLeft += typesRef.current.clientWidth * .7 }
                        }>
                            <Icon name="forward" />
                        </button>
                    </div>
                }
                <ScrollContainer
                    style={{ scrollBehavior: "smooth" }}
                    innerRef={typesRef}
                    vertical={false}
                    onScroll={typesScroll}
                >
                    <div className='podcastTypesCardContainer'>
                        {
                            data.map(v => {
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
                                )
                            })}
                    </div>
                </ScrollContainer>

            </div>
        )
    }
    function podcastTypsSmallContainerF() {
        return (
            <div className='podcastCardContainerDiv col-'>
                <div className='podcastCardTop'>
                    <div className='podcastCardMessage'>
                        {title}
                    </div>
                </div>
                <div className='podcastTypesSmallCardContainer'>
                    {
                        data.map(v => {
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
                            )
                        })}
                </div>
            </div>
        )
    }
    switch (data[0].type) {
        case "type":
            console.log("type ", data[0].type)
            return podcastTypsContainerF();
        case "typeSmall":
            return podcastTypsSmallContainerF();
        default:
            return podcastContainerF();
    }

}

PodcastCardContainer.propTypes = {
    data: PropTypes.array,
    title: PropTypes.string
}
export default PodcastCardContainer