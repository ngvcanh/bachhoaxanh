import { styled } from "@mui/system";
import { svgIconClasses } from "@mui/material/SvgIcon";
import { Banner } from "../types/scheme/banner";
import IconButton, { iconButtonClasses } from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Slider from "react-slick";
import ButtonLink from "./button-link";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";

export interface SliderBannerProps{
  banners: Banner[];
}

const StyledSlider = styled(Slider)(() => ({
  height: '100%',

  '.slick-slide>div': {
    height: '100%'
  },

  '.slick-arrow::before': {
    display: 'none'
  },

  '.slick-prev': {
    left: '15px',
    zIndex: 2,
    ':hover,:focus': {
      backgroundColor: '#028848',
      [`.${ svgIconClasses.root }`]: {
        color: '#fff'
      }
    }
  },

  '.slick-next': {
    right: '15px',
    zIndex: 2,
    ':hover,:focus': {
      backgroundColor: '#028848',
      [`.${ svgIconClasses.root }`]: {
        color: '#fff'
      }
    }
  },

  ':hover': {
    [`.${ iconButtonClasses.root }`]: {
      width: '32px',
      height: '32px',

      '&.slick-prev': {
        left: '9px'
      },

      '&.slick-next': {
        right: '9px'
      },

      [`.${ svgIconClasses.root }`]: {
        fontSize: '26px'
      }
    }
  }
}));

const IconArrow = styled(IconButton)(() => ({
  width: '20px',
  height: '20px',
  backgroundColor: '#028848',
  position: 'absolute',
  padding: 0,
  color: '#fff',
  zIndex: 2,
  ':hover': {
    backgroundColor: '#028848',
    [`.${ svgIconClasses.root }`]: {
      color: '#fff'
    }
  }
}))

export default function SliderBanner(props: SliderBannerProps){

  const { banners } = props;
  const settings = {
    dot: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }

  return <StyledSlider 
    { ...settings }
    prevArrow={
      <IconArrow>
        <NavigateBeforeIcon sx={{ fontSize: '18px' }} />
      </IconArrow>
    }
    nextArrow={
      <IconArrow>
        <NavigateNextIcon sx={{ fontSize: '18px' }} />
      </IconArrow>
    }
  >
    {banners.map(banner => (
      <ButtonLink
        key={ banner.id }
        href={ banner.url }
        sx={{
          height: '100%',
          p: 0,

          img: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center'
          }
        }}
      >
        <Box component="img" src={ banner.image } alt={ banner.title } />
      </ButtonLink>
    ))}
  </StyledSlider>

}