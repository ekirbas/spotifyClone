import React from 'react';
import '../style/Home.less';
import { useSelector } from 'react-redux'
import WelcomeCardContainer from '../components/cards/WelcomeCardContainer'
import PodcastCardContainer from '../components/cards/PodcastCardContainer';

/* const dataPodcast = [
    {
        id: "1",
        name: "Ava Max",
        img: 'https://i.scdn.co/image/ab67706f00000002d1e5d472bdc16c4522f2c506',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "playList"
    },
    {
        id: "2",
        name: "Mega Hit Mix",
        img: 'https://i.scdn.co/image/ab67706f000000023a0ce8df9f957525f62c9443',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "playList"
    },
    {
        id: "3",
        name: "Billie Eilish",
        img: 'https://i.scdn.co/image/ab6761610000f178d8b9980db67272cb4d2c3daf',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "artist"
    },
    {
        id: "4",
        name: "Shakira",
        img: 'https://i.scdn.co/image/ab6761610000f178ded9d5f8bb8611aad61df058',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "artist"
    },
    {
        id: "5",
        name: "New Rock Hits",
        img: 'https://i.scdn.co/image/ab67706c0000da844b5feba25da20f357751808b',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "playList"
    },
    {
        id: "6",
        name: "Zara Larsson",
        img: 'https://i.scdn.co/image/ab6761610000f178a63a2b0ceb57eb509d67c90f',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "artist"
    },
    {
        id: "7",
        name: "Zara Larsson",
        img: 'https://i.scdn.co/image/ab6761610000f178a63a2b0ceb57eb509d67c90f',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "artist"
    },
] */

function Home() {
    const dataPodcast = useSelector(state => state.cardsData.dataPodcast)
    return (
        <>
            <div className='home col-'>
                <WelcomeCardContainer />
                <PodcastCardContainer data={dataPodcast} title={"En sevdiğin sanatçılar"} />
                <PodcastCardContainer data={dataPodcast} title={"Moduna göre"} />

            </div>

        </>
    );
}

export default Home;
