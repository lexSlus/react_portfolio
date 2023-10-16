import React from 'react'
import img from "../../img/projects/02-big.jpg";
import git_icon from "../../img/icons/gitHub-black.svg";
import './style.css'


export const BtnGitHub = ({link}) => {
    return (
        <a href={link} target="_blank" className="btn-outline">
            <img src={git_icon} alt="" />
            GitHub repo
        </a>
    )
}
