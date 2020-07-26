import React from 'react';

const TechStack = (props) => {
    var obj = props.stack
    if (obj.techStackLength() === 0) {
      return null;
    }
    var stacks = []
    for (var i = 0; i < obj.techStackLength(); i++) {
      var stack = obj.techStack(i)
      stacks.push(<li className="li" key={stack}>{stack}</li>)
    }
  
    return (
      <div>
        <p className="white">Tech Stack: </p>
        <ul className="white">
          {stacks}
        </ul>
      </div>
    )
}
const ButtonsView = (buttons) => {
    return (
        <div className="buttons-container">
        {buttons}
        </div>
    )
}

const DetailsView = (props) => {
    let detailsCSS = props.isMobile ? "details-small white" : "details-normal white";
    return (
      <div className={detailsCSS}>
        <p className="detailstext">{props.obj.details()}</p>
        <TechStack stack={props.obj}/>
        {!props.isMobile ? ButtonsView(props.buttons) : null}
      </div>
    )
}

export default {
    DetailsView: DetailsView,
    ButtonsView: ButtonsView,
}