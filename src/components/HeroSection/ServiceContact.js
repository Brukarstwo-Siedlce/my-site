import React from "react";

import { StyledPhoneIcon, StyledServiceContact } from "./StyledServiceContact";

const ServiceContact = ({ swapColor, furnace }) => {
  return (
    <StyledServiceContact swapColor={swapColor}>
      <p>
        <StyledPhoneIcon />
        <span>608-636-246</span>
      </p>
      <p>{furnace ? "Potrzebujesz fachowca?" : "Wycena"}</p>
    </StyledServiceContact>
  );
};

export default ServiceContact;
