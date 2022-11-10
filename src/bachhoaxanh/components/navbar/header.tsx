import { height, styled } from "@mui/system";
import Box from "@mui/material/Box";
import config from "src/bachhoaxanh/app/config";
import ButtonLink from "../button-link";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import HeaderSearch from "./header-search";
import HeaderLocation from "./header-location";

const StyledHeader = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: config.layout.navbar.height,
  width: '100%',
  flexGrow: 1,
  color: '#fff'
}))

export default function NavbarHeader(){

  return <StyledHeader>
    <ButtonLink
      href="/"
      sx={{
        width: '161px',
        minWidth: '161px',
        height: '100%'
      }}
    >

    </ButtonLink>
    <HeaderLocation />
    <HeaderSearch />
    <ButtonLink
      href="bhx-orders-history"
      sx={{
        width: '92px',
        minWidth: '92px',
        height: '100%',
        color: '#fff',
        textTransform: 'revert',
        textAlign: 'center',
        lineHeight: 1.2,
        fontSize: '13px',
        fontWeight: 400
      }}
    >
      Đơn hàng của bạn
    </ButtonLink>
    <ButtonLink
    href="bhx-cart"
    sx={{
      color: '#fff',
      alignItems: 'center',
      height: '100%',
      width: '140px',
      minWidth: '140px',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      borderRadius: 0
    }}
  >
    <ShoppingBasketIcon />
    <Box 
      component="span"
      sx={{
        ml: '6px'
      }}
    >
      Giỏ hàng
    </Box>
    </ButtonLink>
  </StyledHeader>

}