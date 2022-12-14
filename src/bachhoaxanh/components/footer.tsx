import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ButtonLink, { ButtonLinkProps } from "./button-link";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import ShippingRole from "./shipping-role";

const SmallLink = styled(ButtonLink)(({ theme, variant }) => ({
  textTransform: 'revert',
  fontSize: '12px',
  fontWeight: 400,
  padding: '4px 10px',
  color: variant === 'contained' ? '#fff' : theme.palette.info.main,
  borderRadius: 0
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  position: 'relative',
  padding: 0,
  width: '33.3333%',
  minWidth: '33.3333%',

  '::before': {
    content: '""',
    position: 'absolute',
    top: 'calc(50% - 1px)',
    left: 0,
    width: 2,
    height: 2,
    backgroundColor: theme.palette.info.main,
    borderRadius: '1px'
  }
}));

interface ImageIconProps extends ButtonLinkProps{
  bgp: string;
  width: string | number;
  height?: string | number;
}

const ImageIcon = styled(ButtonLink, {
  shouldForwardProp(propName) {
    return !['bgp', 'width', 'height'].includes(propName.toString())
  },
})<ImageIconProps>(({ bgp, width, height = '18px' }) => ({
  marginLeft: '10px',
  width,
  height,
  backgroundImage: 'url("https://cdn.tgdd.vn/bachhoaxanh/www/Content/images/desktop/bhxdesk@2x.v202211090045.png")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '500px auto',
  backgroundPosition: bgp
}))

