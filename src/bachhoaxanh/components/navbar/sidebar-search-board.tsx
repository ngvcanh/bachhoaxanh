import { styled } from "@mui/system";
import { Scrollbar } from "src/components/scrollbar";
import { useSelector } from "src/store";
import Box from "@mui/material/Box";
import FactCheckIcon from '@mui/icons-material/FactCheck';
import Menu from "./sidebar-menu";
import NextLink from 'next/link';
import Button from "@mui/material/Button";
import { SidebarMenu } from "src/bachhoaxanh/slices/layout";

interface SearchBoardProps{
  text: string;
}

const StyledBoard = styled(Box)(() => ({
  height: '160px',
  padding: '0 7px',
  overflow: 'hidden'
}));

export default function SearchBoard(props: SearchBoardProps){ 

  const { text } = props;
  const { menu, defaultSearchBoard } = useSelector(state => state.layout.sidebar);

  return <StyledBoard>
    <Scrollbar>
      <Box
        sx={{
          display: 'flex',
          flex: 1,
        }}
      >
        <FactCheckIcon 
          sx={{
            fontSize: '16px',
            mt: '3px'
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          <Box>
            <NextLink 
              href="he-thong-sieu-thi"
              passHref
            >
              <Button
                component="a"
                disableRipple
                disableTouchRipple
                disableFocusRipple
                sx={{ 
                  p: '0 7px',
                  color: theme => theme.palette.secondary.main,
                  display: 'block',
                  textTransform: 'revert',
                  fontWeight: theme => theme.typography.fontWeightRegular,

                  ':hover': {
                    bgcolor: 'transparent'
                  }
                }}
              >
                Danh sách <strong>1.730</strong> cửa hàng
              </Button>
            </NextLink>
          </Box>
          {(() => {
            const _menu: SidebarMenu[] = [];
            const _text = text.toLowerCase();

            const findMenu = (m: SidebarMenu[]) => {
              m.forEach(_m => {
                if (_m.children?.length){
                  findMenu(_m.children);
                }
                else{
                  const _name = _m.text.toLowerCase();
                  _name.includes(_text) && _menu.push(_m);
                }
              });
            }

            text && findMenu(menu);

            return <Menu
              menu={ text && _menu.length ? _menu : defaultSearchBoard }
              board
            />
          })()}
        </Box>
      </Box>
    </Scrollbar>
  </StyledBoard>

}