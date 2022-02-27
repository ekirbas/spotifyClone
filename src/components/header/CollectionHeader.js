import React from 'react'
import { NavLink } from 'react-router-dom'

function CollectionHeader() {
    return (
        <div className='collectionHeaderContainer'>
            <nav style={{ marginLeft: "24px" }}>
                <ul className='collectionHeaderUl'>
                    <li className='collectionHeaderLi'>
                        <NavLink to="/playlist1" className="collectionHeaderNavLink" activeClassName='collectionHeaderNavLinkActive'>
                            <span>
                                Çalma Listeleri
                            </span>
                        </NavLink>
                    </li>
                    <li className='collectionHeaderLi'>
                        <NavLink to="/playlist2" className="collectionHeaderNavLink" activeClassName='collectionHeaderNavLinkActive'>
                            <span>
                                Podcast'ler
                            </span>
                        </NavLink>
                    </li>
                    <li className='collectionHeaderLi'>
                        <NavLink to="/playlist3" className="collectionHeaderNavLink" activeClassName='collectionHeaderNavLinkActive'>
                            <span>
                                Sanatçılar
                            </span>
                        </NavLink>
                    </li>
                    <li className='collectionHeaderLi'>
                        <NavLink to="/playlist4" className="collectionHeaderNavLink" activeClassName='collectionHeaderNavLinkActive'>
                            <span>
                                Albümler
                            </span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default CollectionHeader