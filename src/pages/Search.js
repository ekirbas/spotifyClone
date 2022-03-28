import React from 'react';
import PodcastCardContainer from '../components/cards/PodcastCardContainer';
import { useSelector } from 'react-redux'
import '../style/Search.less'
//import '../style/Home.less';


function Search() {
    const dataSearchTypes = useSelector(state => state.cardsData.dataSearchTypes)
    const dataSearchTypesSmall = useSelector(state => state.cardsData.dataSearchTypesSmall)
    return (
        <div className='search col-'>
            <PodcastCardContainer data={dataSearchTypes} title={"En çok dinlediğin türler"} />

            <PodcastCardContainer data={dataSearchTypesSmall} title={"Hepsine göz at"} />
        </div>

    );
}

export default Search;
