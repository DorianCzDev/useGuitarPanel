import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledUl = styled.ul`
  margin: 0 auto;
  width: 210px;
`;

const StyledLi = styled.li`
  text-align: center;
`;

const activeclass = "active";

const StyledNavLink = styled(NavLink).attrs({ activeclass })`
  &:link,
  &:visited {
    display: flex;
    padding: 16px 22px;
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    letter-spacing: 3px;
    transition: 0.3s;
  }
  &:hover {
    color: #aaa;
  }
  &.${activeclass} {
    background-color: #212328;
    /* border: 1px solid #434545; */
    box-shadow: 0 0 0 1px #434545;
  }
`;

function Nav() {
  return (
    <StyledUl>
      <StyledLi>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="products">Products</StyledNavLink>
        <StyledNavLink to="orders">Orders</StyledNavLink>
      </StyledLi>
    </StyledUl>
  );
}

export default Nav;
