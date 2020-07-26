import React from 'react'
import Buttons from './Buttons'
import Views from './DetailsView'
import ScreenShotsView from './ScreenShotsView'

const DetailsView = Views.DetailsView;
const ButtonsView = Views.ButtonsView;

const ProjectsCell = props => {
    const obj = props.obj
    var buttons = []
    for (var i = 0; i < obj.linksLength(); i++) {
      var link = obj.links(i)
      buttons.push(<Buttons key={link.type()} obj={link}/>)
    }
    let isMobile = window.innerWidth < 1300
    let containerView = isMobile ? "" : "details-bigscreen";
    return (
        <li className="cell">
          <div> <h1 className="white">{obj.name()}</h1> </div>
          <div className={containerView}>
            <DetailsView obj={obj} buttons={buttons} isMobile={isMobile}/>
            <ScreenShotsView obj={obj} isMobile={isMobile}/>
            {isMobile ? ButtonsView(buttons) : ""}
          </div>
        </li>
    )
};

export default ProjectsCell;