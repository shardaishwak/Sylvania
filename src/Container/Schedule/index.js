import React, { Fragment } from "react";
import styled from "styled-components";

import Colors from "../../Colors";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 35px;
  padding-left: 40px;
`;

const CoolButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 15px;
  color: ${Colors.dark.hex};
  background: ${Colors.dark.hex}30;
  margin-left: 15px;
  cursor: pointer;
  outline: none;

  &.active {
    color: #fff;
    background: ${Colors.purple.hex};
    box-shadow: 0 10px 20px ${Colors.purple.hex}30;
  }
`;

const CoolButtons = styled.div`
  width: 100%;
`;

const Schedule = props => {
  return (
    <Container>
      <CoolButtons>
        <CoolButton>My schedule</CoolButton>
        <CoolButton className="active">Trainer schedule</CoolButton>
        <CoolButton>Gym Schedule</CoolButton>
      </CoolButtons>
    </Container>
  );
};

export default Schedule;
