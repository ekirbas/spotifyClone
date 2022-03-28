import { createSlice } from '@reduxjs/toolkit'

export const CardsDataSlice = createSlice({
    name: 'cardsData',
    initialState: {
        dataPodcast:
            [
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
            ],
        dataWelcome: [
            {
                id: "1",
                name: "Yabancı Pop",
                img: 'https://i.scdn.co/image/ab67706f00000002264798b2ae5833eff35d1fbb',
                isPlay: false,
                to: '/'
            },
            {
                id: "2",
                name: "Haftalık Keşif",
                img: 'https://i.scdn.co/image/ab67706f00000002f65970cda419a22790b45f14',
                isPlay: false,
                to: '/'
            },
            {
                id: "3",
                name: "Daily Mix 3",
                img: 'https://i.scdn.co/image/ab67706f000000024534650d2b3552c0b8ad531a',
                isPlay: false,
                to: '/'
            },
            {
                id: "4",
                name: "Dinlenir",
                img: 'https://mosaic.scdn.co/640/ab67616d00001e022751f15ff6c8174e540b6fb4ab67616d00001e0253a2e11c1bde700722fecd2eab67616d00001e0289a8fab8bf8cd2b77da1fd17ab67616d00001e02df9a35baaa98675256b35177',
                isPlay: false,
                to: '/'
            },
            {
                id: "5",
                name: "Sagopa Kajmer",
                img: 'https://thisis-images.scdn.co/37i9dQZF1DZ06evO0Z5EJ2-default.jpg',
                isPlay: false,
                to: '/'
            },
            {
                id: "6",
                name: "Kiiara Radio",
                img: 'https://seeded-session-images.scdn.co/v1/img/artist/4u5smJBskI6Adzv08PuiUP/tr',
                isPlay: false,
                to: '/'
            },
        ],
        dataSearchTypes: [
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
        ],
        dataSearchTypesSmall: [
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
        ],
        mediaPlayerData: {
            id: "1",
            name: "Ava Max",
            img: 'https://i.scdn.co/image/ab67706f00000002d1e5d472bdc16c4522f2c506',
            isPlay: false,
            to: '/',
            explanation: "Sanatçı",
            type: "playList"
        }
    },
    reducers: {
        selectedPodcast: (state, action) => {
            state.mediaPlayerData = action.payload
        }
    }

})
export const { selectedPodcast } = CardsDataSlice.actions

export default CardsDataSlice.reducer