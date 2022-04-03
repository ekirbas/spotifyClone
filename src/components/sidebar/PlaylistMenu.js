import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../../style/PlaylistMenu.less';


function PlaylistMenu() {
    const playlistData = useSelector(state => state.cardsData.playlistData)
    return (
        <div className='playlistMenu'>
            <hr className='playlistHr' />
            <nav>
                <ul className='playlistUl'>
                    {playlistData.map((v, index) => {
                        return (
                            <li key={index}>
                                <NavLink exact to={`/playlist/${v.to}`} className="playlistNavLink" activeClassName='playlistLinkActive'>
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