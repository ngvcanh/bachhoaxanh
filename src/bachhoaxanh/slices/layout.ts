import { ReactNode } from "react";
import { createSlice } from "@reduxjs/toolkit";

export interface SidebarMenu{
  text: string;
  icon?: ReactNode;
  url?: string;
  children?: SidebarMenu[];
}

export interface LayoutSidebar{
  menu: SidebarMenu[];
  defaultSearchBoard: Omit<SidebarMenu, 'children'>[];
}

export interface LayoutState{
  sidebar: LayoutSidebar;
}

const initialState: LayoutState = {
  sidebar: {
    menu: [
      {
        text: 'KHUYẾN MÃI HOT',
        url: 'khuyen-mai'
      },
      {
        text: 'THỊT, CÁ, TRỨNG, HẢI SẢN',
        children: [
          {
            text: 'Thịt các loại',
            url: 'thit-cac-loai'
          },
          {
            text: 'Cá, hải sản',
            url: 'ca-tom-muc-ech'
          },
          {
            text: 'Trứng gà, vịt, cút',
            url: 'trung'
          }
        ]
      },
      {
        text: 'RAU, CỦ, TRÁI CÂY',
        children: [
          {
            text: 'Rau lá các loại',
            url: 'rau-sach'
          },
          {
            text: 'Củ, quả các loại',
            url: 'cu'
          },
          {
            text: 'Trái cây các loại',
            url: 'trai-cay-noi'
          }
        ]
      },
      {
        text: 'THỰC PHẨM ĐÔNG - MÁT',
        children: [
          {
            text: 'Kem các loại',
            url: 'kem'
          },
          {
            text: 'Bánh đông, bánh tươi',
            url: 'banh-dong-mat'
          },
          {
            text: 'Xúc xích, lạp xưởng, chả lụa',
            url: 'xuc-xich-la-xuong-cha-lua'
          },
          {
            text: 'Chả giò, cá - bò viên',
            url: 'cha-ca-bo-vien-ha-cao'
          },
          {
            text: 'Há cảo, sủi cảo',
            url: 'ha-cao-xui-cao-xiu-mai'
          },
          {
            text: 'Thịt, cá, rau đông lạnh',
            url: 'thit-ca-rau-dong-lanh'
          },
          {
            text: 'Thực phẩm làm sẵn',
            url: 'thuc-pham-lam-san'
          },
          {
            text: 'Sữa chua, phô mai',
            url: 'sua-chua-pho-mai'
          },
          {
            text: 'Bánh Flan, đậu hũ, kim chi,...',
            url: 'hang-dong-mat-khac'
          }
        ]
      }
    ],
    defaultSearchBoard: [
      {
        text: 'Sim, thẻ cào',
        url: 'sim-so-dep'
      },
      {
        text: "Trả góp, điện nước",
        url: 'tien-ich/thanh-toan-tra-gop'
      },
      {
        text: "Mua phiếu mua hàng",
        url: "dat-mua-phieu-mua-hang"
      }
    ]
  }
}

export const slice = createSlice({
  name: '@bhx/layout',
  initialState,
  reducers: {}
});

export default slice.reducer;