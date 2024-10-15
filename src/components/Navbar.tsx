import styled from "styled-components";
import { Link } from "react-router-dom";
const NavbarContainer = styled.nav`
  background-color: #1f7a8c;
  display: flex;
  flex-direction: column; /* Default direction */
  width: 20%;

  @media screen and (max-width: 768px) {
    flex-direction: row; /* Change to row on smaller screens */
    width: 100%; /* Optionally adjust width */
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: calc(2px + 1.5vw);
  color: #ffffff;
  padding: 0.5rem;
  margin: 1px;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/education">Education</NavLink>
      <NavLink to="/work">Employment</NavLink>
      <NavLink to="/sweprojects">SWE Projects</NavLink>
      <NavLink to="/appdevprojects">App Dev Projects</NavLink>
      <NavLink to="/cyberprojects">Cybersecurity Projects</NavLink>
      <NavLink to="/skills">Skills</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </NavbarContainer>
  );
};
export default Navbar;
