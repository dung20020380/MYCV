import './index.scss';
import IMAGES from '../../../img';

function Experience() {
    return (
        <div className="Experience">
            <h4>
                <span>EXPERIENCE</span>
            </h4>
            <div>
                Some great projects of the subjects:
                <table border="0">
                    <tr>
                        <td>CODE JAVA OOP: </td>
                        <td>GAME BOMBERMAN</td>
                    </tr>
                    <tr>
                        <td>CODE WEB: </td>
                        <td>WEATHER APP</td>
                    </tr>
                    <tr>
                        <td>
                            CODE FRONTEND:<br></br>
                        </td>
                        <td>
                            WEBSITE MYBLOG <br></br>REACTJS, SCSS
                        </td>
                    </tr>
                </table>
                <p style={{ marginTop: '0px', marginBottom: '5px', textAlign: 'center' }}>
                    <img src={IMAGES.github} style={{ textAlign: 'center' }} width={'5.5%'} alt="" />
                    &nbsp; <a href="https://github.com/dung20020380">https://github.com/dung20020380</a>
                </p>
                {/* <div>

                <ul>
                    <li>CODE JAVA: OOP </li>
                    <li>Database management system</li>
                    <li>Object-oriented programming</li>
                </ul>
                </div>
                <div>
                    
                </div> */}
            </div>
        </div>
    );
}

export default Experience;
