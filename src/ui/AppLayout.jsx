import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import Logo from "./Logo";

const StyledAppLayout = styled.div`
  display: grid;
  min-height: 100dvh;
  grid-template-columns: 265px 1fr;
`;

const StyledAside = styled.aside`
  background-color: #2f3135;
  border-right: 1px solid #434545;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Content = styled.div`
  display: grid;
  background-color: #212328;
`;

const OutletContainer = styled.div`
  margin: 0 auto;
  padding: 60px 0px 0px 0px;
  min-width: 1060px;
  background-color: #212328;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <StyledAside>
        <Logo />
        <Nav />
      </StyledAside>
      <Content>
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </Content>
    </StyledAppLayout>
  );
}

export default AppLayout;
