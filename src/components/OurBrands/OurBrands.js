import React, { useRef, useEffect } from "react";

import {
  StyledSectionOurBrands,
  StyledOurBrandsWrapper,
  StyledBrandsImage,
} from "./StyledOurBrands";

import polbruk from "../../assets/images/brand/polbruk1.jpg";
import semmelrock from "../../assets/images/brand/semmelrock1.jpg";
import superbet from "../../assets/images/brand/superbet1.jpg";
import brukbet from "../../assets/images/brand/brukbet1.jpg";
import brands from "../../assets/images/brand/brands.jpg";

import { animationScrollBottom } from "../../style/Animations";

const OurBrands = () => {
  const brandsRefTop = useRef(null);
  // const brandsRefBottom = useRef(null);
  const brandsRefImage = useRef(null);
  useEffect(() => {
    const brandsTop = brandsRefTop.current;
    // const brandsBottom = brandsRefBottom.current;
    const brandsImage = brandsRefImage.current;

    animationScrollBottom(brandsTop);
    // animationScrollBottom(brandsBottom);
    animationScrollBottom(brandsImage);
  }, []);

  return (
    <StyledSectionOurBrands>
      <StyledOurBrandsWrapper ref={brandsRefTop}>
        <div>
          <img src={polbruk} alt="polbruk" />
          <img src={semmelrock} alt="semmelrock" />
        </div>
        <div>
          <img src={superbet} alt="superbet" />
          <img src={brukbet} alt="brukbet" />
        </div>
      </StyledOurBrandsWrapper>
      {/*<StyledOurBrandsWrapper ref={brandsRefBottom}>*/}
      {/*  <div>*/}
      {/*    <img src={junkers} alt="junkers" />*/}
      {/*    <img src={brotje} alt="brotje" />*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    <img src={termet} alt="termet" />*/}
      {/*    <img src={vaillant} alt="vaillant" />*/}
      {/*    <img src={viesman} alt="viesman" />*/}
      {/*  </div>*/}
      {/*</StyledOurBrandsWrapper>*/}
      <StyledBrandsImage src={brands} alt="brands" ref={brandsRefImage} />
    </StyledSectionOurBrands>
  );
};

export default OurBrands;
