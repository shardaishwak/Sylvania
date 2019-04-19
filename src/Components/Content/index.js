import React, { PureComponent, Fragment } from "react";
import styled from "styled-components";
import { Switch, Route, withRouter, Link } from "react-router-dom";

import Colors from "../../Colors";
import SearchBar from "./SearchBar";
import Pages from "./Pages";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${Colors.grey.hex};
`;

class Content extends PureComponent {
  render() {
    console.log(this.props);
    return (
      <Container>
        <SearchBar />
        <Pages />
      </Container>
    );
  }
}

export default withRouter(Content);
