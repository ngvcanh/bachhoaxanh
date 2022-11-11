import { styled, SxProps, Theme } from "@mui/system";
import { Product } from "../types/scheme/product";
import Box, { BoxProps } from "@mui/material/Box";
import Button, { ButtonProps } from "@mui/material/Button";
import Link from "@mui/material/Link";
import NextLink from 'next/link';
import clsx from 'clsx';
import formatPrice from "../helpers/format-price";
import Wholesale from "./wholesale";
import Promotion from "./promotion";
import Price from "./price";

export interface ProductItemProps extends BoxProps{
  product: Product;
  hasExtra: boolean;
}

const StyledProduct = styled(Box)(() => ({
  width: '245px',
  minWidth: '245px',
  border: '1px solid #eee',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  justifyContent: 'space-between'
}));

const Image = styled(Box)<BoxProps<'img'>>(() => ({
  width: '160px',
  height: '160px',
  minHeight: '160px',
  objectFit: 'cover',
  objectPosition: 'center'
}));

const ProductLink = styled(Link)(() => ({
  display: 'flex',
  flex: '0 1 auto',
  alignItems: 'center',
  flexDirection: 'column',
  textDecoration: 'none',
  padding: '8px 8px 0',
  justifyContent: 'flex-start',
  position: 'relative'
}));

const ProductTitle = styled(Box)(() => ({
  display: 'block',
  height: '50px',
  marginBottom: '7px',
  minHeight: '50px',
  fontSize: '13px',
  color: '#333',
  lineHeight: '25px',
  overflow: 'hidden',
  textAlign: 'left',
  width: '100%'
}));

const Meta = styled(Box)(() => ({
  width: '100%',
  height: '26px',
  minHeight: '26px',
  overflow: 'hidden',
  color: '#666',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  fontSize: '12px',
  position: 'relative',

  ':before': {
    content: '"•"',
    color: '#999',
    fontSize: '12px',
    display: 'inline-block',
    verticalAlign: 'middle',
    marginRight: '3px'
  }
}));

interface ButtonBoxProps extends ButtonProps{
  hasExtra: boolean;
}

const ButtonBox = styled(Box, {
  shouldForwardProp(prop){
    return prop !== 'hasExtra'
  }
})<ButtonBoxProps>(({ hasExtra }) => ({
  width: '100%',
  padding: '10px 20px',
  ...(hasExtra && {
    height: 110
  })
}))

const ButtonBuy = styled(Button)(() => ({
  height: '40px',
  fontWeight: 400
}));

const ButtonExtra = styled(Button)(({ theme }) => ({
  textTransform: 'revert',
  fontSize: '13px',
  marginTop: '10px',
  backgroundColor: '#efefef',
  fontWeight: 300,
  boxShadow: 'none',
  color: theme.palette.info.main,
  height: '40px',
  padding: 0,
  lineHeight: '20px',
  flexWrap: 'wrap',

  ':hover,:active': {
    backgroundColor: '#efefef',
    boxShadow: 'none'
  }
}));

export default function ProductItem(props: ProductItemProps){

  const { product, className, sx, hasExtra, ...rest } = props;

  const options = { unit: product.unit };

  return <StyledProduct
    { ...rest }
    className={ clsx('product-item', className) }
    sx={ sx as SxProps<Theme> }
  >
    <NextLink
      href={ product.url }
      passHref
    >
      <ProductLink>
        <Image
          component="img"
          src={ product.image ?? '' }
          alt={ product.name }
        />
        {product.wholesale && (
          <Wholesale />
        )}
        <ProductTitle component="span">
          { product.name }
        </ProductTitle>
        {!!product.meta && (
          <Meta>
            { product.meta }
          </Meta>
        )}
        <Price
          sale={ product.sale_price }
          unit={ product.unit }
          original={ product.original_price }
        />
        {!!product.promotional_gift && (
          <Promotion promo={ product.promotional_gift } />
        )}
      </ProductLink>
    </NextLink>
    <ButtonBox hasExtra={ hasExtra }>
      <ButtonBuy
        variant="outlined"
        color="primary"
        fullWidth
      >
        Chọn mua
      </ButtonBuy>
      {!!product.extra && (
        <ButtonExtra
          variant="contained"
          fullWidth
        >
          <Box>
            Hoặc MUA 
            <Box  
              component="span" 
              sx={{ 
                color: '#c10017',
                fontWeight: 400,
                ml: '3px'
              }}
            >
              { formatPrice(product.extra.price, options) }
            </Box>
          </Box>
          <Box>
            { product.extra.meta }
          </Box>
        </ButtonExtra>
      )}
    </ButtonBox>
  </StyledProduct>

}