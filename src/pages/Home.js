import React from 'react';
import '../style/Home.less';
import WelcomeCardContainer from '../components/cards/WelcomeCardContainer'
import PodcastCardContainer from '../components/cards/PodcastCardContainer';

const dataPodcast = [
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
        name: "Haftalık Keşif",
        img: 'https://i.scdn.co/image/ab67706f00000002f65970cda419a22790b45f14',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "artist"
    },
    {
        id: "3",
        name: "Daily Mix 3",
        img: 'https://i.scdn.co/image/ab67706f00000002d1e5d472bdc16c4522f2c506',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "artist"
    },
    {
        id: "4",
        name: "Dinlenir",
        img: 'https://i.scdn.co/image/ab67706f00000002f65970cda419a22790b45f14',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "artist"
    },
    {
        id: "5",
        name: "Sagopa Kajmer",
        img: 'https://i.scdn.co/image/ab67706f00000002f65970cda419a22790b45f14',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "artist"
    },
    {
        id: "6",
        name: "Poster Girl",
        img: 'https://i.scdn.co/image/ab67706f00000002f65970cda419a22790b45f14',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "artist"
    },
]

function Home() {
    return (
        <>
            <div className='home col-'>
                <WelcomeCardContainer />
                <PodcastCardContainer data={dataPodcast} title={"En sevdiğin sanatçılar"} />
            </div>

        </>
    );
}

export default Home;
