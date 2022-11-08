import Box from "@mui/material/Box";
import PinDropIcon from '@mui/icons-material/PinDrop';
import { svgIconClasses } from "@mui/material/SvgIcon";

export default function HeaderLocation(){

  return <Box
    sx={{
      width: '185px',
      minWidth: '185px',
      height: '35px',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      borderRadius: '4px',
      display: 'flex',
      lineHeight: 1,
      p: '0 4px',
      
      [`.${ svgIconClasses.root }`]: {
        ml: '-12px',
        mt: '6px',
        mr: '4px'
      }
    }}
  >
    <PinDropIcon />
    <Box>
      <Box 
        component="span"
        sx={{
          fontSize: '11px'
        }}
      >
        Chọn tỉnh thành, quận huyện để xem chính xác tồn kho
      </Box>
    </Box>
    
  </Box>

}