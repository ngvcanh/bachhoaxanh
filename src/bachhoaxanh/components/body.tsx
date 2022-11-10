import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import { PropsWithChildren } from "react";
import config from "../app/config";
import Container from "./container";
import Footer from "./footer";

const StyledBody = styled(Box)(() => ({
  marginTop: `${ config.layout.navbar.height }px`
}));

const StyledContainer = styled(Box)(() => ({
  marginLeft: `${ config.layout.sidebar.width }px`,
  padding: '10px 0 0 10px'
}))

export default function Body(props: PropsWithChildren){

  const { children } = props;

  return <StyledBody className="page-content">
    <Container>
      <StyledContainer>
        { children }
        <Footer />
      </StyledContainer>
    </Container>
  </StyledBody>

}