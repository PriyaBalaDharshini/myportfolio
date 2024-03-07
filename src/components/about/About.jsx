import './about.css'
import image from '../../../public/images/Home.jpg'

function About() {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card">
                    <img src={image} alt="" className="a-img fade-in" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className='a-sub'>MERN - Full Stack Developer</p>
                <p className='a-desc'>As a dedicated professional with over 4+ years of experience in Copyediting, I've honed my precision and attention to detail. </p>
                <p className='a-desc'>Yet, my passion for technology and the dynamic digital world has led me to a new path in Full Stack Development.</p>
                <p className='a-desc'>I'm currently deep into studies, arming myself with the skills to excel in this field.</p>
                <p className='a-desc'>My commitment to ongoing learning and unwavering determination will drive me toward success in Full Stack Development, where I aim to make a significant impact in the ever-evolving digital landscape.</p>

                <div className='a-btn'>
                    <a href='https://drive.google.com/file/d/1Tl3VqCPKTCjewLugLH6PGdLyOrrDtAHU/view' target="_blank" className='btn btn-outline-dark' without rel="noreferrer" download>Download CV</a>
                </div>

            </div>

        </div >
    )
}

export default About