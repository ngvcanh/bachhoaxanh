import { createSlice } from "@reduxjs/toolkit";
import { SidebarMenu } from "../types/sidebar";
import * as fakeData from "../_fake-data";

export interface LayoutNavbar{
  searchMessage: string[];
}

export interface LayoutSidebar{
  menu: SidebarMenu[];
  defaultSearchBoard: Omit<SidebarMenu, 'children'>[];

}

export interface LayoutState{
  sidebar: LayoutSidebar;
  navbar: LayoutNavbar;
}

const initialState: LayoutState = {
  sidebar: {
    menu: fakeData.sidebarMenu,
    defaultSearchBoard: fakeData.sidebarSearchDefault
  },
  navbar: {
    searchMessage: fakeData.navbarSearchMessage
  }
}

export const slice = createSlice({
  name: '@bhx/layout',
  initialState,
  reducers: {}
});

export default slice.reducer;