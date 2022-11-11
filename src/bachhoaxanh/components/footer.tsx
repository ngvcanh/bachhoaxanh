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
              Đặt online <strong>giao tận nhà ĐÚNG GIỜ</strong><br /> (nếu trễ tặng PMH 50.000đ)
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
              Đổi, trả sản phẩm <strong>trong 7 ngày</strong>
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
              Tổng đài: 1900.1908 - 028.3622.9900 (7:00 - 21:00)
            </Typography>
            <List sx={{ 
              p: '0 7px', 
              display: 'flex',
              flexWrap: 'wrap'
            }}>
              <StyledListItem>
                <SmallLink href="chinh-sach-giao-hang">
                  Chính sách giao hàng
                </SmallLink>
              </StyledListItem>
              <StyledListItem>
                <SmallLink href="chinh-sach-giao-hang">
                  Chính sách khách hàng
                </SmallLink>
              </StyledListItem>
              <StyledListItem>
                <SmallLink href="chinh-sach-doi-tra">
                  Chính sách đổi trả
                </SmallLink>
              </StyledListItem>
              <StyledListItem>
                <SmallLink href="lien-he">
                  Liên hệ
                </SmallLink>
              </StyledListItem>
              <StyledListItem>
                <SmallLink href="hoa-don-dien-tu">
                  Hoá đơn điện tử
                </SmallLink>
              </StyledListItem>
              <StyledListItem>
                <SmallLink href="hương-dan-mua-hang">
                  Hướng dẫn mua hàng
                </SmallLink>
              </StyledListItem>
              <StyledListItem>
                <SmallLink href="quy-che-hoat-dong">
                  Quy chế hoạt động
                </SmallLink>
              </StyledListItem>
              <StyledListItem>
                <SmallLink href="gioi-thieu">
                  Giới thiệu công ty
                </SmallLink>
              </StyledListItem>
              <StyledListItem>
                <SmallLink href="can-thue-mat-bang">
                  Cần thuê mặt bằng
                </SmallLink>
              </StyledListItem>
              <StyledListItem>
                <SmallLink href="hoi-dap">
                  Hỏi đáp
                </SmallLink>
              </StyledListItem>
              <StyledListItem>
                <SmallLink href="tuyen-dung" variant="contained" color="error">
                  Tuyển dụng
                </SmallLink>
              </StyledListItem>
              <StyledListItem>
                <SmallLink href="quy-che-hoat-dong">
                  Tích điểm quà tặng VIP
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
              Đăng ký chào hàng vào Bách Hoá Banh
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
              Hệ thống 
              <Box 
                component="span"
                sx={{ 
                  color: theme => theme.palette.error.main,
                  mx: '4px'
                }}
              >1.730</Box> 
              cửa hàng Bách Hoá Xanh
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
            3.132 công việc đang chờ bạn
          </SmallLink>
        </Box>
        <Box sx={{ p: '0 7px 10px' }}>
          <Box 
            component="span"
            sx={{ fontSize: '13px' }}
          >Website thành viên</Box>
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
      © 2018. Công Ty Cổ Phần Thương Mại Bách Hoá Xanh. 
      GPDKKD: 0310471746 do sở KH & ĐT TP.HCM cấp ngày 23/11/2010. 
      Giấy phép thiết lập mạng xã hội trên mạng (Số 20/GP-BTTTT) do Bộ Thông Tin Và Truyền Thông cấp ngày 11/01/2021. 
      Trụ sở chính: 128 Trần Quang Khải, P.Tân Định, Quận.1, TP.HCM. 
      Địa chỉ liên hệ: Toà nhà MWG, Lô T2-1.2, Đường D1, Khu Công Nghệ Cao, P. Tân Phú, TP.Thủ Đức, TP.HCM. 
      Email:lienhe@bachhoaxanh.com 
      SĐT: 028.38125960 
      Chịu trách nhiệm nội dung: Trần Nhật Linh. 
    </Box>
  </Box>

}