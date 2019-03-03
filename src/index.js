// import React and ReactDom

import React from 'react';
import ReactDOM from 'react-dom';


function getButtonText() {

    return 'Click on me!';
}


// create react component

const App =  () => {

    return (
        <div>
            <label className="label" htmlFor="name"> Enter name : </label>
            <input id="name" type="text"/>
            <button style={{backgroundColor:'blue', color:'white'}} > {getButtonText()}</button>

        </div>
    );
};


// show the react component on the screen


ReactDOM.render(
    <App />,
    document.getElementById('root')
);