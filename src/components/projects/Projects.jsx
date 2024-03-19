import './project.css'

function Projects({ img, link, name }) {
    return (
        <div className='p'>
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="p-img" />
            </a>
            <p className="p-name">{name}</p>
        </div>
    )
}

export default Projects