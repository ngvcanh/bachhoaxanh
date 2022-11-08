import { styled } from "@mui/system";
import AppBar from "@mui/material/AppBar";
import config from "src/bachhoaxanh/app/config";
import Container from "../container";
import NavbarSidebar from "./sidebar";
import NavbarHeader from "./header";

const NavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: config.layout.navbar.height,
  color: '#333'
}));

export default function Navbar(){

  return <NavbarRoot>
    <Container sx={{
      display: 'flex',
      alignItems: 'flex-start'
    }}>
      <NavbarSidebar />
      <NavbarHeader />
    </Container>
  </NavbarRoot>

}