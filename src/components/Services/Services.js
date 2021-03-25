import React, { useRef, useEffect } from "react";

import iconPicture from "../../assets/images/brukarstwo-image2.jpg";
import IconCheck from "../../assets/images/iconcheck.png";

import { animationMoveXScroll } from "../../style/Animations";

import {
  StyledServicesMain,
  StyledFlexWrapper,
  StyledTextWrapper,
  StyledImageWrapper,
  StyledH3,
  StyledServiceList,
} from "./StyledServices";

const Services = React.forwardRef((props, ref) => {
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    const img = imgRef.current;

    animationMoveXScroll(text, "-=10");
    animationMoveXScroll(img, "+=10");
  }, []);

  return (
    <StyledServicesMain ref={ref}>
      <div>
        <StyledH3>Usługi</StyledH3>
        <StyledFlexWrapper>
          <StyledTextWrapper ref={textRef}>
            <h2>W czym możemy Ci pomóc?</h2>
            <h3>
              To my - Zbyszek i jego niezawodna drużyna.<br />Zajmiemy się każdym etapem prac, w tym m.in.
            </h3>
            <StyledServiceList>
              <li>
                <span>
                  <img src={IconCheck} alt="check" />
                </span>
                Sporządzimy szczegółową, bezpłatną wycenę
              </li>
              <li>
                <span>
                  <img src={IconCheck} alt="check" />
                </span>
                Przygotujemy indywidualny projekt
              </li>
              <li>
                <span>
                  <img src={IconCheck} alt="check" />
                </span>
                Doradzimy i przedstawimy najciekawsze, sprawdzone pomysły
              </li>
              <li>
                <span>
                  <img src={IconCheck} alt="check" />
                </span>
                Zakupimy i dostarczymy wybraną przez Państwa kostkę brukową
              </li>
              <li>
                <span>
                  <img src={IconCheck} alt="check" />
                </span>
                Przeprowadzimy wszystkie prace ziemne oraz budowlane. <br /> Oddamy w Państwa ręce w pełni gotową powierzchnię
              </li>
              <li>
                <span>
                  <img src={IconCheck} alt="check" />
                </span>
                Posprzątamy po sobie
              </li>
              <li>
                <span>
                  <img src={IconCheck} alt="check" />
                </span>
                Podpowiemy w jaki sposób dbać o kostkę, aby cieszyć się nią jak najdłużej
              </li>
            </StyledServiceList>
          </StyledTextWrapper>
          <StyledImageWrapper ref={imgRef}>
            <img src={iconPicture} alt="Usługi Brukarskie Siedlce. Układanie kostki brukowej na chodniku." />
          </StyledImageWrapper>
        </StyledFlexWrapper>
      </div>
    </StyledServicesMain>
  );
});

export default Services;
