import { useState } from "react";
import { styled } from "@mui/system";
import { Scrollbar } from "src/components/scrollbar";
import { useSelector } from "src/store";
import config from "src/bachhoaxanh/app/config";
import Box from "@mui/material/Box";
import MenuIcon from '@mui/icons-material/Menu';
import Search from "./sidebar-search";
import SearchBoard from "./sidebar-search-board";
import Menu from "./sidebar-menu";

const { width, radius } = config.layout.sidebar;
const { height } = config.layout.navbar;
const marginTop = 12;

const Sidebar = styled(Box)(() => ({
  width,
  minWidth: width,
  backgroundColor: '#fff',
  marginTop: marginTop + 'px',
  height: `calc(100vh - ${ marginTop }px)`,
  borderRadius: `${ radius }px ${ radius }px 0 0`
}));

const SidebarHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: theme.spacing(0, 1),
  height: `${ height - marginTop }px`,
  borderBottom: '1px solid #e5e5e5',
  color: '#656565'
}));

export default function NavbarSidebar(){

  const menu = useSelector(state => state.layout.sidebar.menu);
  const [ search, setSearch ] = useState('');

  return <Sidebar className="sidebar">
    <Scrollbar>
      <SidebarHeader>
        <MenuIcon sx={{ fontSize: '28px', mr: '5px' }} />
        <Box component="span">DANH MỤC SẢN PHẨM</Box>
      </SidebarHeader>
      <Menu menu={ menu } />
      <Search
        text={ search } 
        onChange={ setSearch }
      />
      <SearchBoard 
        text={ search } 
      />
    </Scrollbar>
  </Sidebar>

}