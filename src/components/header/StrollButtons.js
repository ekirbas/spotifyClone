import React, { useState } from 'react'
import { Icon } from '../Icons'
import { useHistory } from 'react-router-dom'

function StrollButtons() {
    const history = useHistory();
    return (
        <div className='strollContainer'>
            <button className='backBtn' onClick={history.goBack}>
                <Icon name="back" />
            </button>
            <button className='forwardBtn' onClick={history.goForward}>
                <Icon name="forward" />
            </button>
        </div>
    )
}

export default StrollButtons