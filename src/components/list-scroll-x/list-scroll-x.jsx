import { ListScrollWrapper, ListWrapper } from "./list-scroll-x.styled";
import PropTypes from "prop-types";

const ListScrollX = ({ children }) => {
	return (
		<ListScrollWrapper>
			<ListWrapper>{children}</ListWrapper>
		</ListScrollWrapper>
	);
};

ListScrollX.propTypes = {
	children: PropTypes.node,
};

export default ListScrollX;
