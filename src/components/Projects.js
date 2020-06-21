import React from 'react';
import instance from "../APIs/networking";
import Section from './Section';
import ProjectsCell from './ProjectsCell';

export default class Projects extends React.Component {

    state = {
            obj: [
                {
                    name: "FlatAero",
                    details: "FlatAero is an open source application on macOS that would allow users to visualize their Flatbuffers  into JSON or FLAT from a (Buffer) or binary file.",
                    techStack: [
                        "Cocoa",
                        "swift, Objective-C++, cpp",
                        "Sketch"
                    ]
                },
                {
                    name: "FlatBuffers",
                    details: "FlatBuffers is an open source project.",
                    techStack: [
                    ]
                },
                {
                    name: "FlatBuffersGRPC",
                    details: "A simply implementation of the original examples of grpc-swift that was translated to confirm to flatbuffers instead of protobufs. this was done after helping the grpc-swift team to allow any type of buffer data to pass through the library",
                    techStack: [

                    ]
                },
                {
                    name: "Molteo",
                    details: "Molteo.",
                    techStack: [

                    ]
                },
                {
                    name: "AppStore Clone",
                    details: "A project that was built with Operations in mind. With the goal of learning how to use operations and publishing pods on cocoapods",
                    techStack: [
                        "UIKit",
                        "Operations",
                        "CocoaPods"
                    ]
                }
            ]
        }

    render() {
        return (
            <div className="projects">
                <Section name={"Projects"} />
                <ul className="table">
                    {this.state.obj.map( (obj) => this.renderCell(obj) ) }
                </ul>
            </div>
        )
    }

    renderCell(obj) {
        return <ProjectsCell obj={obj}/>
    }

}