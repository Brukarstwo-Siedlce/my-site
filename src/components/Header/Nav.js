import React, { useRef, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import { StyledNavWrapper, StyledNav, StyledButton, StyledLogoWrapper } from "./StyledNav";
import { animationMoveY } from "../../style/Animations";

const Nav = React.forwardRef(({ openMenu }, ref) => {
  const navRef = useRef(null);

  const scrollInto = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const nav = navRef.current;
    animationMoveY(nav);
  }, []);

  const data = useStaticQuery(graphql`
    query GetHeaderLogo {
      file(relativePath: { eq: "kamyk-logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);
  return (
    <StyledNavWrapper openMenu={openMenu} ref={navRef}>
      <StyledLogoWrapper hasDeclardeWith={202}>
        <Img fluid={data.file.childImageSharp.fluid} objectFit="cover" />
        <h1>Usługi Brukarskie Siedlce - Kamyk Zbigniew Filipowicz</h1>
      </StyledLogoWrapper>
      <StyledNav openMenu={openMenu}>
        <StyledButton onClick={() => scrollInto(ref[0])}>STRONA GŁÓWNA</StyledButton>
        <StyledButton onClick={() => scrollInto(ref[1])}>O NAS</StyledButton>
        <StyledButton onClick={() => scrollInto(ref[2])}>USŁUGI</StyledButton>

        <StyledButton hasDeclardeWith={115} onClick={() => scrollInto(ref[4])}>
          GALERIA
        </StyledButton>
        <StyledButton hasDeclardeWith={115} onClick={() => scrollInto(ref[4])}>
          KONTAKT
        </StyledButton>
      </StyledNav>
    </StyledNavWrapper>
  );
});

export default Nav;
