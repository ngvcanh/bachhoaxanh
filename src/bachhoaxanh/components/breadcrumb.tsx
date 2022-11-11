import { styled, SxProps, Theme } from "@mui/system"
import Box, { BoxProps } from "@mui/material/Box";
import clsx from 'clsx';
import NextLink from 'next/link';
import Link from "@mui/material/Link";

export interface BreadCrumbPath{
  name: string;
  url: string;
}

export interface BreadcrumbProps extends BoxProps{
  path: BreadCrumbPath[];
}

const StyledBreadcumb = styled(Box)(() => ({
  padding: '6px 0'
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  fontSize: '13px',
  color: theme.palette.info.main,
  position: 'relative',
  display: 'inline-block',
  paddingRight: '9px',
  marginRight: '10px',

  ':not(:last-of-type)': {
    ':before,:after': {
      position: 'absolute',
      content: '""',
      width: 0,
      height: 0,
      top: 'calc(50% - 4px)'
    },

    ':before': {
      borderTop: '4px solid transparent',
      borderBottom: '4px solid transparent',
      borderLeft: '4px solid #979797',
      right: '-4px',
    },
  
    ':after': {
      borderTop: '4px solid transparent',
      borderBottom: '4px solid transparent',
      borderLeft: '4px solid #fff',
      right: '-2px'
    }
  },
}));

export default function Breadcrumb(props: BreadcrumbProps){

  const { className, path, sx, ...rest } = props;

  return <StyledBreadcumb
    { ...rest }
    sx={ sx as SxProps<Theme> }
    className={ clsx('breadcrumb', className) }
  >
    {path.map((p, index) => (
      <NextLink
        href={ p.url }
        passHref
      >
        <StyledLink>
          { p.name }
        </StyledLink>
      </NextLink>
    ))}
  </StyledBreadcumb>

}