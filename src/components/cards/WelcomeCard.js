import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../Icons'
import PropTypes from 'prop-types'

function WelcomeCard(props) {
    const { img, to, name } = props;
    return (
        <div className='cardArea'>
            <img className='cardImg row-12' src={img} />
            <div className='cardTextContainer row-12 col-'>
                <Link to={to} className='cardText Link col-'>
                    {name}
                </Link>
                <div className='cardPlay'>
                    <button className='cardPlayBtn'>
                        <Icon name="cardPlay" />
                    </button>
                </div>
            </div>
            <div className='cardClickDiv col- row-12' />
        </div>
    )
}
WelcomeCard.propTypes = {
    img: PropTypes.string,
    to: PropTypes.string,
    name: PropTypes.string
}

export default WelcomeCard