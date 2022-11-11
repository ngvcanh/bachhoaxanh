import { styled } from "@mui/system";
import { Property } from 'csstype';
import Box, { BoxProps } from "@mui/material/Box";
import formatPrice from "../helpers/format-price";

interface PriceFontSize{
  fontSize: Property.FontSize;
  origin?: boolean;
}

export interface PriceProps 
  extends 
    Partial<Omit<PriceFontSize, 'origin'>>, 
    Omit<BoxProps, 'fontSize'>{
      sale: number;
      original?: number;
      percent?: boolean;
      unit: string;
    }

const styleOptions = {
  shouldForwardProp(prop: PropertyKey){
    return prop !== 'fontSize' && prop !== 'origin'
  }
}

const PriceBox = styled(Box)(() => ({
  width: '100%'
}));

const PriceValue = styled(Box, styleOptions)<BoxProps<'span'> & PriceFontSize>(({ fontSize, origin }) => ({
  color: origin ? '#757575' : '#b10e0e',
  fontSize,
  marginRight: '7px',
  ...(origin && {
    textDecoration: 'line-through'
  })
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

const discount = (p1: number, p2: number) => (((p1 - p2) / p1) * 100).toFixed(0);

export default function Price(props: PriceProps){

  const { sale, unit, original = 0, percent = true, fontSize = '13px' } = props;

  const options = { unit };

  return <PriceBox>
    <PriceValue 
      component="span"
      fontSize={ fontSize }
    >
      { formatPrice(sale, options) }
    </PriceValue>
    {original > 0 && (
      <>
        <PriceValue 
          component="span"
          fontSize={ fontSize }
          origin
        >
          { formatPrice(original, options) }
        </PriceValue>
        {percent && (
          <Discount component="span">
            { `-${ discount(original, sale) }%` }
          </Discount>
        )}
      </>
    )}
  </PriceBox>

}