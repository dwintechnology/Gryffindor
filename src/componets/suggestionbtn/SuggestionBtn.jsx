import './Style.scss'
import PropTypes from 'prop-types';

function SuggestBtn(props) {
    console.log(props);
    return (
        <button className="suggestBtn" onClick={props.onClick}>Another Suggestion</button>
    )
}
SuggestBtn.propTypes  =  {
    onClick:PropTypes.func.isRequired,
}

export default SuggestBtn;



