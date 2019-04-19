import React from "react";
import styled from "styled-components";
import Colors from "../../Colors";
import { NavLink } from "react-router-dom";

const NavLinks = [
  {
    id: 1,
    name: "Schedule",
    icon: "far fa-calendar-minus",
    linkTo: "/"
  },
  { id: 3, name: "Workouts", icon: "fas fa-dumbbell", linkTo: "/workouts" },
  { id: 4, name: "Exercises", icon: "fas fa-bolt", linkTo: "/exercises" },
  { id: 5, name: "Meals", icon: "fas fa-drumstick-bite", linkTo: "/meals" },
  { id: 6, name: "Programs", icon: "fab fa-gg-circle", linkTo: "/programs" },
  { id: 7, name: "Messages", icon: "far fa-comment-alt", linkTo: "/messages" },
  { id: 8, name: "Profile", icon: "far fa-user", linkTo: "/profile" }
];

const Container = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 1);
`;

const Brand = styled.button`
  margin: 40px;
  border-radius: 10px
  border: none;
  display: flex;
  align-items: center;
  background: none;
  outline: none
  justify-content: center;
  font-size: 25px;
  color: ${Colors.purple.hex};
  text-align: center;
  font-weight: 600;
`;

const Links = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const Linker = styled(NavLink)`
  text-decoration: none;
  padding: 10px 0;
  padding-left: 40px;
  padding-right: 10px;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: ${Colors.dark.hex};
  margin-bottom: 7.5px;
  transition: all 0.15s ease-in-out;

  &:hover {
    color: ${Colors.dark.hex};
    background: ${Colors.dark.hex}15;
  }

  &.active {
    color: ${Colors.purple.hex};
    background: ${Colors.purple.hex}15;
    font-weight: 600;
  }
`;

const Icon = styled.i`
  font-size: 20px;
  margin-right: 15px;
`;

const Sidebar = props => {
  return (
    <Container>
      <Brand>Sylvania</Brand>
      <Links>
        {NavLinks.map(link => {
          return (
            <Linker
              to={link.linkTo}
              exact
              activeClassName="active"
              key={link.id}
            >
              <Icon className={link.icon} /> {link.name}
            </Linker>
          );
        })}
      </Links>
    </Container>
  );
};

export default Sidebar;
