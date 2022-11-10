import { createSlice } from "@reduxjs/toolkit"
import { Banner } from "../types/scheme/banner";
import { Category } from "../types/scheme/category";
import { News } from "../types/scheme/news";
import { Product } from "../types/scheme/product";
import * as fakeData from "../_fake-data";

export interface HomeState{
  banners: Banner[];
  categories: Category[];
  news: News[];
  products: Product[];
  subCategories: Category[];
}

const initialState: HomeState = {
  banners: fakeData.banners,
  categories: fakeData.categories,
  news: fakeData.news,
  products: fakeData.products,
  subCategories: fakeData.subCategories
}

export const slice = createSlice({
  name: '@bhx/home',
  initialState,
  reducers: {}
});

export default slice.reducer;