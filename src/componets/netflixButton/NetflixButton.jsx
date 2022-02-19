import image from '../../assets/img/netflix.png';
import './Style.scss'
function NetflixButton() {
    return (
        <div className="blueSpace">

            <img className="netImg" src={image} />
            <div className="net">
                <span className="netText1">Now Streaming</span>
                <span className="netText2">Watch Now</span>
            </div>

        </div>
    )
}
export default NetflixButton;