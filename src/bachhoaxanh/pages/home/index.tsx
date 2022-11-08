import Box from "@mui/material/Box";
import Head from "next/head";
import GroupCate from "./group-cate";
import PromotionalProducts from "./promotional-products";
import HomeSlider from "./slider";

export default function HomePage(){

  return <>
    <Head>
      <title>BHX - Home</title>
    </Head>
    <HomeSlider />
    <GroupCate />
    <PromotionalProducts />
  </>

}