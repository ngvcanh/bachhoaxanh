import { FC, PropsWithChildren } from 'react';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../app/theme';
import CssGlobal from './css-global';
import Navbar from './navbar';
import Body from './body';

export interface MainLayoutProps{

}

export default function MainLayout(props: PropsWithChildren<MainLayoutProps>){

  const { children } = props;

  return <ThemeProvider theme={ theme }>
    <CssBaseline />
    {/* <StyledEngineProvider injectFirst> */}
      <CssGlobal />
    {/* </StyledEngineProvider> */}
    <Navbar />
    <Body>
      { children }
    </Body>
  </ThemeProvider>

}