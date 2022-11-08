import Box from "@mui/material/Box";
import ButtonLink from "./button-link";

export interface CategoryProps{
  image: string;
  name: string;
  url: string;
}

export default function Category(props: CategoryProps){

  const { image, name, url } = props;

  return <ButtonLink
    href={ url }
    sx={{
      p: 0,
      width: '98px',
      minWidth: '98px',
      height: '84px',
      flexDirection: 'column',
      textTransform: 'revert',
      color: theme => theme.palette.info.main,
      alignItems: 'center',
      justifyContent: 'flex-start'
    }}
  >
    <Box 
      component="img" 
      src={ image }
      alt={ name }
      sx={{
        width: '45px',
        height: '45px',
        objectFit: 'cover',
        objectPosition: 'center'
      }}
    />
    <Box 
      component="span"
      sx={{
        lineHeight: '1.3em',
        fontSize: '13px',
        display: 'inline-block',
        textAlign: 'center',
        px: '5px'
      }}
    >{ name }</Box>
  </ButtonLink>

}