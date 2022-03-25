import React from 'react'
import WelcomeCard from './WelcomeCard'

const dataWelcome = [
    {
        id: "1",
        name: "Yabancı Pop",
        img: 'https://i.scdn.co/image/ab67706f00000002f65970cda419a22790b45f14',
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
        img: 'https://i.scdn.co/image/ab67706f00000002f65970cda419a22790b45f14',
        isPlay: false,
        to: '/'
    },
    {
        id: "4",
        name: "Dinlenir",
        img: 'https://i.scdn.co/image/ab67706f00000002f65970cda419a22790b45f14',
        isPlay: false,
        to: '/'
    },
    {
        id: "5",
        name: "Sagopa Kajmer",
        img: 'https://i.scdn.co/image/ab67706f00000002f65970cda419a22790b45f14',
        isPlay: false,
        to: '/'
    },
    {
        id: "6",
        name: "Poster Girl",
        img: 'https://i.scdn.co/image/ab67706f00000002f65970cda419a22790b45f14',
        isPlay: false,
        to: '/'
    },
]

function WelcomeCardContainer() {
    return (
        <div className='welcomeCardContainer col-'>
            <div className='welcomeMessage'>
                İyi akşamlar
            </div>
            <div className='cardContainer'>
                {dataWelcome.map(v => {
                    return <WelcomeCard img={v.img} name={v.name} to={v.to} />
                })}
            </div>

        </div>
    )
}

export default WelcomeCardContainer