import React from 'react';
import '../style/Content.less'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from '../pages/Home';
import Search from '../pages/Search';
import Collection from '../pages/Collection';

function Content() {
    return (
        <>
            <div className='content'>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/search">
                        <Search />
                    </Route>
                    <Route path="/collection">
                        <Collection />
                    </Route>
                </Switch>
            </div>
        </>
    );
}

export default Content;
