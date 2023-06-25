import Education from './Education';
import Experience from './Experience';
import Personal from './Personal';
import './index.scss';

function ProfileDetail() {
    return (
        <div className="Detail">
            <>
                <header>
                    <h1>LÊ HỮU DŨNG</h1>
                </header>
            </>
            <Education />
            <Experience />
            <Personal />
        </div>
    );
}

export default ProfileDetail;
