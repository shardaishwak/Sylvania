import React from "react";
import styled from "styled-components";

import Colors from "../../../Colors";

const Layout = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1.2px solid ${Colors.dark.hex}30;
  display: grid;
  grid-template-columns: auto 60px 225px;
`;

//  Search bar settings

const Search = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  font-size: 17px;
  outline: none;
  color: ${Colors.dark.hex};
  margin-right: 40px;
`;

const SearchIcon = styled.i`
  font-size: 17px;
  font-weight: 600;
  color: ${Colors.dark.hex};
  margin-right: 15px;
  margin-left: 40px;
  align-self: center;
`;

const SearchContainer = styled.form`
  width: 100%;
  height: 100%;
  border-right: 1.2px solid ${Colors.dark.hex}30;
  display: flex;
`;

//  Notification Bell Settings

const Notification = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: ${Colors.dark.hex}
  border-right: 1.2px solid ${Colors.dark.hex}30;
  cursor: pointer;
  transtion: all .15s ease-in-out; 

  &:hover {
    color: ${Colors.purple.hex}
  }
`;

//  Profile settings

const ProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ProfileLogo = styled.div`
  width: 35px;
  height: 35px;
  background: ${Colors.orange.hex};
  border-radius: 5px;
  color: #fff;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 10px ${Colors.orange.hex}50;
`;

const ProfileName = styled.h4`
  color: ${Colors.dark.hex};
  margin-left: 10px;
  font-size: 16px;
  font-weight: 500;
`;

const SearchBar = props => {
  return (
    <Layout>
      <SearchContainer>
        <SearchIcon className="fas fa-search" />
        <Search placeholder="Search" />
      </SearchContainer>
      <Notification>
        <i className="far fa-bell" />
      </Notification>
      <ProfileContainer>
        <ProfileLogo>I</ProfileLogo>
        <ProfileName>Ishwak Sharda</ProfileName>
      </ProfileContainer>
    </Layout>
  );
};

export default SearchBar;
