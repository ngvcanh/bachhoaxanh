import { MouseEvent, SyntheticEvent, useEffect, useMemo, useState } from "react";
import { hexToRgb, styled, SxProps, Theme } from "@mui/system";
import { Category } from "../types/scheme/category";
import { Product } from "../types/scheme/product";
import Card, { CardProps } from "@mui/material/Card";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import Tab from "@mui/material/Tab";
import CardContent from "@mui/material/CardContent";
import ProductItem from "./product-item";
import ButtonLink from "./button-link";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import NextLink from 'next/link';
import Link from "@mui/material/Link";

export interface ProductCardProps extends Omit<CardProps, 'variant'>{
  title: string;
  color: string;
  opacity?: number;
  filters?: string[];
  active?: number;
  count?: number;
  onChangeActive?(value: number): void;
  onViewMore?(e: MouseEvent<HTMLAnchorElement>): void;
  variant?: 'outlined' | 'contained';
  categories?: Category[];
  products: Product[];
}

const StyledCard = styled(Card)(() => ({
  borderRadius: 0
}))

const StyledTitle = styled(Box)(() => ({
  display: 'flex',
  flex: 1,
  justifyContent: 'space-between',
  alignItems: 'center',

  '.product-title-text': {
    textTransform: 'uppercase',
    fontSize: '16px',
    lineHeight: '50px',
    fontWeight: 700,
    whiteSpace: 'nowrap'
  }
}));

const CateList = styled(List)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  padding: '10px'
}));

const CateItem = styled(ListItem)(() => ({
  flexGrow: 1,
  flexBasis: '25%',
  padding: 0
}));

const CateLink = styled(Link)(({ theme }) => ({
  display: 'inline-block',
  fontSize: '13px',
  color: theme.palette.info.main,
  textDecoration: 'none',
  lineHeight: '26px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}));

export default function ProductCard<P extends object, C extends object>(props: ProductCardProps){

  const { 
    title, 
    sx, 
    color, 
    opacity = 0.15, 
    filters = [], 
    active = 0, 
    onChangeActive,
    onViewMore,
    count,
    variant = 'contained',
    products,
    categories,
    ...rest
  } = props;

  const [ currentTab, setCurrentTab ] = useState(active);

  useEffect(() => {
    active === currentTab || setCurrentTab(active);
  }, [ active ]);

  const onChangeTab = (e: SyntheticEvent, value: number) => {
    setCurrentTab(value);
    onChangeActive?.(value);
  }

  const onClickViewMore = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onViewMore?.(e);
  }

  const hasExtra = useMemo(() => {
    return !!products.filter(product => !!product.extra).length;
  }, [ products ]);

  return <StyledCard
    { ...rest }
    sx={ sx as SxProps<Theme> }
  >
    <CardHeader
      sx={{
        p: '0 10px',
        bgcolor: `${ hexToRgb(color).replace('(', 'a(').replace(')', `, ${ opacity })`) }`
      }}
      title={
        <StyledTitle>
          <Box className="product-title-text" sx={{ color }}>{ title }</Box>
          {!!filters.length && (
            <Tabs
              variant="scrollable"
              
              onChange={ onChangeTab }
              value={ currentTab }
              sx={{
                width: '655px',
                minHeight: '42px',
                height: '42px',
                alignItems: 'center',

                [`& .${tabsClasses.scrollButtons}`]: {
                  '&.Mui-disabled': { opacity: 1 },
                },

                [`.${ tabsClasses.indicator }`]: {
                  display: 'none'
                },

                [`.${ tabsClasses.scrollButtons }`]: {
                  width: '20px',
                  height: '20px',
                  bgcolor: color,
                  borderRadius: '50%',
                  color: '#fff'
                },

                [`.${ tabsClasses.scroller }`]: {
                  mx: '10px'
                }
              }}
            >
              {filters.map((filter, index) => (
                <Tab 
                  key={ index }
                  label={ filter } 
                  sx={{
                    bgcolor: '#fff',
                    width: '95px',
                    textTransform: 'revert',
                    mr: '5px',
                    borderRadius: '4px',
                    minHeight: '40px',
                    height: '40px',
                    p: '2px 3px',
                    fontWeight: 400,
                    color: '#000',
                    border: '1px solid #bdbdbd',
                    fontSize: '13px',
                    
                    '&.Mui-selected': {
                      color,
                      border: `1px solid ${ color }`
                    }
                  }}
                />
              ))}
            </Tabs>
          )}
        </StyledTitle>
      }
    />
    <CardContent
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        p: 0,
        pb: '0!important'
      }}
    >
      {products.map(product => (
        <ProductItem 
          key={ product.id }
          product={ product } 
          hasExtra={ hasExtra }
        />
      ))}
    </CardContent>
    {!!count && (
      <ButtonLink 
        href="" 
        fullWidth
        onClick={ onClickViewMore }
        sx={{
          height: '50px',
          color: theme => theme.palette.info.main,
          textTransform: 'revert',
          fontWeight: 400
        }}
      >
        Xem thêm { count } sản phẩm
        <ArrowRightIcon fontSize="small" />
      </ButtonLink>
    )}
    {!!categories?.length && (
      <CateList>
        {categories.map(cate => (
          <CateItem key={ cate.id }>
            <NextLink 
              href={ cate.url }
              passHref
            >
              <CateLink>
                { cate.name }
              </CateLink>
            </NextLink>
          </CateItem>
        ))}
      </CateList>
    )}
  </StyledCard>

}