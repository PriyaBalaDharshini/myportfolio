import './intro.css'
import image from '../../../public/images/1.jpg'

function Intro() {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My Name is</h2>
                    <h1 className="i-name">Priyadharshini T</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-titile-item">Full Stack Developer</div>
                            <div className="i-titile-item">Front End Developer</div>
                            <div className="i-titile-item">Back End Developer</div>
                            <div className="i-titile-item">Technical Editor</div>
                        </div>
                    </div>
                    <p className="i-description">
                        Enthusiastic about Growth and Innovation in the World of Development.
                        Eagerly Waiting to Kickstart My Career.
                        Ready to contribute my skills and passion to meaningful projects.
                    </p>
                </div>

            </div>
            <div className="i-right">
                <img src={image} alt="" className="i-img fade-in" /* style={{ padding: "30px", height: "590px", width: "420px", borderRadius: "50px" }}  */ />

            </div>

        </div>
    )
}

export default Intro