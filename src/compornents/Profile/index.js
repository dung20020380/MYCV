import IMAGES from '../../img';
import './index.scss';
function Profile() {
    return (
        <div className="Profile">
            <img src={IMAGES.avata} alt="" />
            <div>
                <h4>
                    <span> PROFILE </span>
                </h4>
                <p>
                    I am currently a final year student of information technology. I am looking for a placement for an
                    intern Front end with Reactjs to be able to contribute, learn and develop my. It would be a pleasure
                    to dedicate my energy and youth to the company's development
                </p>
            </div>
            <div>
                <h4>
                    <span>CAREER GOALS</span>
                </h4>
                <ul>
                    <li>Improve your skills, become a Frontend Architect</li>
                    <li>Aim for full-stack</li>
                    <li>Access to new technologies, data, AI</li>
                    <li>Support the mainstay of the company</li>
                </ul>
            </div>
            <div>
                <h4>
                    <span>CONTACT</span>
                </h4>
                <p>
                    <img src={IMAGES.phone} width={'7%'} alt="" />
                    &nbsp; 0344556633
                </p>
                <p>
                    <img src={IMAGES.address} width={'7%'} alt="" />
                    &nbsp; Dinh Thon Street – Nam Tu Liem District – Hanoi
                </p>
                <p>
                    <img src={IMAGES.email} width={'7%'} alt="" />
                    &nbsp; huudung.le.58@gmail.com
                </p>
                {/* <p>
                    <img src={IMAGES.github} width={'8%'} alt="" />
                    &nbsp; <a href="https://github.com/dung20020380">https://github.com/dung20020380</a>
                </p> */}
            </div>
        </div>
    );
}

export default Profile;
