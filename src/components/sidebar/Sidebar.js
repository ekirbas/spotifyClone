import React from 'react';
import '../../style/Sidebar.less'
import spotifySvg from '../../images/logo.svg';
import Menu from './Menu';
import { Icon } from '../Icons';
import PlaylistMenu from './PlaylistMenu';


function Sidebar() {

    // console.log("icon", Icon)

    return (
        <div className='sidebar'>
            <div style={{ height: "65px" }}>
                <a href='#' className='spotifyRoute'>
                    <img src={spotifySvg} />
                </a>
            </div>
            <Menu />
            <div className='sidebarButtons'>
                <button className='cPlayListButton'>
                    <div className='cPlayListSvgBackground'>
                        <Icon name="plus" />
                    </div>
                    <span className='btnText'>Çalma Listesi Oluştur</span>
                </button>
                <button className='favSongsButton'>
                    <div className='favSongsSvgBackground'>
                        <Icon name="fav" />
                    </div>
                    <span className='btnText'>Beğenilen Şarkılar</span>
                </button>

            </div>
            <PlaylistMenu />
        </div>
    );
}

export default Sidebar;
