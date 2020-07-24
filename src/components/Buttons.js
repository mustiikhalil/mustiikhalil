import React from 'react';

const GITHUB_URL = "https://github.com/"
const APPSTORE_URL = "https://apps.apple.com/"
const Buttons = props => {
    var obj = props.obj
    var name = obj.type() === 0 ? "Github" : "Appstore"
    var imgSrc = obj.type() === 0 ? "fab fa-github size" : "fab fa-app-store size"
    const routeChange = () => {
        var url = ""
        if (obj.type() === 0) {
            url = GITHUB_URL
        } else {
            url = APPSTORE_URL
        }
        url += obj.url()
        window.open(url, '_blank');
    }
    
    return (
        <button className="button" onClick={routeChange}>
            <div className="button-details-container">
                <i className={imgSrc}></i>
                <div className="spacing-left"> {name} </div>
            </div>
        </button>
    )
}

export default Buttons;