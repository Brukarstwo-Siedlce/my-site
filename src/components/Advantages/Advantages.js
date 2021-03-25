import React, { useRef, useEffect } from "react";

import Button from "../Button/Button";
import StyledAdvantageWrapper from "./StyledAdvantageWrapper";
import {
  StyledAdvantagesSection,
  StyledAdvantagesWrapper,
  StyledAdvantagesDivContent,
} from "./StyledAdvantages";

import fire from "../../assets/images/iconfire.png";
import coins from "../../assets/images/iconcoins.png";
import leaf from "../../assets/images/iconleaf.png";
import home from "../../assets/images/iconhome.png";

import { animationMoveXScroll } from "../../style/Animations";

const Advantages = ({ contactRef }) => {
  const advantageWrapper1 = useRef(null);

  useEffect(() => {
    const advantageDiv = advantageWrapper1.current.children[0];
    const advantageDiv1 = advantageWrapper1.current.children[1];
    const advantageDiv2 = advantageWrapper1.current.children[2];

    animationMoveXScroll(advantageDiv, "-=100");
    animationMoveXScroll(advantageDiv1, "+=100");
    animationMoveXScroll(advantageDiv2, "-=100");
  }, []);

  return (
    <StyledAdvantagesSection>
      <StyledAdvantagesWrapper ref={advantageWrapper1}>
        <StyledAdvantagesDivContent>
          <h2>Dlaczego warto wybrać naszą firmę?</h2>
          <h3>
            Usługi świadczone przez naszą firmę, nie mają żadnych ram związanych z zakresem inwestycji.
            Podejmujemy się zleceń dla osób fizycznych, instytucji oraz innych firm. Podejmujemy się prac na małych jak i dużych powierzchniach.
            Nie wiesz na co się zdecydować? Zadzwoń do nas i skorzystaj z naszej pomocy!
          </h3>
          <Button onClick={() => contactRef.current.scrollIntoView({ behavior: "smooth" })}>
            Kontakt
          </Button>
        </StyledAdvantagesDivContent>
        <StyledAdvantagesDivContent>
          <StyledAdvantageWrapper displayOnSmallScrean={true}>
            <div>
              <img src={coins} alt="coins" />
            </div>
            <h3>Oszczędności</h3>
            <h4>
              Oferujemy konkurencyjne ceny - zarówno w kwestii zakupu materiałów jak i świadczonych usług.
            </h4>
          </StyledAdvantageWrapper>
          <StyledAdvantageWrapper displayOnSmallScrean={false}>
            <div>
              <img src={home} alt="home" />
            </div>
            <h3>Gwarancja jakości</h3>
            <h4>
              Wykonane przez nas prace pozwolą cieszyć się przez długie lata ładnym podjazdem, chodnikiem czy placem.
            </h4>
          </StyledAdvantageWrapper>
        </StyledAdvantagesDivContent>
        <StyledAdvantagesDivContent>
          <StyledAdvantageWrapper>
            <div>
              <img src={leaf} alt="leaf" />
            </div>
            <h3>Czas</h3>
            <h4>
              Dysponujemy nowoczesnymi maszynami budowlanymi, dzięki którym realizowane zlecenia brukarskie przeprowadzamy szybko i sprawnie.
            </h4>
          </StyledAdvantageWrapper>
          <StyledAdvantageWrapper swapColor={true}>
            <div>
              <img src={fire} alt="fire" />
            </div>
            <h3>Doświadczenie</h3>
            <h4>
              Wieloletie doświaczenie, setki zrealizowanych projektów. Nasz zespół składa się z wykwalifikowanych specjalistów.
            </h4>
          </StyledAdvantageWrapper>
        </StyledAdvantagesDivContent>
      </StyledAdvantagesWrapper>
    </StyledAdvantagesSection>
  );
};

export default Advantages;
