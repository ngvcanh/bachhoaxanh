import { createSlice } from "@reduxjs/toolkit"

export interface Banner{
  title: string;
  url: string;
  image: string;
}

export interface Category{
  image: string;
  name: string;
  url: string;
}

export interface HomeState{
  banners: Banner[];
  categories: Category[];
}

const initialState: HomeState = {
  banners: [
    {
      title: '',
      url: '',
      image: 'https://cdn.tgdd.vn/bachhoaxanh/banners/5599/banh-snack-trai-cay-say-081120229823.jpg'
    },
    {
      title: '',
      url: '',
      image: 'https://cdn.tgdd.vn/bachhoaxanh/banners/5599/giay-ve-sinh-khan-uot-giam-den-49-khi-mua-san-pham-thu-2-01112022212221.jpg'
    },
    {
      title: '',
      url: '',
      image: 'https://cdn.tgdd.vn/bachhoaxanh/banners/2505/sua-gia-si-03112022956.jpg'
    },
    {
      title: '',
      url: '',
      image: 'https://cdn.tgdd.vn/bachhoaxanh/banners/5599/chao-noi-to-dia-giam-den-49-0311202211345.jpg'
    },
    {
      title: '',
      url: '',
      image: 'https://cdn.tgdd.vn/bachhoaxanh/banners/5599/fresh-khuyen-mai-gia-soc-2010202222524.jpg'
    },
  ],
  categories: [
    {
      name: "Thịt heo các loại",
      image: "https://cdn.tgdd.vn/Products/Images/8781/bhx/icon_8781.v202211082130.png",
      url: "thit-heo"
    },
    {
      name: "Kem các loại",
      image: "https://cdn.tgdd.vn/Products/Images/7462/bhx/icon-kem_st.v202211082130.png",
      url: "kem"
    },
    {
      name: "Nước giặt",
      image: "https://cdn.tgdd.vn/Products/Images/2464/bhx/icon_2464.v202211082130.png",
      url: "nuoc-giat"
    },
    {
      name: "Mì ăn liền",
      image: "https://cdn.tgdd.vn/Products/Images/2565/bhx/mi-an-lien-202209301456432997.v202211082130.png",
      url: "mi"
    },
    {
      name: "Giấy vệ sinh",
      image: "https://cdn.tgdd.vn/Products/Images/9081/bhx/giay-ve-sinh-202205182007248109.v202211082130.png",
      url: "giay-ve-sinh"
    },
    {
      name: "Nước mắm",
      image: "https://cdn.tgdd.vn/Products/Images/2289/bhx/nuoc-mam-202210071636253221.v202211082130.png",
      url: "nuoc-mam"
    },
    {
      name: "Rau, củ, trái cây",
      image: "https://cdn.tgdd.vn/Products/Images/10298/bhx/rau-cu-trai-cay-202205261519146845.v202211082130.png",
      url: "rau-cu-trai-cay"
    },
    {
      name: "Chả giò, chả ram",
      image: "https://cdn.tgdd.vn/Products/Images/7171/bhx/cha-gio-cha-ram-202206061217236534.v202211082130.jpg",
      url: "cha-gio"
    },
    {
      name: "Sữa tươi",
      image: "https://cdn.tgdd.vn/Products/Images/2386/bhx/sua-tuoi-202210311320147075.v202211082130.png",
      url: "sua-tuoi"
    },
    {
      name: "Nước ngọt",
      image: "https://cdn.tgdd.vn/Products/Images/2443/bhx/nuoc-ngot-202210311315510981.v202211082130.png",
      url: "nuoc-ngot"
    },
  ]
}

export const slice = createSlice({
  name: '@bhx/home',
  initialState,
  reducers: {}
});

export default slice.reducer;