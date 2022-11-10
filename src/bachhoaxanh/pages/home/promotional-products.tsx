import ProductCard from "src/bachhoaxanh/components/product-card";
import { useSelector } from "src/store";

export default function PromotionalProducts(){

  const { products, subCategories } = useSelector(state => state.home);

  return <ProductCard
    title="Sản phẩm khuyến mãi"
    color="#ff7b01"
    products={ products }
    categories={ subCategories }
    filters={[
      'Rau, củ, trái cây',
      'Bia, nước giải khát',
      'Sữa các loại',
      'Bánh kẹo các loại',
      'Mì, miến, cháo, phở',
      'Dầu ăn, nước chấm,...'
    ]}
    count={ 123 }
    sx={{
      mt: '10px'
    }}
  />

}