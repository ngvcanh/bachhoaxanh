import Card, { CardProps } from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { SxProps, Theme } from "@mui/system";

export interface ProductRelatedsProps extends CardProps{

}

export default function ProductRelateds(props: ProductRelatedsProps){

  const { sx, ...rest } = props;
  
  return <Card
    { ...rest }
    sx={ sx as SxProps<Theme> }
  >
    <CardHeader title="Sản phẩm liên quan" />
    <CardContent>
      
    </CardContent>
  </Card>

}