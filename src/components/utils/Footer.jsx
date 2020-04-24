import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  width: 100%;
  height: 6rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        Made with{" "}
        <span role="img" aria-label="smiley">
          ❤️
        </span>{" "}
        by Sylène Manusset | 2020
      </p>
    </FooterWrapper>
  );
};

export default Footer;
