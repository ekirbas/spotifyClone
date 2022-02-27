import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../style/PlaylistMenu.less';


const playlistData = [
    {
        name: "Yabancı Pop",
        href: 'pop'
    },
    {
        name: "Dinlenir",
        href: 'dinlenir'
    },
    {
        name: "Arkada Çalsın",
        href: 'arkada'
    },
    {
        name: "Pray Radio",
        href: 'pray'
    },
    {
        name: "Yabancı Pop",
        href: 'pop'
    },
    {
        name: "Dinlenir",
        href: 'dinlenir'
    },
    {
        name: "Arkada Çalsın",
        href: 'arkada'
    },
    {
        name: "Yabancı Pop",
        href: 'pop'
    },
    {
        name: "Dinlenir",
        href: 'dinlenir'
    },
    {
        name: "Arkada Çalsın",
        href: 'arkada'
    },
    {
        name: "Yabancı Pop",
        href: 'pop'
    },
    {
        name: "Dinlenir",
        href: 'dinlenir'
    },
    {
        name: "Arkada Çalsın",
        href: 'arkada'
    },
]

function PlaylistMenu() {
    return (
        <div className='playlistMenu'>
            <hr className='playlistHr' />
            <nav>
                <ul className='playlistUl'>
                    {playlistData.map((v, index) => {
                        return (
                            <li key={index}>
                                <NavLink exact to={`/playlist/${v.href}`} className="playlistNavLink" activeClassName='playlistLinkActive'>
                                    {v.name}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default PlaylistMenu;