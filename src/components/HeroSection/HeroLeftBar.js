import React from "react";
import HerroAppleImage from "../../assets/images/svg/1.svg";

import {
  StyledHeroLeftBar,
  StyledHeroLeftBarText,
  StyledImg,
  StyledHeroParagraph,
  StyledHeroParagraphBox,
  StyledHeroH2,
} from "./StyledHeroLeftBar";

import Button from "../Button/Button";

const HeroLeftBar = ({ contactRef }) => {
  return (
    <StyledHeroLeftBar>
      <div>
        <StyledHeroParagraphBox>
          <StyledHeroH2>
            Usługi brukarskie <span>Siedlce i okolice</span>
          </StyledHeroH2>
          <StyledHeroParagraph>
            Kompleksowe układanie kostki brukowej. Solidne wykonanie i najwyższa jakość. Serdecznie zapraszamy do współpracy.
          </StyledHeroParagraph>
          <Button onClick={() => contactRef.current.scrollIntoView({ behavior: "smooth" })}>
            Kontakt
          </Button>
        </StyledHeroParagraphBox>
      </div>
      <div>
        <StyledImg src={HerroAppleImage} />
      </div>
      <div>
        <StyledHeroLeftBarText>
            Współpracujemy z najlepszymi i sprawdzonymi dostawcami kostki.
            Układamy kostkę brukową betonową i granitową m.in firmy Polbruk, Bruk-Bet, Semmelrock, Superbet, Libet.
        </StyledHeroLeftBarText>
      </div>
    </StyledHeroLeftBar>
  );
};

export default HeroLeftBar;
