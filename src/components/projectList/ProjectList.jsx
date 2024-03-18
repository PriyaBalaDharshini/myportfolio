import Projects from '../projects/Projects'
import './projectlist.css'
import { projects } from '../../data.js'

function ProjectList() {
    return (
        <div className="pl">
            <div className="pl-text">
                <h1 className="pl-title">Creative Endeavors</h1>
                <p className="pl-desc">
                    Embarking on a journey of learning through hands-on project experiences, one small step at a time.
                </p>
            </div>
            <div className="pl-list">
                {projects.map(item => (
                    <Projects key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    )
}

export default ProjectList