import { styled, SxProps, Theme } from "@mui/system";
import { PromotionalGift } from "../types/scheme/promotional-gift";
import Box, { BoxProps } from "@mui/material/Box";
import Promotion from "./promotion";

export interface PromotionOptionProps extends BoxProps{
  size?: number;
  wrap?: boolean;
  promo: PromotionalGift;
}

const StyledBox = styled(Box)(() => ({
  display: 'flex',
  flex: 1,
  width: '100%',
  alignItems: 'center',
  marginBottom: '10px'
}));

const StyledRadio = styled(Box)<BoxProps<'span'>>(() => ({
  display: 'inline-block',
  width: '20px',
  minWidth: '20px',
  height: '20px',
  borderRadius: '50%',
  border: '1px solid #e4e9f2',
  backgroundColor: '#fff',
}));

export default function PromotionOption(props: PromotionOptionProps){

  const { size = 36, promo, sx, wrap = true, ...rest } = props;

  return <StyledBox>
    <StyledRadio component="span" />
    <Promotion
      size={ size }
      promo={ promo }
      wrap={ wrap }
      sx={{ mt: 0, ml: '10px', width: 'calc(100% - 30px)' }}
    />
  </StyledBox>

}