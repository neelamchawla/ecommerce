import styled from "styled-components";
// import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
    height: 70px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    background-color: whitesmoke;
    position: fixed;
    z-index: 1;
    box-shadow: 0px 0px 13px 5px antiquewhite;

    /* Large desktop */
  @media (min-width: 1200px) {
    width: 99vw;
    margin-top: -5.5%;
    margin-left: -4.5%;
  }

  /* Portrait desktop */
  @media (max-width: 1200px) and (min-width: 980px) {
    width: 98vw;
    margin-top: -5.5%;
    margin-left: -5%;
   }

  /* Portrait tablet to landscape and desktop */
  @media (min-width: 768px) and (max-width: 979px) { 
    padding: 0px;
    padding-top: 0%;
    width: 97vw;
    margin-left: -6vw;
    margin-top: -6vw;
   }

  /* Landscape phone to portrait tablet */
  @media (min-width: 501px) and (max-width: 767px) { 
    padding: 0%;
    padding-top: 0%;
    width: 100vw;
    margin-left: -9vw;
    margin-top: -7vw;
  }

  /* Landscape phones and down */
  @media (max-width: 500px) { 
    width: 98vw;
    margin-top: -8%;
    margin-left: -13.5%;
   }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

// export const OptionsContainerStyles = css`
//     padding: 10px 15px;
//     cursor: pointer;
// `;

// export const OptionLink = styled(Link)`
//     ${OptionsContainerStyles}
// `;
    
// export const OptionDiv = styled.div`
//     ${OptionsContainerStyles}
// `;

// combinning link and div
export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;