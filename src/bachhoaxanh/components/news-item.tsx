import { styled, SxProps, Theme } from "@mui/system";
import Link, { LinkProps } from "@mui/material/Link";
import clsx from 'clsx';
import NextLink from 'next/link';
import Box, { BoxProps } from "@mui/material/Box";

export interface News{
  title: string;
  image: string | null;
  url: string;
}

export interface NewsItemProps extends LinkProps{
  news: News;
}

const StyledBox = styled(Link)(() => ({
  width: '100%',
  display: 'flex',
  flex: 1,
  textDecoration: 'none',
  fontSize: '13px',
  padding: '15px 0',
 
  ':first-of-type': {
    paddingTop: 0
  },

  ':not(:last-of-type)': {
    borderBottom: '1px solid #f3f3f3'
  }
}));

const StyledImage = styled(Box)<BoxProps<'img'>>(() => ({
  width: '65px',
  height: '38px',
  minWidth: '65px',
  objectFit: 'cover',
  objectPosition: 'center',
  marginRight: '10px'
}));

const StyledTitle = styled(Box)(() => ({
  height: '38px',
  lineHeight: 1.3,
  overflow: 'hidden',
  color: '#4a4a4a'
}));

export default function NewsItem(props: NewsItemProps){

  const { news, className, sx, ...rest } = props;

  return <NextLink
    href={ news.url }
    passHref
  >
    <StyledBox
      { ...rest }
      className={ clsx('news-item', className) }
      sx={ sx as SxProps<Theme> }
    >
      <StyledImage
        component="img"
        src={ news.image ?? '' }
        alt={ news.title }
      />
      <StyledTitle>
        { news.title }
      </StyledTitle>
    </StyledBox>
  </NextLink>
  
  

}