export default function Footer(){

  return <Box className="footer">
    <Card sx={{
      mt: '10px',
      borderRadius: 0
    }}>
      <CardContent sx={{ p: 0, pb: '0!important' }}>
        <ShippingRole />
        {/* <Box sx={{
          display: 'flex',
          flex: 1,
          py: '16px',
          borderBottom: '1px solid #f0f0f0',
          position: 'relative',

          ':after': {
            content: '""',
            position: 'absolute',
            height: '20px',
            width: 0,
            top: 'calc(50% - 10px)',
            left: '50%',
            borderLeft: '1px solid #d1d1d1'
          }
        }}>
          <Box sx={{ 
            width: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <AccessTimeIcon sx={{ color: 'error.main' }} />
            <Box sx={{ ml: '10px' }}>
              ?????t online <strong>giao t???n nh?? ????NG GI???</strong><br /> (n???u tr??? t???ng PMH 50.000??)
            </Box>
          </Box>
          <Box sx={{ 
            width: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <SettingsBackupRestoreIcon sx={{ color: 'info.main' }} />
            <Box>
              ?????i, tr??? s???n ph???m <strong>trong 7 ng??y</strong>
            </Box>
          </Box>
        </Box> */}
        <Grid container spacing={ 0 }>
          <Grid item md={ 7 }>
            <Typography 
              component="h5"
              sx={{
                p: '10px 7px',
                color: 'primary.main',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                fontSize: '14px'
              }}
            >
              <WhatsAppIcon 
                fontSize="small"
                sx={{ mr: '6px' }} 
              />
              T???ng ????i: 1900.1908 - 028.3622.9900 (7:00 - 21:00)
            </Typography>
            <List sx={{ 
              p: '0 7px', 
              display: 'flex',
              flexWrap: 'wrap'
            }}>
              <StyledListItem>
                <SmallLink href="chinh-sach-giao-hang">
                  Ch??nh s??ch giao h??ng
                </SmallLink>
              </StyledListItem>
              <StyledListItem>
                <SmallLink href="chinh-sach-giao-hang">
                  Ch??nh s??ch kh??ch h??ng
                </SmallLink>
              </StyledListItem>
              <StyledListItem>
                <SmallLink href="chinh-sach-doi-tra">
                  Ch??nh s??ch ?????i tr???
                </SmallLink>
              </StyledListItem>
              <StyledListItem>
                <SmallLink href="lien-he">
                  Li??n h???
                </SmallLink>
              </StyledListItem>
              <StyledListItem>
                <SmallLink href="hoa-don-dien-tu">
                  Ho?? ????n ??i???n t???
                </SmallLink>
              </StyledListItem>
              <StyledListItem>
                <SmallLink href="h????ng-dan-mua-hang">
                  H?????ng d???n mua h??ng
                </SmallLink>
              </StyledListItem>
              <StyledListItem>
                <SmallLink href="quy-che-hoat-dong">
                  Quy ch??? ho???t ?????ng
                </SmallLink>
              </StyledListItem>
              <StyledListItem>
                <SmallLink href="gioi-thieu">
                  Gi???i thi???u c??ng ty
                </SmallLink>
              </StyledListItem>
              <StyledListItem>
                <SmallLink href="can-thue-mat-bang">
                  C???n thu?? m???t b???ng
                </SmallLink>
              </StyledListItem>
              <StyledListItem>
                <SmallLink href="hoi-dap">
                  H???i ????p
                </SmallLink>
              </StyledListItem>
              <StyledListItem>
                <SmallLink href="tuyen-dung" variant="contained" color="error">
                  Tuy???n d???ng
                </SmallLink>
              </StyledListItem>
              <StyledListItem>
                <SmallLink href="quy-che-hoat-dong">
                  T??ch ??i???m qu?? t???ng VIP
                </SmallLink>
              </StyledListItem>
            </List>
          </Grid>
          <Grid item md={ 5 }>
            <Typography 
              component="h5"
              sx={{
                p: '10px 7px',
                color: 'primary.main',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                fontSize: '14px',
                justifyContent: 'center'
              }}
            >
              <FileOpenIcon 
                fontSize="small"
                color="info"
                sx={{ mr: '6px' }} 
              />
              ????ng k?? ch??o h??ng v??o B??ch Ho?? Banh
            </Typography>
            <Typography 
              component="h5"
              sx={{
                p: '0 7px 10px 7px',
                color: 'info.main',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                fontSize: '14px',
                justifyContent: 'center'
              }}
            >
              <FileOpenIcon 
                fontSize="small"
                color="info"
                sx={{ mr: '6px' }} 
              />
              H??? th???ng 
              <Box 
                component="span"
                sx={{ 
                  color: theme => theme.palette.error.main,
                  mx: '4px'
                }}
              >1.730</Box> 
              c???a h??ng B??ch Ho?? Xanh
            </Typography>
            <Box>
              <ImageIcon
                href="https://bocongthuong.gov.vn"
                bgp="-286px -110px"
                width="92px"
                height="32px"
              />
            </Box>
          </Grid>
        </Grid>
        <Box>
          <SmallLink sx={{ fontWeight: 600 }}>
            3.132 c??ng vi???c ??ang ch??? b???n
          </SmallLink>
        </Box>
        <Box sx={{ p: '0 7px 10px' }}>
          <Box 
            component="span"
            sx={{ fontSize: '13px' }}
          >Website th??nh vi??n</Box>
          <ImageIcon
            href="https://thegioididong.com"
            bgp="-171px -68px"
            width="115px"
          />
          <ImageIcon
            href="https://dienmayxanh.com"
            bgp="-171px -88px"
            width="115px"
          />
          <ImageIcon
            href="https://dienmayxanh.com"
            bgp="-150px -240px"
            width="63px"
          />
        </Box>
      </CardContent>
    </Card>
    <Box 
      className="copyright" 
      sx={{
        fontSize: '10px',
        textAlign: 'center',
        p: '5px',
        color: '#999',
        lineHeight: 2
      }}
    >
      ?? 2018. C??ng Ty C??? Ph???n Th????ng M???i B??ch Ho?? Xanh. 
      GPDKKD: 0310471746 do s??? KH & ??T TP.HCM c???p ng??y 23/11/2010. 
      Gi???y ph??p thi???t l???p m???ng x?? h???i tr??n m???ng (S??? 20/GP-BTTTT) do B??? Th??ng Tin V?? Truy???n Th??ng c???p ng??y 11/01/2021. 
      Tr??? s??? ch??nh: 128 Tr???n Quang Kh???i, P.T??n ?????nh, Qu???n.1, TP.HCM. 
      ?????a ch??? li??n h???: To?? nh?? MWG, L?? T2-1.2, ???????ng D1, Khu C??ng Ngh??? Cao, P. T??n Ph??, TP.Th??? ?????c, TP.HCM. 
      Email:lienhe@bachhoaxanh.com 
      S??T: 028.38125960 
      Ch???u tr??ch nhi???m n???i dung: Tr???n Nh???t Linh. 
    </Box>
  </Box>

}