import { styled, SxProps, Theme } from '@mui/system';
import { Scrollbar } from 'src/components/scrollbar';
import { News } from '../types/scheme/news';
import Card, { CardProps } from '@mui/material/Card';
import NewsItem from './news-item';
import CardHeader from '@mui/material/CardHeader';
import Link from '@mui/material/Link';
import NextLink from 'next/link'
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';

export interface NewsBoardProps extends CardProps{
  titleLink?: string;
  viewMoreLink?: string;
  news: News[];
}

const Board = styled(Card)(() => ({
  marginTop: '10px',
  borderRadius: 0 
}));

const VideoBox = styled(Box)(() => ({
  width: '600px',
  minWidth: '600px',
  height: '328px'
}));

const NewsBox = styled(Box)(() => ({
  width: '100%',
}));

const NewsList = styled(Box)(() => ({
  width: '100%',
  height: '328px'
}));

const Frame = styled('iframe')(() => ({
  border: 'none'
}));

const ViewMore = styled(Link)(({ theme }) => ({
  fontSize: '13px',
  color: theme.palette.info.main,
  textDecoration: 'none',
  padding: '0 0 15px',
  display: 'inline-block'
}));

export default function NewsBoard(props: NewsBoardProps){

  const { news, titleLink, viewMoreLink, sx, ...rest } = props;

  return <Board
    { ...rest }
    sx={ sx as SxProps<Theme> }
  >
    <CardHeader 
      title={
        <NextLink
          href={ titleLink ?? '' }
          passHref
        >
          <Link
            sx={{
              textTransform: 'uppercase',
              textDecoration: 'none',
              display: 'block',
              color: theme => theme.palette.info.main,
              overflow: 'hidden',
              fontSize: '13px',
              p: '10px 7px',
              fontWeight: 600
            }}
          >Mẹo hay trong gia đình</Link>
        </NextLink>
      }
      sx={{ p: 0 }}
    />
    <CardContent
      sx={{ 
        p: '0 7px',
        pb: '0!important',
        display: 'flex',
        flex: 1
      }}
    >
      <VideoBox>
        <Frame 
          width="580" 
          height="326" 
          src="https://www.youtube.com/embed/videoseries?list=PLuhqQ0YoA_Kf1O5AZGrGDxdtbhVGVv0LD" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        ></Frame>
      </VideoBox>
      <NewsBox>
        <NewsList>
          <Scrollbar>
            {news.map(n => (
              <NewsItem 
                key={ n.id }
                news={ n } 
              />
            ))}
          </Scrollbar>
        </NewsList>
        {!!viewMoreLink && (
          <NextLink
            href=""
            passHref
          >
            <ViewMore>Xem các bài tin khác »</ViewMore>
          </NextLink>
        )}
      </NewsBox>
    </CardContent>
  </Board>

}