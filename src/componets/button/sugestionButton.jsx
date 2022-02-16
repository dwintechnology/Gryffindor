import './sugestionButton.scss'
import PropTypes from 'prop-types';

function Button(props) {
    console.log(props);
    return (
        <button className="sugestBtn" onClick={props.onClick}>Another Suggestion</button>
    )
}
Button.propTypes={
    onClick: PropTypes.func.isRequired,
}

export default Button;
