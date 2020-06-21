import React from 'react';
import instance from "../APIs/networking"
import Section from './Section';
import Buttons from './Buttons';

const ProjectsCell = props => {
    const obj = props.obj
    var buttons = []
    for (var i = 0; i < obj.linksLength(); i++) {
      var link = obj.links(i)
      buttons.push(<Buttons key={link.type()} obj={link}/>)
    }
    let width = window.innerWidth;
    let detailsCSS = width < 1000 ? "details-small white": "details-normal white";
    return (
        <li className="cell"> 
          <div> <h1 className="white">{obj.name()}</h1> </div>
          <p className={detailsCSS}>{obj.details()}</p>
          <TechStack stack={obj}/>
          <div className="buttons-container">
            {buttons}
          </div>
        </li>
    )
};

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

export default ProjectsCell;