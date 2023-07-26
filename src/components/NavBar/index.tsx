import styled from "styled-components";
import { UniIcon } from "../incons";
import Row from "../Row";

const Nav = styled.nav`
  padding: 20px 12px;
  width: 100%;
  height: 72px;
  z-index: 2;
`;

const Box = styled.div`
  display: flex;
  height: full;
  flexwrap: nowrap;
`;

const BaseContainer = styled.div`
  display: flex;
  width: full;
  flex: 1;
  flex-shrink: 2;
`;

const LeftSideContainer = styled(BaseContainer)`
  align-items: center;
  justify-content: flex-start;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12;
  cursor: pointer;
`;

const RightSideContainer = styled(BaseContainer)`
  alignitems: center;
  justifycontent: flex-end;
`;

const StyledUniIcon = styled(UniIcon)`
  display: block;
  color: textPrimary;
`;

const Navbar = () => {
  return (
    <>
      <Nav>
        <Box>
          <LeftSideContainer>
            <LogoContainer>
              <StyledUniIcon width="48" height="48" />
            </LogoContainer>
          </LeftSideContainer>
          <RightSideContainer>
            <Row gap="12"></Row>
          </RightSideContainer>
        </Box>
      </Nav>
    </>
  );
};

export default Navbar;
