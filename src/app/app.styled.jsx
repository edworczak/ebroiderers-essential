import styled from "styled-components";

import { theme } from "../shared-styles/theme.styled";

export const AppWrapper = styled.div`
	display: flex;
	padding-left: ${theme.sizes.spacings.navWidth};
`;

export const Content = styled.div`
	padding: ${theme.sizes.spacings.big};
	width: 100%;
`;

export const Section = styled.section`
	margin-bottom: ${theme.sizes.spacings.big};
	width: 100%;
`;
