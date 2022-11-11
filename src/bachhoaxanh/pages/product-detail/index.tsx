import { PromotionalGift } from "src/bachhoaxanh/types/scheme/promotional-gift";
import { styled } from "@mui/system";
import Box, { BoxProps } from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import Head from "next/head";
import Carousel from "src/bachhoaxanh/components/carousel";
import Price from "src/bachhoaxanh/components/price";
import PromotionOption from "src/bachhoaxanh/components/promotion-option";
import Breadcrumb from "../../components/breadcrumb";
import Button from "@mui/material/Button";
import SpecialOffer from "src/bachhoaxanh/components/special-offer";
import ShippingRole from "src/bachhoaxanh/components/shipping-role";
import NextLink from 'next/link';
import Link from "@mui/material/Link";
import ProductRelateds from "src/bachhoaxanh/components/product-relateds";

const breadcrumbPath = [
  {
    name: 'Trang chủ',
    url: ''
  },
  {
    name: 'Sữa chua uống liền',
    url: 'sua-chua'
  },
  {
    name: 'Sữa chua uống liền LiF Kun',
    url: 'sua-chua-uong-lien-lif-kun'
  }
];

const listPromo: PromotionalGift[] = [
  {
    id: 1,
    name: 'Tặng chai Sữa rửa mặt Dove dưỡng ẩm 160ml hoặc 1 quà tặng khác',
    image: 'https://cdn.tgdd.vn/Products/Images/2504/238542/bhx/sua-rua-mat-dang-bot-dove-duong-am-sau-giup-da-mem-muot-suot-24h-160ml-202209131437182652_300x300.jpg',
    url: ''
  },
  {
    id: 2,
    name: 'Tặng chai Sữa rửa mặt Dove dưỡng ẩm 160ml hoặc 1 quà tặng khác',
    image: 'https://cdn.tgdd.vn/Products/Images/2504/238542/bhx/sua-rua-mat-dang-bot-dove-duong-am-sau-giup-da-mem-muot-suot-24h-160ml-202209131437182652_300x300.jpg',
    url: ''
  }
];

const carousel: string[] = [
  'https://cdn.tgdd.vn/Products/Images/2504/237667/bhx/sua-rua-mat-tinh-chat-serum-dove-cap-am-va-cho-da-mem-muot-130g-202201241603003188.jpg',
  'https://cdn.tgdd.vn/Products/Images/2504/237667/bhx/sua-rua-mat-tinh-chat-serum-dove-cap-am-va-cho-da-mem-muot-130g-202203111415020040.jpg',
  'https://cdn.tgdd.vn/Products/Images/2504/237667/bhx/sua-rua-mat-tinh-chat-serum-dove-cap-am-va-cho-da-mem-muot-130g-202201241603010099.jpg',
  'https://cdn.tgdd.vn/Products/Images/2504/237667/bhx/sua-rua-mat-tinh-chat-serum-dove-cap-am-va-cho-da-mem-muot-130g-202201241603019846.jpg',
  'https://cdn.tgdd.vn/Products/Images/2504/237667/bhx/sua-rua-mat-tinh-chat-serum-dove-cap-am-va-cho-da-mem-muot-130g-202201241603014486.jpg',
  'https://cdn.tgdd.vn/Products/Images/2504/237667/bhx/sua-rua-mat-tinh-chat-serum-dove-cap-am-va-cho-da-mem-muot-130g-202201241603022672.jpg'
]

const Detail = styled(Box)(() => ({
  display: 'flex',
  flex: 1,
  marginTop: '10px'
}));

const DetailLeft = styled(Box)(() => ({
  width: '540px',
  minWidth: '540px'
})); 

const DetailRight = styled(Box)(() => ({
  width: 'calc(100% - 550px)',
  marginLeft: '10px'
}))

const SliderContainer = styled(Box)(() => ({
  width: '100%',
  height: '500px'
}));

const DetailTitle = styled(Box)<BoxProps<'h1'>>(() => ({
  fontSize: '22px',
  color: '#4a4a4a',
  lineHeight: '1.3em',
  fontWeight: 400,
  marginTop: 0
}));

const DetailMeta = styled(Box)(() => ({
  color: '#999',
  marginBottom: '15px'
}));

const Promotion = styled(Box)(() => ({
  marginTop: '10px',
  backgroundColor: 'rgba(0,97,51,.05)',
  border: '1px solid #e4e9f2',
  borderRadius: '4px',
  padding: '5px 10px 0',
  color: '#4a4a4a',
  fontSize: '13px',
  width: '100%'
}));

const ButtonBuy = styled(Button)(() => ({
  marginTop: '10px',
  fontWeight: 400,
  fontSize: '18px',
  height: '50px'
}));

const PromoNoti = styled(Box)(() => ({
  fontStyle: 'italic',
  color: '#999',
  textAlign: 'center',
  marginTop: '10px'
}));

const Banner = styled(Box)(() => ({
  height: '80px',
  marginTop: '10px'
}));

const BannerLink = styled(Link)(() => ({
  display: 'flex',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center'
}));

const BannerImage = styled(Box)<BoxProps<'img'>>(() => ({
  width: '100%',
  height: '100%'
}))

export default function ProductDetailPage(){

  return <>
    <Head>
      <title>BHX - Product detail</title>
    </Head>
    <Card sx={{ borderRadius: 0, mt: '-10px' }}>
      <CardContent sx={{ p: '7px' }}>
        <Breadcrumb path={ breadcrumbPath } />
        <Detail>
          <DetailLeft>
            <SliderContainer>
              <Carousel images={ carousel } />
            </SliderContainer>
            <ShippingRole wrap />
          </DetailLeft>
          <DetailRight>
            <DetailTitle component="h1">
              Sữa rửa mặt tinh chất serum Dove dưỡng ẩm sâu giúp da mềm mượt suốt 24 giờ 130g
            </DetailTitle>
            <DetailMeta>
              HSD còn 11 tháng
            </DetailMeta>
            <Price
              sale={ 95000 }
              unit={ 'đ' }
              original={ 115000 }
              fontSize="22px"
              sx={{ mb: '15px' }}
            />
            <Promotion>
              <Box sx={{ mb: '10px' }}>
                Chọn 1 trong 2 khuyến mãi (khuyến mãi chỉ áp dụng mua Online)
              </Box>
              <PromotionOption 
                promo={ listPromo[0] }
                size={ 32 }
                wrap={ false }
              />
              <PromotionOption 
                promo={ listPromo[1] }
                size={ 32 }
                wrap={ false }
              />
            </Promotion>
            <ButtonBuy
              variant="contained"
              color="primary"
              fullWidth
              size="large"
            >
              Chọn mua
            </ButtonBuy>
            <PromoNoti>
              (Khuyến mãi chỉ áp dụng mua Online)
            </PromoNoti>
            <SpecialOffer offers={[
              'Mua 100.000đ các sản phẩm UNILEVER có cơ hội trúng xe SH , VÀNG và nhiều khuyến mãi khác..',
              'Thanh toán qua ZaloPay giảm 20K cho đơn 200K'
            ]} />
            <Banner>
              <NextLink
                href=""
                passHref
              >
                <BannerLink>
                  <BannerImage
                    component="img"
                    src="https://cdn.tgdd.vn/bachhoaxanh/banners/5598/mua-unilever-co-co-hoi-trung-vang-xe-sh-03112022161851.jpg"
                    alt="Product name"
                  />
                </BannerLink>
              </NextLink>
            </Banner>
          </DetailRight>
        </Detail>
      </CardContent>
    </Card>
    <ProductRelateds sx={{ mt: '10px' }} />
  </>

}