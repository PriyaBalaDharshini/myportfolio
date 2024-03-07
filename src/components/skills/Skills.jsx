import "./skills.css"
import html from "../../../public/images/html.png"

import bootstrap from "../../../public/images/bootstrap.png"
import javascript from "../../../public/images/javascript.png"
import react from "../../../public/images/react.png"
import node from "../../../public/images/nodejs.png"
import express from "../../../public/images/express.png"
import mongodb from "../../../public/images/mongo-db.png"
import git from "../../../public/images/git.png"
import github from "../../../public/images/github.png"
import netlify from "../../../public/images/netlify.png"



function Skills() {
    return (
        <div className="s-wrapper">
            <h1 className="s-title">My Skills</h1>
            <div className="s">
                <div className="s-one">
                    <div className="front-end">
                        <h3 className="title">1. Front End</h3>
                        <div className="items">
                            <div className="item">
                                <p className="name">HTML & CSS</p>
                                <img src={html} alt="" className="img" style={{ borderRadius: "20px" }} />
                            </div>

                            <div className="item">
                                <p className="name">Bootstrap</p>
                                <img src={bootstrap} alt="" className="img" />
                            </div>
                            <div className="item">
                                <p className="name">JavaScript</p>
                                <img src={javascript} alt="" className="img" />
                            </div>
                            <div className="item">
                                <p className="name">React</p>
                                <img src={react} alt="" className="img" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="s-two">
                    <div className="back-end">
                        <h3 className="title">2. Back End</h3>
                        <div className="items">
                            <div className="item">
                                <p className="name">Node</p>
                                <img src={node} alt="" className="img" />
                            </div>
                            <div className="item">
                                <p className="name">Express</p>
                                <img src={express} alt="" className="img" />
                            </div>
                        </div>
                    </div>
                    <div className="data-base">
                        <h3 className="title">3. Database</h3>
                        <div className="items">
                            <div className="item">
                                <p className="name">MongoDB</p>
                                <img src={mongodb} alt="" className="img" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="s-three">
                    <div className="version-controll">
                        <h3 className="title">4. Version Controll</h3>
                        <div className="items">
                            <div className="item">
                                <p className="name">GitHub</p>
                                <img src={github} alt="" className="img" />
                            </div>
                            <div className="item">
                                <p className="name">Git</p>
                                <img src={git} alt="" className="img" />
                            </div>
                        </div>
                    </div>
                    <div className="deployment">
                        <h3 className="title">5. Deployment</h3>
                        <div className="items">
                            <div className="item">
                                <p className="name">Netlify</p>
                                <img src={netlify} alt="" className="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills