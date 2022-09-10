import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import Header from './Header';
import history from '../history';

const ClientId = "928908777998-61g8la0c1pd5rbeovv77hfopcunh3ncr.apps.googleusercontent.com";

const App = () => {
    return(
        <div className='ui container'>
            <Router history = {history} >
                <div>
                    <Header />
                    <Switch>
                        <Route path = "/" exact component = {StreamList}/>
                        <Route path = "/streams/new" component = {StreamCreate} />
                        <Route path = "/streams/edit/:id" component = {StreamEdit}/>
                        <Route path = "/streams/delete/:id" component = {StreamDelete} />
                        <Route path = "/streams/:id" component = {StreamShow} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;