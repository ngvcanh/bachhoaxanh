import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import HeaderCard from "./header-cart";
import config from "src/bachhoaxanh/app/config";

const StyledHeader = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: config.layout.navbar.height,
  width: '100%',
  flexGrow: 1
}))

export default function NavbarHeader(){

  return <StyledHeader>
    <Box>Logo</Box>
    <HeaderCard />
  </StyledHeader>

}