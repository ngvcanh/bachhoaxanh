import SearchIcon from '@mui/icons-material/Search';
import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import ClearIcon from '@mui/icons-material/Clear';
import Box from '@mui/material/Box';

export interface SearchProps{
  text: string;
  onChange(value: string): void;
}

export default function Search(props: SearchProps){

  const { text, onChange } = props;

  return <Box
    sx={{
      alignItems: 'center',
      display: 'flex',
      height: '34px',
      border: '1px solid #e5e5e5',
      mx: '7px',
      mb: '22px',
      borderRadius: '4px',
      p: '0 2px 0 8px'
    }}
  >
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <Input
        disableUnderline
        fullWidth
        value={ text }
        onChange={ e => onChange(e.target.value) }
        placeholder="Tìm hơn 200 món hàng"
        sx={{
          fontSize: '12px',
          pr: '2px'
        }}
      />
    </Box>
    {!!text.length ? (
      <IconButton
        sx={{
          width: '20px',
          height: '20px',
          bgcolor: '#a59b9b',
          ':hover': {
            bgcolor: '#a59b9b'
          }
        }}
        onClick={() => onChange('')}
      >
        <ClearIcon 
          sx={{ 
            fontSize: '16px',
            color: '#fff'
          }} 
        />
      </IconButton>
    ) : (
      <SearchIcon 
        sx={{
          color: '#e5e5e5',
          fontSize: '20px'
        }}
      />
    )}
  </Box>
}