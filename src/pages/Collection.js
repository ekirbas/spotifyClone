import React from 'react';
import PodcastCardContainer from '../components/cards/PodcastCardContainer';
import '../style/Collection.less';
import { useSelector } from 'react-redux'


function Collection() {
    const playlistData = useSelector(state => state.cardsData.playlistData)

    return (
        <div className='collection'>
            <PodcastCardContainer type='playListCollection' data={playlistData} title='Çalma listeleri' />
        </div>
    );
}

export default Collection;
