import React from 'react'
import projects from "../helpers/ProjectsList";
import {BtnGitHub} from "../components/btnGitHub/btnGitHub";
import {useParams} from "react-router-dom";
import img from './../img/projects/02-big.jpg'

export const Project = () => {

    const {id} = useParams()
    const project = projects[id]

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{project.title}</h1>


                    <img src={project.imgBig} alt={project.title} className="project-details__cover" />

                        <div className="project-details__desc">
                            <p>{project.skills}</p>
                        </div>
                        <BtnGitHub link={project.gitHubLink} />


                </div>
            </div>
        </main>
)
}
