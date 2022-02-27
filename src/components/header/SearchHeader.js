import React, { useState } from 'react'
import { Icon } from '../Icons'

function SerachHeader() {
    const [searchXIcon, setSearchXIcon] = useState(false)
    return (
        <div className='searchContainer'>
            <div>
                <form>
                    <input id='searchI'
                        onInput={() => {
                            if (document.querySelector("#searchI").value == "") {
                                setSearchXIcon(false);
                            } else {
                                setSearchXIcon(true);
                            }
                        }}
                        className='searchInput' placeholder="Sanatçılar, şarkılar veya podcast'ler" />
                </form>
                <div className='searchIconAbsolute'>
                    <Icon name="searchBarSearch" />
                    {
                        searchXIcon ? (
                            <div className='inputClearDiv' onClick={() => {
                                document.querySelector("#searchI").value = "";
                                setSearchXIcon(false);
                            }}>
                                <Icon name="xClear" />
                            </div>
                        ) : ""
                    }
                </div>
            </div>
        </div>
    )
}

export default SerachHeader