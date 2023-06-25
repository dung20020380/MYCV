import './index.scss';
import IMAGES from '../../img';
function Activities() {
    return (
        <div className="Activities">
            <p>
                <u>Extracurricular training of the National Student Union - Pedagogy</u>
            </p>
            <div className="FrameImgOne">
                <div>
                    <img src={IMAGES.studen2} alt="" width={'100%'} height={'200px'} />
                </div>
                <div>
                    <>
                        <img src={IMAGES.student1} alt="" width={'98%'} height={'200px'} />
                    </>
                </div>
            </div>
            <p>
                <u>VNU Hanoi-University of Engineering and Technology football tournament</u>
            </p>
            <div className="FrameImgTwo">
                <div className="One">
                    <>
                        <img src={IMAGES.work1} alt="" width={'100%'} height={'100px'} />
                    </>
                    <>
                        <img src={IMAGES.work2} alt="" width={'100%'} height={'100px'} />
                    </>
                    <>
                        <img src={IMAGES.sport2} alt="" width={'100%'} height={'100px'} />
                    </>
                </div>
                <div className="Two">
                    <>
                        <img src={IMAGES.sport1} alt="" width={'99%'} height={'308px'} />
                    </>
                </div>
            </div>
            <p>
                <u>My guide's wedding - a software developer at ASICLAND company in the South Korea.</u>
            </p>
            <div className="FrameImgThree">
                <>
                    <img src={IMAGES.wedding1} alt="" width={'100%'} height={'160px'} />
                </>
                <>
                    <img src={IMAGES.wedding2} alt="" width={'100%'} height={'160px'} />
                </>
            </div>
        </div>
    );
}

export default Activities;
