import React from 'react';
import '../styles/App.css';

import LinkList from "./LinkList";
import CreateLink from "./CreateLink";

const App = () => {
    return (
        <div>
            <div>
                <LinkList/>
            </div>
            <br/>
            <hr/>
            <div>
                <CreateLink/>
            </div>
        </div>
    );
}

export default App;
