import React from 'react'
import WelcomeCard from './WelcomeCard'
import { useSelector } from 'react-redux'

/* const dataWelcome = [
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
] */

function WelcomeCardContainer() {
    const dataWelcome = useSelector(state => state.cardsData.dataWelcome)
    return (
        <div className='welcomeCardContainer col-'>
            <div className='welcomeMessage'>
                İyi akşamlar
            </div>
            <div className='cardContainer'>
                {dataWelcome.map(v => {
                    return <WelcomeCard img={v.img} name={v.name} to={v.to} key={v.id} />
                })}
            </div>

        </div>
    )
}

export default WelcomeCardContainer