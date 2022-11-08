import Box from "@mui/material/Box";
import { styled } from "@mui/system";

export interface ProductItemProps<T extends object>{
  product: T;
}

const StyledProduct = styled(Box)(() => ({
  width: '245px',
  minWidth: '245px',
  height: '350px',
  border: '1px solid #eee'
}))

export default function ProductItem<T extends object>(props: ProductItemProps<T>){

  return <StyledProduct>

  </StyledProduct>

}