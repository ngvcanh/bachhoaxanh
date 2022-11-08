import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { typographyClasses } from "@mui/material/Typography";
import Category from "src/bachhoaxanh/components/category";
import { useSelector } from "src/store";

export default function GroupCate(){

  const categories = useSelector(state => state.home.categories);

  return <Card
    sx={{
      height: '130px',
      mt: '10px',
      borderRadius: 0
    }}
  >
    <CardHeader 
      title="Nhóm hàng thường mua" 
      sx={{
        p: '10px',
        [`.${ typographyClasses.root }`]: {
          fontSize: '14px',
          fontWeight: 600
        }
      }}
    />
    <CardContent
      sx={{
        p: 0,
        display: 'flex',
        flexWrap: 'nowrap'
      }}
    >
      {categories.map((cate, index) => (
        <Category
          key={ index }
          name={ cate.name }
          image={ cate.image }
          url={ cate.url }
        />
      ))}
    </CardContent>
  </Card>

}