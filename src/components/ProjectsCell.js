import React from 'react';
import instance from "../APIs/networking"
import Section from './Section';

const ProjectsCell = props => {
    const obj = props.obj
    return (
        <li className="cell"> 
          <div> <h1 className="white">{obj.name}</h1> </div>
          <p className="white">{obj.details}</p>
          <TechStack stack={obj.techStack}/>
        </li>
    )
};

const TechStack = props => {
  if (props.stack.length === 0) {
    return null;
  }

  const stack = props.stack.map((stack) => <li>{stack}</li>)
  return (
    <div>
      <p className="white">Tech Stack: </p>
      <ul className="white">
        {stack}
      </ul>
    </div>
  )
}

export default ProjectsCell;