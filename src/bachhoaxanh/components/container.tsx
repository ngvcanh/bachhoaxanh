import { PropsWithChildren } from "react";
import { styled, SxProps, Theme } from "@mui/system";
import Box, { BoxProps } from "@mui/material/Box";
import clsx from 'clsx';
import config from "../app/config";

export interface ContainerProps extends BoxProps{}

const StyledBox = styled(Box)(({ theme }) => ({
  margin: '0 auto',
  [theme.breakpoints.up('lg')]: {
    width: config.layout.maxWidth,
    maxWidth: config.layout.maxWidth
  }
}))

export default function Container(props: PropsWithChildren<ContainerProps>){

  const { children, className, sx, ...rest } = props;

  return <StyledBox
    { ...rest }
    sx={ sx as SxProps<Theme> }
    className={ clsx("container-box", className) }
  >
    { children }
  </StyledBox>

}