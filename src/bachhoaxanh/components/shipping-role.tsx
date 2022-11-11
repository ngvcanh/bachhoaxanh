import { styled, SxProps, Theme } from "@mui/system";
import Box, { BoxProps } from "@mui/material/Box";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';

interface Styled{
  wrap?: boolean;
}

export interface ShippingRoleProps extends BoxProps, Styled{}

const styledOptions = {
  shouldForwardProp(prop: PropertyKey){
    return prop !== 'wrap'
  }
}

const Shipping = styled(Box, styledOptions)<BoxProps & Styled>(({ wrap }) => ({
  display: 'flex',
  flex: 1,
  paddingTop: wrap ? '10px' : '16px',
  paddingBottom: wrap ? '10px' : '16px',
  borderBottom: '1px solid #f0f0f0',
  position: 'relative',

  ...(wrap && {
    flexDirection: 'column',
    backgroundColor: '#f6f8fa',
    padding: '10px'
  }),

  ...(!wrap && {
    paddingTop: '16px',
    paddingBottom: '16px',

    ':after': {
      content: '""',
      position: 'absolute',
      height: '20px',
      width: 0,
      top: 'calc(50% - 10px)',
      left: '50%',
      borderLeft: '1px solid #d1d1d1'
    }
  })
}));

export default function ShippingRole(props: ShippingRoleProps){

  const { sx, wrap, ...rest } = props;

  return <Shipping 
    { ...rest }
    sx={ sx as SxProps<Theme> }
    wrap={ wrap }
  >
    <Box sx={{ 
      width: wrap ? undefined : '50%',
      display: 'flex',
      justifyContent: wrap ? 'flex-start' : 'center',
      alignItems: 'center'
    }}>
      <AccessTimeIcon sx={{ color: 'error.main', fontSize: wrap ? '16px' : undefined }} />
      <Box sx={{ ml: '10px' }}>
        Đặt online <strong>giao tận nhà ĐÚNG GIỜ</strong> (nếu trễ tặng PMH 50.000đ)
      </Box>
    </Box>
    <Box sx={{ 
      width: wrap ? undefined : '50%',
      display: 'flex',
      justifyContent: wrap ? 'flex-start' : 'center',
      alignItems: 'center',
      mt: wrap ? '10px' : undefined
    }}>
      <SettingsBackupRestoreIcon sx={{ color: 'info.main', fontSize: wrap ? '16px' : undefined }} />
      <Box sx={{ ml: '10px' }}>
        Đổi, trả sản phẩm <strong>trong 7 ngày</strong>
      </Box>
    </Box>
  </Shipping>

}