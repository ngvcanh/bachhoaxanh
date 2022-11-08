import { useState } from "react";
import { SidebarMenu } from "src/bachhoaxanh/slices/layout";
import { svgIconClasses } from "@mui/material/SvgIcon";
import Button, { buttonClasses } from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import ButtonLink from "../button-link";

interface MenuProps{
  menu: SidebarMenu[];
  level?: number;
  board?: boolean;
}

interface MenuItemProps{
  item: SidebarMenu;
  level: number;
  board: boolean;
}

const MenuItem = (props: MenuItemProps) => {

  const { item, level, board } = props;
  const [ open, setOpen ] = useState(false);
  const [ active, setActive ] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return <>
    <ListItem
      disableGutters
      sx={{
        display: 'block',
        p: 0,
        ...(level > 0 && {
          mb: '4px',
          ":hover": {
            backgroundColor: 'transparent'
          }
        })
      }}
    >
      {item.children?.length ? (
        <Button
          disableRipple
          startIcon={ item.icon }
          endIcon={
            !open
              ? <ExpandMoreIcon fontSize="small" />
              : <ChevronRightIcon fontSize="small" />
          }
          sx={{
            width: '100%',
            textDecoration: 'revert',
            justifyContent: 'flex-start',
            px: '7px',
            fontFamily: 'Helvetica,Arial,sans-serif',

            [`.${ buttonClasses.endIcon }`]: {
              color: theme => theme.palette.secondary.main,

              [`.${ svgIconClasses.root }`]: {
                fontSize: '14px',
                transition: theme => theme.transitions.create('all', {
                  duration: theme.transitions.duration.short,
                  easing: theme.transitions.easing.easeInOut
                })
              }
            }
          }}
          onClick={ toggleMenu }
        >
          <Box
            sx={{ 
              flexGrow: 1, 
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              textAlign: 'left',
              color: theme => theme.palette.secondary.main,
              fontSize: '12px',
              fontWeight: 600
            }}
          >
            { item.text }
          </Box>
        </Button>
      ) : (
        <ButtonLink
          href={ item.url ?? '' }
          disableRipple
          startIcon={ item.icon }
          sx={{
            width: '100%',
            justifyContent: 'flex-start',
            px: '7px',
            fontFamily: 'Helvetica,Arial,sans-serif',
            color: theme => active ? theme.palette.primary.main : theme.palette.secondary.main,
            fontWeight: level > 0 || board ? 400 : 600,
            fontSize: '12px',

            ...((level > 0 || board) && {
              textTransform: 'revert',
              py: 0,

              ':hover': {
                color: theme => theme.palette.primary.main,
                backgroundColor: 'transparent'
              }
            }),

            ...(!!board && {
              mt: '3px'
            })
          }}
        >
          { item.text }
        </ButtonLink>
      )}
    </ListItem>
    {!!item.children?.length && (
      <Collapse in={ open }>
        <Menu 
          menu={ item.children } 
          level={ level + 1 } 
        />
      </Collapse>
    )}
  </>

}

export default function Menu(props: MenuProps){

  const { menu, level = 0, board = false } = props;

  return <List
    disablePadding={ level > 0 || board }
    sx={{
      ...(level > 0 && {
        pl: '10px'
      })
    }}
  >
    { menu.map((item, index) => (
      <MenuItem 
        key={ index }
        item={ item } 
        level={ level }
        board={ board }
      />
    )) }
  </List>
}