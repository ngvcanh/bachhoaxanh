import { styled, SxProps, Theme } from "@mui/system";
import Box, { BoxProps } from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

export interface SpecialOfferProps extends BoxProps{
  offers: string[];
}

const Special = styled(Box)(() => ({
  borderRadius: '3px',
  marginTop: '10px',
  backgroundImage: 'linear-gradient(to right bottom,#ffd601,#ff8a00)',
  padding: '1px'
}));

const SpecialWrapper = styled(Box)(() => ({
  backgroundColor: '#fff',
  borderRadius: 'inherit',
  padding: '15px'
}));

const Header = styled(Box)(() => ({
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  textTransform: 'uppercase',
  fontWeight: 700,
  borderBottom: '1px dashed #d6e0f5',
  padding: '0 0 10px'
}));

const StyledItem = styled(ListItem)(() => ({
  position: 'relative',
  padding: '2px 0',
  fontSize: '12px',
  alignItems: 'flex-start',
  
  ':before': {
    content: '""',
    width: '3px',
    height: '3px',
    minWidth: '3px',
    borderRadius: '50%',
    backgroundColor: '#666',
    display: 'inline-block',
    marginTop: '7px',
    marginRight: '8px'
  }
}))

export default function SpecialOffer(props: SpecialOfferProps){

  const { sx, offers, ...rest } = props;

  return <Special
    { ...rest }
    sx={ sx as SxProps<Theme> }
  >
    <SpecialWrapper>
      <Header>
        <LocalFireDepartmentIcon 
          color="error" 
          sx={{ ml: '10px' }} 
        />
        Ưu đãi đặc biệt
      </Header>
      <List 
        disablePadding 
        sx={{ mt: '10px' }}
      >
        {offers.map((offer, index) => (
          <StyledItem key={ index }>
            { offer }
          </StyledItem>
        ))}
      </List>
    </SpecialWrapper>
  </Special>

}