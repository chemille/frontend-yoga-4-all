import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "./styles.css";

const Button = styled(NavLink)`
  background-color: black;
  color:white;
  text-decoration: none;
  padding: 14px 25px;
  text-align: center;
  display: inline-block;
  border:none;
  border-radius:12px;
  margin-left:2rem;
  margin-right:2rem;
`;
const Home = styled(NavLink)`
    color: white;
    font-size: 48px;
    margin-left: 2rem;
`;
const StyledNav = styled.nav`
background-color: pink; 
`;

export function NavBar() {
    return (
        <>

      <StyledNav className="navbar-container">
        <Home to="/home">
          Yoga-4-All
        </Home>
            <div className="buttonContainer">
        <Button to="/home">
          Primitive Reflexes
        </Button>
        <Button to="/diary">Diary</Button>
        <Button to="/myaccount">My Account</Button>
        </div>
      </StyledNav>
      </>
    );
  }
  