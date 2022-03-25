import React from 'react';
import PodcastCardContainer from '../components/cards/PodcastCardContainer';
import '../style/Search.less'
//import '../style/Home.less';

const dataSearch = [
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
const dataSearchTypes = [
    {
        id: "1",
        name: "Pop",
        img: 'https://t.scdn.co/images/0a74d96e091a495bb09c0d83210910c3',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "type",
        color: "#8D67AB"
    },
    {
        id: "2",
        name: "Dans ve Elektronik",
        img: 'https://i.scdn.co/image/ab67706f000000020377baccf69ede3cf1a26eff',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "type",
        color: "#DC148C"
    },
    {
        id: "3",
        name: "Hip Hop",
        img: 'https://i.scdn.co/image/ab67706f000000029bb6af539d072de34548d15c',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "type",
        color: "#BA5D07"
    },
    {
        id: "4",
        name: "Rock",
        img: 'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "type",
        color: "#E61E32"
    },
    {
        id: "5",
        name: "Sagopa Kajmer",
        img: 'https://i.scdn.co/image/ab67706f00000002f65970cda419a22790b45f14',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "type",
        color: "#8D67AB"
    },
    {
        id: "6",
        name: "Poster Girl",
        img: 'https://i.scdn.co/image/ab67706f00000002f65970cda419a22790b45f14',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "type",
        color: "#1E3264"
    },
]
const dataSearchTypesSmall = [
    {
        id: "1",
        name: "Pop",
        img: 'https://t.scdn.co/images/0a74d96e091a495bb09c0d83210910c3',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "typeSmall",
        color: "#8D67AB"
    },
    {
        id: "2",
        name: "Dans ve Elektronik",
        img: 'https://i.scdn.co/image/ab67706f000000020377baccf69ede3cf1a26eff',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "typeSmall",
        color: "#DC148C"
    },
    {
        id: "3",
        name: "Hip Hop",
        img: 'https://i.scdn.co/image/ab67706f000000029bb6af539d072de34548d15c',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "typeSmall",
        color: "#BA5D07"
    },
    {
        id: "4",
        name: "Rock",
        img: 'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "typeSmall",
        color: "#E61E32"
    },
    {
        id: "5",
        name: "Sagopa Kajmer",
        img: 'https://i.scdn.co/image/ab67706f00000002f65970cda419a22790b45f14',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "typeSmall",
        color: "#8D67AB"
    },
    {
        id: "6",
        name: "Poster Girl",
        img: 'https://i.scdn.co/image/ab67706f00000002f65970cda419a22790b45f14',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "typeSmall",
        color: "#1E3264"
    },
    {
        id: "7",
        name: "Dans ve Elektronik",
        img: 'https://i.scdn.co/image/ab67706f000000020377baccf69ede3cf1a26eff',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "typeSmall",
        color: "#DC148C"
    },
    {
        id: "8",
        name: "Hip Hop",
        img: 'https://i.scdn.co/image/ab67706f000000029bb6af539d072de34548d15c',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "typeSmall",
        color: "#BA5D07"
    },
    {
        id: "9",
        name: "Rock",
        img: 'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "typeSmall",
        color: "#E61E32"
    },
    {
        id: "10",
        name: "Sagopa Kajmer",
        img: 'https://i.scdn.co/image/ab67706f00000002f65970cda419a22790b45f14',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "typeSmall",
        color: "#8D67AB"
    },
    {
        id: "11",
        name: "Poster Girl",
        img: 'https://i.scdn.co/image/ab67706f00000002f65970cda419a22790b45f14',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "typeSmall",
        color: "#1E3264"
    },
    {
        id: "12",
        name: "Pop",
        img: 'https://t.scdn.co/images/0a74d96e091a495bb09c0d83210910c3',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "typeSmall",
        color: "#8D67AB"
    },
    {
        id: "13",
        name: "Dans ve Elektronik",
        img: 'https://i.scdn.co/image/ab67706f000000020377baccf69ede3cf1a26eff',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "typeSmall",
        color: "#DC148C"
    },
    {
        id: "14",
        name: "Hip Hop",
        img: 'https://i.scdn.co/image/ab67706f000000029bb6af539d072de34548d15c',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "typeSmall",
        color: "#BA5D07"
    },
    {
        id: "15",
        name: "Rock",
        img: 'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "typeSmall",
        color: "#E61E32"
    },
    {
        id: "16",
        name: "Sagopa Kajmer",
        img: 'https://i.scdn.co/image/ab67706f00000002f65970cda419a22790b45f14',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "typeSmall",
        color: "#8D67AB"
    },
    {
        id: "17",
        name: "Poster Girl",
        img: 'https://i.scdn.co/image/ab67706f00000002f65970cda419a22790b45f14',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "typeSmall",
        color: "#1E3264"
    },
    {
        id: "18",
        name: "Dans ve Elektronik",
        img: 'https://i.scdn.co/image/ab67706f000000020377baccf69ede3cf1a26eff',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "typeSmall",
        color: "#DC148C"
    },
    {
        id: "19",
        name: "Hip Hop",
        img: 'https://i.scdn.co/image/ab67706f000000029bb6af539d072de34548d15c',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "typeSmall",
        color: "#BA5D07"
    },
    {
        id: "20",
        name: "Rock",
        img: 'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "typeSmall",
        color: "#E61E32"
    },
    {
        id: "21",
        name: "Sagopa Kajmer",
        img: 'https://i.scdn.co/image/ab67706f00000002f65970cda419a22790b45f14',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "typeSmall",
        color: "#8D67AB"
    },
    {
        id: "22",
        name: "Poster Girl",
        img: 'https://i.scdn.co/image/ab67706f00000002f65970cda419a22790b45f14',
        isPlay: false,
        to: '/',
        explanation: "Sanatçı",
        type: "typeSmall",
        color: "#1E3264"
    },
]

function Search() {
    return (
        <div className='search col-'>
            <PodcastCardContainer data={dataSearchTypes} title={"En çok dinlediğin türler"} />

            <PodcastCardContainer data={dataSearchTypesSmall} title={"Hepsine göz at"} />
        </div>

    );
}

export default Search;
