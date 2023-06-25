import './index.scss';

function Education() {
    return (
        <div className="Education">
            <div>
                <h4>
                    <span>EDUCATION</span>
                </h4>
                <ul>
                    <li>VNU Hanoi-University of Engineering and Technology</li>
                    <li>Major in Information Technology</li>
                    <li>Cumulative GPA: 3.0</li>
                    <li>Expected to graduate by the end of 2023.</li>
                </ul>
            </div>
            <div>
                <h4>
                    <span>SKILL</span>
                </h4>
                <ul>
                    <li>OOP</li>
                    <li>HTML/CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>SQL</li>
                    <li>APPROACHED REACTJS </li>
                    {/* <li>REACTJS <br></br> * 90% <a href = {'https://fullstack.edu.vn/'} >f8 fullstack.edu.vn</a></li> */}
                </ul>
                <div>
                    <h4>
                        <span>CERTIFICATE</span>
                    </h4>
                    <p>
                        Scholarship Dong Hanh <br></br>
                        Extracurricular activities
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Education;
