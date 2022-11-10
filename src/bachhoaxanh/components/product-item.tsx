import { styled, SxProps, Theme } from "@mui/system";
import { Product } from "../types/scheme/product";
import Box, { BoxProps } from "@mui/material/Box";
import Link from "@mui/material/Link";
import NextLink from 'next/link';
import clsx from 'clsx';
import formatPrice, { FormatPriceOptions } from "../helpers/format-price";
import Button, { ButtonProps } from "@mui/material/Button";

export interface ProductItemProps extends BoxProps{
  product: Product;
  hasExtra: boolean;
}

const StyledProduct = styled(Box)(() => ({
  width: '245px',
  minWidth: '245px',
  // height: '350px',
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
  justifyContent: 'flex-start'
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

const PriceBox = styled(Box)(() => ({
  width: '100%'
}));

const PriceSale = styled(Box)(() => ({
  color: '#b10e0e',
  fontSize: '13px',
  marginRight: '7px'
}));

const PriceOrigin = styled(Box)(() => ({
  color: '#757575',
  fontSize: '13px',
  marginRight: '7px',
  textDecoration: 'line-through'
}));

const Discount = styled(Box)(() => ({
  display: 'inline-block',
  fontSize: '12px',
  color: '#fff',
  borderRadius: '3px',
  backgroundColor: '#de2000',
  width: '32px',
  height: '20px',
  textAlign: 'center',
  verticalAlign: 'middle'
}));

const GiftBox = styled(Box)(() => ({
  display: 'flex',
  flex: 1,
  height: '36px',
  alignItems: 'center',
  width: '100%',
  marginTop: '10px'
}));

const GiftImage = styled(Box)<BoxProps<'img'>>(() => ({
  width: '36px',
  height: '36px',
  minWidth: '36px',
  objectFit: 'cover',
  objectPosition: 'center'
}));

const GiftName = styled(Box)(() => ({
  width: '100%',
  fontSize: '12px',
  lineHeight: '18px',
  marginLeft: '3px',
  color: '#626262',
  whiteSpace: 'initial',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxHeight: '36px'
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

const discount = (p1: number, p2: number) => (((p1 - p2) / p1) * 100).toFixed(0);

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
        <ProductTitle component="span">
          { product.name }
        </ProductTitle>
        {!!product.meta && (
          <Meta>
            { product.meta }
          </Meta>
        )}
        <PriceBox>
          <PriceSale component="span">
            { formatPrice(product.sale_price, options) }
          </PriceSale>
          {product.original_price > 0 && (
            <>
              <PriceOrigin component="span">
                { formatPrice(product.original_price, options) }
              </PriceOrigin>
              <Discount component="span">
                { `-${ discount(product.original_price, product.sale_price) }%` }
              </Discount>
            </>
          )}
        </PriceBox>
        {!!product.promotional_gift && (
          <GiftBox>
            <GiftImage
              component="img"
              src={ product.promotional_gift.image ?? '' }
              alt={ product.promotional_gift.name }
            />
            <GiftName>
              { product.promotional_gift.name }
            </GiftName>
          </GiftBox>
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