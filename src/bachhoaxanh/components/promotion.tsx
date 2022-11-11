import Box, { BoxProps } from "@mui/material/Box";
import { styled, SxProps, Theme } from "@mui/system";
import { PromotionalGift } from "../types/scheme/promotional-gift";

export interface PromotionProps extends BoxProps{
  size?: number;
  wrap?: boolean;
  promo: PromotionalGift;
}

interface PromoSize{
  size: number;
  wrap?: boolean;
}

const options = {
  shouldForwardProp(prop: PropertyKey){
    return prop !== 'size' && prop !== 'wrap'
  }
}

const PromotionBox = styled(Box, options)<BoxProps & PromoSize>(({ size }) => ({
  display: 'flex',
  flex: 1,
  height: size,
  alignItems: 'center',
  width: '100%',
  marginTop: '10px'
}));

const PromoImage = styled(Box, options)<BoxProps<'img'> & PromoSize>(({ size }) => ({
  width: size,
  height: size,
  minWidth: size,
  objectFit: 'cover',
  objectPosition: 'center'
}));

const PromoName = styled(Box, options)<BoxProps & PromoSize>(({ size, wrap = true }) => ({
  width: '100%',
  fontSize: '12px',
  lineHeight: (wrap ? size / 2 : size) + 'px',
  marginLeft: '3px',
  color: '#626262',
  whiteSpace: wrap ? 'initial' : 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxHeight: size
}));

export default function Promotion(props: PromotionProps){

  const { size = 36, wrap = true, promo, sx, ...rest } = props;

  return <PromotionBox 
    { ...rest }
    sx={ sx as SxProps<Theme> }
    size={ size }
  >
    <PromoImage
      component="img"
      size={ size }
      src={ promo.image ?? '' }
      alt={ promo.name }
    />
    <PromoName 
      size={ size }
      wrap={ wrap }
    >
      { promo.name }
    </PromoName>
</PromotionBox>  

}