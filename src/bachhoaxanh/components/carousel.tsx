import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export interface CarouselProps{
  images: string[];
  alt?: string;
}

const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',

  '.carousel .thumb': {
    border: '1px solid #f3f3f3',
    borderRadius: '4px'
  },

  '.carousel .thumb.selected, .carousel .thumb:hover': {
    border: `1px solid ${ theme.palette.primary.main }`
  },

  '.carousel.carousel-slider .control-arrow': {
    backgroundColor: '#d6d6d6',
    height: '60px',
    width: '21px',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 'calc(50% - 30px)',
    opacity: 1,
    filter: 'alpha(opacity=100)',

    '&.control-disabled': {
      opacity: 0.4,
      filter: 'alpha(opacity=40)'
    },

    ':before,:after': {
      content: '""',
      width: 0,
      height: 0,
      position: 'absolute',
      left: 0,
      top: 0,
      display: 'block',
      margin: 'auto',
      right: 0,
      bottom: 0,
    },

    '&.control-prev': {
  
      ':before': {
        borderRight: '10px solid #000',
        borderTop: '10px solid transparent',
        borderBottom: '10px solid transparent',
      },
  
      ':after': {
        borderRight: '10px solid #d6d6d6',
        borderTop: '10px solid transparent',
        borderBottom: '10px solid transparent',
      }
    },

    '&.control-next': {
  
      ':before': {
        borderLeft: '10px solid #000',
        borderTop: '10px solid transparent',
        borderBottom: '10px solid transparent',
      },
  
      ':after': {
        borderLeft: '10px solid #d6d6d6',
        borderTop: '10px solid transparent',
        borderBottom: '10px solid transparent',
      }
    }
  },

  '.carousel .carousel-status': {
    backgroundColor: 'rgba(0, 0, 0, 0.34)',
    bottom: '20px',
    right: '25px',
    top: 'auto',
    textShadow: 'none',
    fontSize: '13px',
    padding: '0 7px',
    borderRadius: '2px',
  },
  '.carousel .thumbs-wrapper': {
    margin: 0
  },

  '.carousel .control-arrow': {
    zIndex: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.34)',

    '&.control-disabled': {
      opacity: 0.4,
      filter: 'alpha(opacity=40)',
      display: 'inline-block'
    }
  }
}))

const Image = styled(Box)(() => ({

}));

export default function Carousel(props: CarouselProps){

  const { images, alt } = props;

  return <Container>
    <ReactCarousel
      showArrows
      showThumbs
      showIndicators={ false }
      autoPlay={ false }
      statusFormatter={(currentItem, total) => `${ currentItem }/${ total }`}
    >
      {images.map((image, index) => (
        <div key={ index }>
          <img
            src={ image }
            alt={ alt ?? '' }
          />
        </div>
      ))}
    </ReactCarousel>
  </Container>

}