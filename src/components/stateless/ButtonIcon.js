import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  background: transparent;
  color: white;
  border: 2px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  font-size: 10px;
  transition: all ease 0.3s;

  &:hover {
    color: black;
    background-color: white;
  }
`;

const ButtonIcon = ({ label, icon, onClick }) => {
  return (
    <ButtonStyled onClick={onClick}>
      {icon}
      <label>{label}</label>
    </ButtonStyled>
  );
};

export default ButtonIcon;
