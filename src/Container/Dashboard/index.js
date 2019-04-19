import React, { PureComponent } from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import Sidebar from "../../Components/Sidebar";
import Content from "../../Components/Content";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #fff;
  overflow: hidden;
  display: grid;
  grid-template-columns: 250px auto;
`;

class Dashboard extends PureComponent {
  render() {
    return (
      <Container>
        <Sidebar />
        <Content />
      </Container>
    );
  }
}

export default Dashboard;
