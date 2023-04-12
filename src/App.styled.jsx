import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import { theme } from "./shared-styles/theme.styled";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;500&family=Sacramento&display=swap');
  
    body {
        background: ${theme.colours.white};
      color: ${theme.typography.colours.body};
        font-family: ${theme.typography.fontFamily};
        font-size: ${theme.typography.fontSize.default};
        font-weight: ${theme.typography.fontWeight.default};
        margin: 0;
    }
    
    * {
      box-sizing: border-box;
    }
    
    p {
      margin-bottom: ${theme.sizes.spacings.small};
    }
    
    h1, h2, h3 {
      font-family: ${theme.typography.fontFamilyHeader};
      font-weight: ${theme.typography.fontWeight.header};
      margin: 0 0 ${theme.sizes.spacings.small};
    }
    
    h1 {
      font-size: ${theme.typography.fontSize.h1};
    }

    h2 {
      font-size: ${theme.typography.fontSize.h2};
    }

    h3 {
      font-size: ${theme.typography.fontSize.h3};
    }
    
    a {
      color: ${theme.colours.CTA};
      transition: ${theme.decorations.transition};
      
      &:hover,
      &:focus {
        color: ${theme.colours.highlight};
        cursor: pointer;
      }
    }

    button {
      background: transparent;
      border-color: ${theme.colours.CTA};
      color: ${theme.colours.CTA};
      cursor: pointer;
      font-family: ${theme.typography.fontFamily};
      font-weight: ${theme.typography.fontWeight.default};
      transition: ${theme.decorations.transition};
      
      path {
        transition: ${theme.decorations.transition};
      }

      &:hover,
      &:focus {
        background: ${theme.colours.CTAHover};
        border-color: ${theme.colours.CTAHover};
        color: ${theme.colours.white};
        
        path {
          color: ${theme.colours.white};
        }
      }
    }
`;

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
