import Box, { BoxProps } from "@mui/material/Box"
import { styled } from "@mui/system"

const StyledBox = styled(Box)<BoxProps<'span'>>(() => ({
  display: 'inline-block',
  color: '#fff',
  backgroundColor: '#D32136',
  textTransform: 'uppercase',
  position: 'absolute',
  top: '10px',
  right: '10px',
  fontSize: '12px',
  fontWeight: 600,
  padding: '0 6px 0 3px',
  height: '20px',
  lineHeight: '20px',
  borderTopRightRadius: '3px',

  ':before,:after': {
    position: 'absolute',
    content: '""',
    display: 'inline-block',
    width: 0,
    height: 0,
  },

  ':before': {
    borderLeft: '7px solid transparent',
    borderTop: '10px solid #D32136',
    borderBottom: '10px solid #D32136',
    left: '-7px'
  },

  ':after': {
    top: '16px',
    right: 0,
    borderLeft: '5px solid transparent',
    borderTop: '7px solid #D32136',
  }
}))

export default function Wholesale(){

  return <StyledBox>
    Giá sỉ
  </StyledBox>

}