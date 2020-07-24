import React from 'react';
import instance from "../APIs/networking";
import Section from './Section';
import ProjectsCell from './ProjectsCell';
const flatbuffers = require('flatbuffers').flatbuffers
const FLATProjects =  require('../Models/projects_generated')

export default class Projects extends React.Component {

    state = {}

    componentDidMount() {
        instance.get("/api/v1/projects", {
            responseType: "arraybuffer"
        })
            .then((buffer) => {
                var uint8View = new Uint8Array(buffer.data)
                var buf = new flatbuffers.ByteBuffer(uint8View)
                const projects = FLATProjects.Projects.getRootAsProjects(buf)
                this.setState({
                    obj: projects
                });
            }).catch((err) => {
                console.log(err)
            });
    }

    render() {
        if (!this.state.obj) {
            return (
                <div className="projects">
                    <Section name={"Projects"} />
                </div>
            )
        }
        var projects = []
        let _projects = this.state.obj
        for (var i = _projects.dataLength() - 1; i >= 0; i--) {
            projects.push(this.renderCell(_projects.data(i), i))
        }
        return (
            <div className="projects">
                <Section name={"Projects"} />
                <ul className="table">
                    {projects}
                </ul>
            </div>
        )
    }

    renderCell(obj, i) {
        return <ProjectsCell key={i} obj={obj} />
    }

}