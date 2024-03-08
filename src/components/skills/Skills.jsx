import "./skills.css"
import html from "../../../public/images/html.png"
import javascript from "../../../public/images/javascript.png"
import react from "../../../public/images/react.png"
import node from "../../../public/images/nodejs.png"
import express from "../../../public/images/express.png"
import mongodb from "../../../public/images/mongo-db.png"
import git from "../../../public/images/git.png"
import github from "../../../public/images/github.png"
import netlify from "../../../public/images/netlify.png"
import { useState } from "react"



function Skills() {
    const [click, setClick] = useState({
        html: false,
        javascript: false,
        react: false,
        node: false,
        express: false,
        mongodb: false,
        github: false,
        git: false,
        netlify: false

    })
    const handleClick = (itemName) => {
        setClick(previousState => ({
            ...previousState,
            [itemName]: !previousState[itemName]
        }))
    }
    return (
        <div className="s-wrapper">
            <div className="s-title">
                <h1 >My Skills</h1>
                <small>(Click on Icons)</small>
            </div>
            <div className="s">
                <div className="s-one">
                    <div className="front-end">
                        <h3 className="title">1. Front End</h3>
                        <div className="items">
                            <div className="item">
                                <p className="name" style={{ margin: "15px" }}>HTML & CSS</p>
                                <img onClick={() => handleClick("html")} src={html} alt="" className="img" style={{ borderRadius: "20px" }} />
                                {click.html &&
                                    <div className="desc">
                                        <p>Developed and maintained responsive web pages using HTML, CSS and Bootstrap.</p>
                                        <p><b> Knowledge: 80%</b></p>
                                    </div>
                                }
                            </div>

                            <div className="item">
                                <p className="name" style={{ margin: "15px" }}>JavaScript</p>
                                <img onClick={() => handleClick("javascript")} src={javascript} alt="" className="img" />
                                {click.javascript &&
                                    <div className="desc">
                                        <p>Used for adding interactivity and dynamic behavior to web pages.</p>
                                        <p><b> Knowledge: 60%</b></p>
                                    </div>
                                }
                            </div>
                            <div className="item">
                                <p className="name" style={{ margin: "14px" }}>React</p>
                                <img onClick={() => handleClick("react")} src={react} alt="" className="img" />
                                {click.react &&
                                    <div className="desc">
                                        <p>Used the JavaScript library for building user interfaces, particularly single-page applications.</p>
                                        <p><b> Knowledge: 60%</b></p>
                                    </div>
                                }
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
                                <img onClick={() => handleClick("node")} src={node} alt="" className="img" />
                                {click.node &&
                                    <div className="desc">
                                        <p>Developed server-side applications using Node.js, enabling JavaScript to run on the server.</p>
                                        <p><b> Knowledge: 60%</b></p>
                                    </div>
                                }
                            </div>
                            <div className="item">
                                <p className="name">Express</p>
                                <img onClick={() => handleClick("express")} src={express} alt="" className="img" />
                                {click.express &&
                                    <div className="desc">
                                        <p>Used Express.js as a web application framework for Node.js to simplify server-side development.</p>
                                        <p><b> Knowledge: 60%</b></p>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="data-base">
                        <h3 className="title">3. Database</h3>
                        <div className="items">
                            <div className="item">
                                <p className="name">MongoDB</p>
                                <img onClick={() => handleClick("mongodb")} src={mongodb} alt="" className="img" />
                                {click.mongodb &&
                                    <div className="desc">
                                        <p>Utilized MongoDB as a NoSQL database for storing and managing data in web applications.</p>
                                        <p><b> Knowledge: 60%</b></p>
                                    </div>
                                }
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
                                <img onClick={() => handleClick("github")} src={github} alt="" className="img" />
                                {click.github &&
                                    <div className="desc">
                                        <p>Collaborated on coding projects by utilizing GitHub for version control, issue tracking, and code review.</p>
                                        <p><b> Knowledge: 65%</b></p>
                                    </div>
                                }
                            </div>
                            <div className="item">
                                <p className="name">Git</p>
                                <img onClick={() => handleClick("git")} src={git} alt="" className="img" />
                                {click.git &&
                                    <div className="desc">
                                        <p>Version control system used to track changes in code, collaborate with others, and manage project history.</p>
                                        <p><b> Knowledge: 65%</b></p>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="deployment">
                        <h3 className="title">5. Deployment</h3>
                        <div className="items">
                            <div className="item">
                                <p className="name">Netlify</p>
                                <img onClick={() => handleClick("netlify")} src={netlify} alt="" className="img" />
                                {click.netlify &&
                                    <div className="desc">
                                        <p>Deployed and hosted web applications on Netlify, taking advantage of its continuous integration and deployment features.</p>
                                        <p><b> Knowledge: 65%</b></p>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills