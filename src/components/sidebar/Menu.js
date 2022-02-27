import React from 'react';
import { Icon } from '../Icons'
import { NavLink } from 'react-router-dom';

function Menu() {
    return (
        <div className='menu'>
            <nav>
                <ul>
                    <li>
                        <NavLink exact to={'/'} className="navLinks" activeClassName='linkActive'>
                            <span >
                                <Icon name="home" />
                            </span>
                            Ana sayfa
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/search'} className="navLinks" activeClassName='linkActive'>
                            <span>
                                <Icon name="search" />
                            </span>
                            Ara
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/collection'} className="navLinks" activeClassName='linkActive'>
                            <span>
                                <Icon name="collection" />
                            </span>
                            Kitaplığın
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;