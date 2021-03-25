import React, { useRef, useEffect } from "react";

import { StyledAboutUsSection, StyledArticleAboutus, StyledH3 } from "./StyledAbout";

import { animationOpacity } from "../../style/Animations";

const About = React.forwardRef((props, ref) => {
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const text = textRef.current;

    animationOpacity(title, 2);
    animationOpacity(text, 2);
  }, []);

  return (
    <StyledAboutUsSection ref={ref}>
      <StyledH3 ref={titleRef}>O nas</StyledH3>
      <StyledArticleAboutus ref={textRef}>
        Brukarstwo to nasza pasja. Jeśli szukasz profesjonalnej firmy, która zajmuje się układaniem kostki brukowej, to trafiłeś pod właściwy adres!
          Wieloletnie doświadczenie pracowników naszej firmy, ogromna wiedza o pracach ziemnych oraz niezawodny sprzęt dają Ci gwarancję profesjonalnie wykonanych usług.
          Wszystkie projekty dostosowujemy do potrzeb indywidualnych klienta. Nasze projekty cechuje wysoka funkcjonalność i estetyka. Fachowo doradzamy.
      </StyledArticleAboutus>
    </StyledAboutUsSection>
  );
});

export default About;
