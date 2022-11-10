import { useSelector } from "src/store";
import Head from "next/head";
import NewsBoard from "src/bachhoaxanh/components/news-board";
import ProductCard from "src/bachhoaxanh/components/product-card";
import GroupCate from "./group-cate";
import PromotionalProducts from "./promotional-products";
import HomeSlider from "./slider";

export default function HomePage(){

  const { news, products } = useSelector(state => state.home);

  return <>
    <Head>
      <title>BHX - Home</title>
    </Head>
    <HomeSlider />
    <GroupCate />
    <PromotionalProducts />
    <ProductCard
      title="Thịt, cá, trứng, hải sản"
      color="#008848"
      opacity={ 0.4 }
      products={[]}
      categories={[]}
      filters={[
        '138 THỊT, CÁ, TRỨNG, HẢI SẢN',
        'Thịt heo các loại',
        'Thịt gà, thịt vịt',
        'Thịt bò các loại',
        'Cá, hải sản',
        'Trứng gà, vịt, cút'
      ]}
      count={ 130 }
      sx={{
        mt: '10px'
      }}
    />
    <ProductCard
      title="Rau, củ, trái cây"
      color="#008848"
      opacity={ 0.4 }
      products={[]}
      categories={[]}
      filters={[
        '126 RAU, CỦ, TRÁI CÂY',
        'Rau lá các loại',
        'Củ, quả các loại',
        'Trái cây các loại',
      ]}
      count={ 118 }
      sx={{
        mt: '10px'
      }}
    />
    <NewsBoard
      news={ news }
      viewMoreLink="news"
    />
  </>

}