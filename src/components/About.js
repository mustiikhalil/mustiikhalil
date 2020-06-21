import React from 'react';
import instance from "../APIs/networking"
import Section from './Section';
const flatbuffers = require('flatbuffers').flatbuffers
const FlatAbout =  require('../Models/about_generated').About

export default class About extends React.Component {

    state = {
      name: "Mustafa Khalil",
      about: null,
      isFetching: true
    }
  
    componentWillMount() {
      instance.get("/apis/v1/about", {
        responseType: "arraybuffer"
      })
      .then((buffer) => {
        var uint8View = new Uint8Array(buffer.data);
        var buf = new flatbuffers.ByteBuffer(uint8View);
        const about = FlatAbout.getRootAsAbout(buf);
        this.setState({
          name: about.name(),
          about: about.description(),
          isFetching: false
        });
      }).catch((err) => {
        console.log(err)
      });
    }
  
    render() {
      return (
        <div className="App">
          <Section name={this.state.name}/>
          <div className="white" dangerouslySetInnerHTML={{ __html: this.state.about }}></div>
          <div className="icons">
              <ul id="horizontal-list">
                  <li>
                    <a href="https://github.com/mustiikhalil" target="blank">
                        <i className="fab fa-github Icons"></i>
                    </a>
                  </li >
                  <li> 
                    <a href="https://www.linkedin.com/in/mustiikhalil/" target="blank"> 
                        <i className="fab fa-linkedin Icons"></i>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:mustii@mmk.one" target="blank">
                        <i className="fas fa-envelope Icons"></i>
                    </a>
                  </li>
              </ul>
          </div>
        </div>
      )
    }
}