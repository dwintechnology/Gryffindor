import image from '../../assets/img/netflix.png';
import './Style.scss'
function NetflixButton(){
    return(
        <div className="blueSpace">
            <img className="netImg" src={image}/>
            <div className="net">
            <h6 className="netText">Now Streaming</h6>
            <h6 className="netText">Watch Now</h6>
            </div>
        </div>
    )
}
export default NetflixButton;