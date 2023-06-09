import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { theme } from "../../shared-styles/theme.styled";
import { IconButtonWrapper } from "./icon-button.styled";

const IconButton = (props) => {
	const { icon, colour, text, border, onClick, width, margin } = props;

	if (typeof onClick === "function") {
		return (
			<IconButtonWrapper $width={width} $margin={margin} $border={border} $text={!!text}>
				<button onClick={onClick}>
					{text && <span>{text}</span>}
					<FontAwesomeIcon icon={icon} color={colour || theme.colours.CTA} />
				</button>
			</IconButtonWrapper>
		);
	} else {
		return (
			<IconButtonWrapper $width={width} $margin={margin} $border={border} $text={!!text}>
				<Link to={onClick}>
					{text && <span>{text}</span>}
					<FontAwesomeIcon icon={icon} color={colour || theme.colours.CTA} />
				</Link>
			</IconButtonWrapper>
		);
	}
};

IconButton.propTypes = {
	icon: PropTypes.object.isRequired,
	colour: PropTypes.string,
	text: PropTypes.string,
	border: PropTypes.bool,
	onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	width: PropTypes.string,
	margin: PropTypes.string,
};

export default IconButton;
