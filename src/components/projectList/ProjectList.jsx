import Projects from '../projects/Projects'
import './projectlist.css'

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
                <Projects />
                <Projects />
                <Projects />
                <Projects />
                <Projects />
                <Projects />
            </div>
        </div>
    )
}

export default ProjectList