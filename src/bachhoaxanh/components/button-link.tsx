import { forwardRef, PropsWithChildren } from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import NextLink from 'next/link';

export interface ButtonLinkProps extends ButtonProps<'a'>{}

const ButtonLink = forwardRef<HTMLAnchorElement, PropsWithChildren<ButtonLinkProps>>(
  function ButtonLink(props, ref){

    const { href = '', children, ...rest } = props;

    return <NextLink
      href={ href }
      passHref
    >
      <Button
        { ...rest }
        component="a"
        ref={ ref }
      >
        { children }
      </Button>
    </NextLink>

  }
);

export default ButtonLink;