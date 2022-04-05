import { createSlice } from '@reduxjs/toolkit'

export const CardsDataSlice = createSlice({
    name: 'cardsData',
    initialState: {
        dataPodcast:
            [
                {
                    id: "a1",
                    name: "Ava Max",
                    img: 'https://i.scdn.co/image/ab67706f00000002d1e5d472bdc16c4522f2c506',
                    isPlay: false,
                    to: '/',
                    explanation: "Sanatçı",
                    type: "playList",
                    mediaSrc: "https://dinlehome.files.wordpress.com/2020/03/alan-walker-ava-max-alone-pt.-ii-lyrics.mp3"
                },
                {
                    id: "a2",
                    name: "Mega Hit Mix",
                    img: 'https://i.scdn.co/image/ab67706f000000023a0ce8df9f957525f62c9443',
                    isPlay: false,
                    to: '/',
                    explanation: "Sanatçı",
                    type: "playList",
                    mediaSrc: "https://dinlehome.files.wordpress.com/2020/12/taylor-swift-willow-official-music-video.mp3"
                },
                {
                    id: "a3",
                    name: "Billie Eilish",
                    img: 'https://i.scdn.co/image/ab6761610000f178d8b9980db67272cb4d2c3daf',
                    isPlay: false,
                    to: '/',
                    explanation: "Sanatçı",
                    type: "artist",
                    mediaSrc: "https://dinlehome.files.wordpress.com/2021/07/mp3indirdur-billie-eilish-lovely.mp3"
                },
                {
                    id: "a4",
                    name: "Shakira",
                    img: 'https://i.scdn.co/image/ab6761610000f178ded9d5f8bb8611aad61df058',
                    isPlay: false,
                    to: '/',
                    explanation: "Sanatçı",
                    type: "artist",
                    mediaSrc: "https://dinlehome.files.wordpress.com/2020/06/dua-lipa-break-my-heart.mp3"
                },
                {
                    id: "a5",
                    name: "New Rock Hits",
                    img: 'https://i.scdn.co/image/ab67706c0000da844b5feba25da20f357751808b',
                    isPlay: false,
                    to: '/',
                    explanation: "Sanatçı",
                    type: "playList",
                    mediaSrc: "https://dinlehome.files.wordpress.com/2020/03/camila-cabello-my-oh-my.mp3"
                },
                {
                    id: "a6",
                    name: "Zara Larsson",
                    img: 'https://i.scdn.co/image/ab6761610000f178a63a2b0ceb57eb509d67c90f',
                    isPlay: false,
                    to: '/',
                    explanation: "Sanatçı",
                    type: "artist",
                    mediaSrc: "https://dinlehome.files.wordpress.com/2020/03/nk-elefante.mp3"
                },
                {
                    id: "a7",
                    name: "Zara Larsson",
                    img: 'https://i.scdn.co/image/ab6761610000f178a63a2b0ceb57eb509d67c90f',
                    isPlay: false,
                    to: '/',
                    explanation: "Sanatçı",
                    type: "artist",
                    mediaSrc: "https://dinlehome.files.wordpress.com/2019/08/shawn-mendes-camila-cabello-sec3b1orita.mp3"
                },
            ],
        dataWelcome: [
            {
                id: "b1",
                name: "Yabancı Pop",
                img: 'https://i.scdn.co/image/ab67706f00000002264798b2ae5833eff35d1fbb',
                isPlay: false,
                to: '/'
            },
            {
                id: "b2",
                name: "Haftalık Keşif",
                img: 'https://i.scdn.co/image/ab67706f00000002f65970cda419a22790b45f14',
                isPlay: false,
                to: '/'
            },
            {
                id: "b3",
                name: "Daily Mix 3",
                img: 'https://i.scdn.co/image/ab67706f000000024534650d2b3552c0b8ad531a',
                isPlay: false,
                to: '/'
            },
            {
                id: "b4",
                name: "Dinlenir",
                img: 'https://mosaic.scdn.co/640/ab67616d00001e022751f15ff6c8174e540b6fb4ab67616d00001e0253a2e11c1bde700722fecd2eab67616d00001e0289a8fab8bf8cd2b77da1fd17ab67616d00001e02df9a35baaa98675256b35177',
                isPlay: false,
                to: '/'
            },
            {
                id: "b5",
                name: "Sagopa Kajmer",
                img: 'https://thisis-images.scdn.co/37i9dQZF1DZ06evO0Z5EJ2-default.jpg',
                isPlay: false,
                to: '/'
            },
            {
                id: "b6",
                name: "Kiiara Radio",
                img: 'https://seeded-session-images.scdn.co/v1/img/artist/4u5smJBskI6Adzv08PuiUP/tr',
                isPlay: false,
                to: '/'
            },
        ],
        dataSearchTypes: [
            {
                id: "c1",
                name: "Pop",
                img: 'https://t.scdn.co/images/0a74d96e091a495bb09c0d83210910c3',
                isPlay: false,
                to: '/',
                explanation: "Sanatçı",
                type: "type",
                color: "#8D67AB"
            },
            {
                id: "c2",
                name: "Dans ve Elektronik",
                img: 'https://i.scdn.co/image/ab67706f000000020377baccf69ede3cf1a26eff',
                isPlay: false,
                to: '/',
                explanation: "Sanatçı",
                type: "type",
                color: "#DC148C"
            },
            {
                id: "c3",
                name: "Hip Hop",
                img: 'https://i.scdn.co/image/ab67706f000000029bb6af539d072de34548d15c',
                isPlay: false,
                to: '/',
                explanation: "Sanatçı",
                type: "type",
                color: "#BA5D07"
            },
            {
                id: "c4",
                name: "Rock",
                img: 'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730',
                isPlay: false,
                to: '/',
                explanation: "Sanatçı",
                type: "type",
                color: "#E61E32"
            },
            {
                id: "c5",
                name: "Sagopa Kajmer",
                img: 'https://i.scdn.co/image/ab67706f00000002f65970cda419a22790b45f14',
                isPlay: false,
                to: '/',
                explanation: "Sanatçı",
                type: "type",
                color: "#8D67AB"
            },
            {
                id: "c6",
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
                id: "d1",
                name: "Pop",
                img: 'https://t.scdn.co/images/0a74d96e091a495bb09c0d83210910c3',
                isPlay: false,
                to: '/',
                explanation: "Sanatçı",
                type: "typeSmall",
                color: "#8D67AB"
            },
            {
                id: "d2",
                name: "Dans ve Elektronik",
                img: 'https://i.scdn.co/image/ab67706f000000020377baccf69ede3cf1a26eff',
                isPlay: false,
                to: '/',
                explanation: "Sanatçı",
                type: "typeSmall",
                color: "#DC148C"
            },
            {
                id: "d3",
                name: "Hip Hop",
                img: 'https://i.scdn.co/image/ab67706f000000029bb6af539d072de34548d15c',
                isPlay: false,
                to: '/',
                explanation: "Sanatçı",
                type: "typeSmall",
                color: "#BA5D07"
            },
            {
                id: "d4",
                name: "Rock",
                img: 'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730',
                isPlay: false,
                to: '/',
                explanation: "Sanatçı",
                type: "typeSmall",
                color: "#E61E32"
            },
            {
                id: "d5",
                name: "Sagopa Kajmer",
                img: 'https://i.scdn.co/image/ab67706f00000002f65970cda419a22790b45f14',
                isPlay: false,
                to: '/',
                explanation: "Sanatçı",
                type: "typeSmall",
                color: "#8D67AB"
            },
            {
                id: "d6",
                name: "Poster Girl",
                img: 'https://i.scdn.co/image/ab67706f00000002f65970cda419a22790b45f14',
                isPlay: false,
                to: '/',
                explanation: "Sanatçı",
                type: "typeSmall",
                color: "#1E3264"
            },
            {
                id: "d7",
                name: "Dans ve Elektronik",
                img: 'https://i.scdn.co/image/ab67706f000000020377baccf69ede3cf1a26eff',
                isPlay: false,
                to: '/',
                explanation: "Sanatçı",
                type: "typeSmall",
                color: "#DC148C"
            },
            {
                id: "d8",
                name: "Hip Hop",
                img: 'https://i.scdn.co/image/ab67706f000000029bb6af539d072de34548d15c',
                isPlay: false,
                to: '/',
                explanation: "Sanatçı",
                type: "typeSmall",
                color: "#BA5D07"
            },
            {
                id: "d9",
                name: "Rock",
                img: 'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730',
                isPlay: false,
                to: '/',
                explanation: "Sanatçı",
                type: "typeSmall",
                color: "#E61E32"
            },
            {
                id: "d10",
                name: "Sagopa Kajmer",
                img: 'https://i.scdn.co/image/ab67706f00000002f65970cda419a22790b45f14',
                isPlay: false,
                to: '/',
                explanation: "Sanatçı",
                type: "typeSmall",
                color: "#8D67AB"
            },
            {
                id: "d11",
                name: "Poster Girl",
                img: 'https://i.scdn.co/image/ab67706f00000002f65970cda419a22790b45f14',
                isPlay: false,
                to: '/',
                explanation: "Sanatçı",
                type: "typeSmall",
                color: "#1E3264"
            },
            {
                id: "d12",
                name: "Pop",
                img: 'https://t.scdn.co/images/0a74d96e091a495bb09c0d83210910c3',
                isPlay: false,
                to: '/',
                explanation: "Sanatçı",
                type: "typeSmall",
                color: "#8D67AB"
            },
            {
                id: "d13",
                name: "Dans ve Elektronik",
                img: 'https://i.scdn.co/image/ab67706f000000020377baccf69ede3cf1a26eff',
                isPlay: false,
                to: '/',
                explanation: "Sanatçı",
                type: "typeSmall",
                color: "#DC148C"
            },
            {
                id: "d14",
                name: "Hip Hop",
                img: 'https://i.scdn.co/image/ab67706f000000029bb6af539d072de34548d15c',
                isPlay: false,
                to: '/',
                explanation: "Sanatçı",
                type: "typeSmall",
                color: "#BA5D07"
            },
            {
                id: "d15",
                name: "Rock",
                img: 'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730',
                isPlay: false,
                to: '/',
                explanation: "Sanatçı",
                type: "typeSmall",
                color: "#E61E32"
            },
            {
                id: "d16",
                name: "Sagopa Kajmer",
                img: 'https://i.scdn.co/image/ab67706f00000002f65970cda419a22790b45f14',
                isPlay: false,
                to: '/',
                explanation: "Sanatçı",
                type: "typeSmall",
                color: "#8D67AB"
            },
            {
                id: "d17",
                name: "Poster Girl",
                img: 'https://i.scdn.co/image/ab67706f00000002f65970cda419a22790b45f14',
                isPlay: false,
                to: '/',
                explanation: "Sanatçı",
                type: "typeSmall",
                color: "#1E3264"
            },
            {
                id: "d18",
                name: "Dans ve Elektronik",
                img: 'https://i.scdn.co/image/ab67706f000000020377baccf69ede3cf1a26eff',
                isPlay: false,
                to: '/',
                explanation: "Sanatçı",
                type: "typeSmall",
                color: "#DC148C"
            },
            {
                id: "d19",
                name: "Hip Hop",
                img: 'https://i.scdn.co/image/ab67706f000000029bb6af539d072de34548d15c',
                isPlay: false,
                to: '/',
                explanation: "Sanatçı",
                type: "typeSmall",
                color: "#BA5D07"
            },
            {
                id: "d20",
                name: "Rock",
                img: 'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730',
                isPlay: false,
                to: '/',
                explanation: "Sanatçı",
                type: "typeSmall",
                color: "#E61E32"
            },
            {
                id: "d21",
                name: "Sagopa Kajmer",
                img: 'https://i.scdn.co/image/ab67706f00000002f65970cda419a22790b45f14',
                isPlay: false,
                to: '/',
                explanation: "Sanatçı",
                type: "typeSmall",
                color: "#8D67AB"
            },
            {
                id: "d22",
                name: "Poster Girl",
                img: 'https://i.scdn.co/image/ab67706f00000002f65970cda419a22790b45f14',
                isPlay: false,
                to: '/',
                explanation: "Sanatçı",
                type: "typeSmall",
                color: "#1E3264"
            },
        ],
        playlistData: [
            {
                id: "e1",
                name: "Yabancı Pop",
                img: 'https://t.scdn.co/images/0a74d96e091a495bb09c0d83210910c3',
                isPlay: false,
                to: '/',
                explanation: "Sanatçı",
                type: "playListCollection",
                color: "#8D67AB",
                mediaSrc: "https://dinlehome.files.wordpress.com/2020/03/camila-cabello-my-oh-my.mp3"
            },
            {
                id: "e2",
                name: "Dans ve Elektronik",
                img: 'https://i.scdn.co/image/ab67706f000000020377baccf69ede3cf1a26eff',
                isPlay: false,
                to: '/',
                explanation: "Sanatçı",
                type: "playListCollection",
                color: "#DC148C",
                mediaSrc: "https://dinlehome.files.wordpress.com/2019/08/shawn-mendes-camila-cabello-sec3b1orita.mp3"
            },
            {
                id: "e3",
                name: "Çılgın",
                img: 'https://i.scdn.co/image/ab67706f000000029bb6af539d072de34548d15c',
                isPlay: false,
                to: '/',
                explanation: "Sanatçı",
                type: "playListCollection",
                color: "#BA5D07",
                mediaSrc: "https://dinlehome.files.wordpress.com/2020/03/camila-cabello-my-oh-my.mp3"
            },
            {
                id: "e4",
                name: "Rock",
                img: 'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730',
                isPlay: false,
                to: '/',
                explanation: "Sanatçı",
                type: "playListCollection",
                color: "#E61E32",
                mediaSrc: "https://dinlehome.files.wordpress.com/2019/08/shawn-mendes-camila-cabello-sec3b1orita.mp3"
            },
            {
                id: "e5",
                name: "Sago",
                img: 'https://i.scdn.co/image/ab67706f00000002f65970cda419a22790b45f14',
                isPlay: false,
                to: '/',
                explanation: "Sanatçı",
                type: "playListCollection",
                color: "#8D67AB",
                mediaSrc: "https://dinlehome.files.wordpress.com/2020/06/dua-lipa-break-my-heart.mp3"
            },
            {
                id: "e6",
                name: "Zara",
                img: 'https://i.scdn.co/image/ab67706f00000002f65970cda419a22790b45f14',
                isPlay: false,
                to: '/',
                explanation: "Sanatçı",
                type: "playListCollection",
                color: "#1E3264",
                mediaSrc: "https://dinlehome.files.wordpress.com/2020/06/dua-lipa-break-my-heart.mp3"
            },
        ],
        mediaPlayerData: {
            id: "x1",
            name: "Ava Max",
            img: 'https://i.scdn.co/image/ab67706f00000002d1e5d472bdc16c4522f2c506',
            isPlay: false,
            to: '/',
            explanation: "Sanatçı",
            type: "playListCollection",
            mediaSrc: "https://dinlehome.files.wordpress.com/2020/03/alan-walker-ava-max-alone-pt.-ii-lyrics.mp3"
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