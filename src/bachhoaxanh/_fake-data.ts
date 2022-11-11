import { Banner } from "./types/scheme/banner";
import { Category } from "./types/scheme/category";
import { News } from "./types/scheme/news";
import { Product } from "./types/scheme/product";
import { SidebarMenu } from "./types/sidebar";

export const sidebarMenu: SidebarMenu[] = [
  {
    text: 'KHUYẾN MÃI HOT',
    url: 'khuyen-mai'
  },
  {
    text: 'THỊT, CÁ, TRỨNG, HẢI SẢN',
    children: [
      {
        text: 'Thịt các loại',
        url: 'thit-cac-loai'
      },
      {
        text: 'Cá, hải sản',
        url: 'ca-tom-muc-ech'
      },
      {
        text: 'Trứng gà, vịt, cút',
        url: 'trung'
      }
    ]
  },
  {
    text: 'RAU, CỦ, TRÁI CÂY',
    children: [
      {
        text: 'Rau lá các loại',
        url: 'rau-sach'
      },
      {
        text: 'Củ, quả các loại',
        url: 'cu'
      },
      {
        text: 'Trái cây các loại',
        url: 'trai-cay-noi'
      }
    ]
  },
  {
    text: 'THỰC PHẨM ĐÔNG - MÁT',
    children: [
      {
        text: 'Kem các loại',
        url: 'kem'
      },
      {
        text: 'Bánh đông, bánh tươi',
        url: 'banh-dong-mat'
      },
      {
        text: 'Xúc xích, lạp xưởng, chả lụa',
        url: 'xuc-xich-la-xuong-cha-lua'
      },
      {
        text: 'Chả giò, cá - bò viên',
        url: 'cha-ca-bo-vien-ha-cao'
      },
      {
        text: 'Há cảo, sủi cảo',
        url: 'ha-cao-xui-cao-xiu-mai'
      },
      {
        text: 'Thịt, cá, rau đông lạnh',
        url: 'thit-ca-rau-dong-lanh'
      },
      {
        text: 'Thực phẩm làm sẵn',
        url: 'thuc-pham-lam-san'
      },
      {
        text: 'Sữa chua, phô mai',
        url: 'sua-chua-pho-mai'
      },
      {
        text: 'Bánh Flan, đậu hũ, kim chi,...',
        url: 'hang-dong-mat-khac'
      }
    ]
  }
];

export const sidebarSearchDefault: Omit<SidebarMenu, 'children'>[] = [
  {
    text: 'Sim, thẻ cào',
    url: 'sim-so-dep'
  },
  {
    text: "Trả góp, điện nước",
    url: 'tien-ich/thanh-toan-tra-gop'
  },
  {
    text: "Mua phiếu mua hàng",
    url: "dat-mua-phieu-mua-hang"
  }
];

export const navbarSearchMessage: string [] = [
  'Bạn tìm gì?',
  'Thịt cá, rau củ cái gì cũng có!',
  'Uniliver vô vàn giảm giá',
  'Hàng tiêu dùng tìm gì cũng có!',
  'Giao nhanh, đơn ít cũng giao!'
];

export const banners: Banner[] = [
  {
    id: 1,
    title: '',
    url: '',
    image: 'https://cdn.tgdd.vn/bachhoaxanh/banners/5599/banh-snack-trai-cay-say-081120229823.jpg'
  },
  {
    id: 2,
    title: '',
    url: '',
    image: 'https://cdn.tgdd.vn/bachhoaxanh/banners/5599/giay-ve-sinh-khan-uot-giam-den-49-khi-mua-san-pham-thu-2-01112022212221.jpg'
  },
  {
    id: 3,
    title: '',
    url: '',
    image: 'https://cdn.tgdd.vn/bachhoaxanh/banners/2505/sua-gia-si-03112022956.jpg'
  },
  {
    id: 4,
    title: '',
    url: '',
    image: 'https://cdn.tgdd.vn/bachhoaxanh/banners/5599/chao-noi-to-dia-giam-den-49-0311202211345.jpg'
  },
  {
    id: 5,
    title: '',
    url: '',
    image: 'https://cdn.tgdd.vn/bachhoaxanh/banners/5599/fresh-khuyen-mai-gia-soc-2010202222524.jpg'
  },
]

export const categories: Category[] = [
  {
    id: 1,
    name: "Thịt heo các loại",
    image: "https://cdn.tgdd.vn/Products/Images/8781/bhx/icon_8781.v202211082130.png",
    url: "thit-heo"
  },
  {
    id: 2,
    name: "Kem các loại",
    image: "https://cdn.tgdd.vn/Products/Images/7462/bhx/icon-kem_st.v202211082130.png",
    url: "kem"
  },
  {
    id: 3,
    name: "Nước giặt",
    image: "https://cdn.tgdd.vn/Products/Images/2464/bhx/icon_2464.v202211082130.png",
    url: "nuoc-giat"
  },
  {
    id: 4,
    name: "Mì ăn liền",
    image: "https://cdn.tgdd.vn/Products/Images/2565/bhx/mi-an-lien-202209301456432997.v202211082130.png",
    url: "mi"
  },
  {
    id: 5,
    name: "Giấy vệ sinh",
    image: "https://cdn.tgdd.vn/Products/Images/9081/bhx/giay-ve-sinh-202205182007248109.v202211082130.png",
    url: "giay-ve-sinh"
  },
  {
    id: 6,
    name: "Nước mắm",
    image: "https://cdn.tgdd.vn/Products/Images/2289/bhx/nuoc-mam-202210071636253221.v202211082130.png",
    url: "nuoc-mam"
  },
  {
    id: 7,
    name: "Rau, củ, trái cây",
    image: "https://cdn.tgdd.vn/Products/Images/10298/bhx/rau-cu-trai-cay-202205261519146845.v202211082130.png",
    url: "rau-cu-trai-cay"
  },
  {
    id: 8,
    name: "Chả giò, chả ram",
    image: "https://cdn.tgdd.vn/Products/Images/7171/bhx/cha-gio-cha-ram-202206061217236534.v202211082130.jpg",
    url: "cha-gio"
  },
  {
    id: 9,
    name: "Sữa tươi",
    image: "https://cdn.tgdd.vn/Products/Images/2386/bhx/sua-tuoi-202210311320147075.v202211082130.png",
    url: "sua-tuoi"
  },
  {
    id: 10,
    name: "Nước ngọt",
    image: "https://cdn.tgdd.vn/Products/Images/2443/bhx/nuoc-ngot-202210311315510981.v202211082130.png",
    url: "nuoc-ngot"
  },
]

export const news: News[] = [
  {
    id: 1,
    title: 'Khu chợ Thiếc Sài Gòn với vô vàn món lạ miệng, thâm niên hơn chục năm',
    image: 'https://cdn.tgdd.vn/Files/2022/11/08/1485031/khu-cho-thiec-sai-gon-voi-vo-van-mon-la-mieng-tham-nien-hon-chuc-nam-202211081143233022.jpg',
    url: ''
  },
  {
    id: 2,
    title: 'Trị nám không còn quá khó với các công thức kết hợp với dầu gấc',
    image: 'https://cdn.tgdd.vn/Files/2022/11/08/1485687/tri-nam-khong-con-qua-kho-voi-cac-cong-thuc-ket-hop-voi-dau-gac-202211082343505654.jpg',
    url: ''
  },
  {
    id: 3,
    title: 'Cách chọn sách cho trẻ theo từng giai đoạn phát triển',
    image: 'https://cdn.tgdd.vn/Files/2022/11/08/1485053/cach-chon-sach-cho-tre-theo-tung-giai-doan-phat-trien-202211081346039259.jpg',
    url: ''
  },
  {
    id: 4,
    title: 'Đừng mắc những sai lầm sau khiến nhà tắm tích tụ vi khuẩn khắp nơi',
    image: 'https://cdn.tgdd.vn/Files/2022/11/08/1485045/dung-mac-nhung-sai-lam-sau-khien-nha-tam-tich-tu-vi-khuan-khap-noi-202211081332031548.jpg',
    url: ''
  },
  {
    id: 5,
    title: 'Độc lạ với nho tím khổng lồ có giá nửa triệu đồng/quả đang gây sốt',
    image: 'https://cdn.tgdd.vn/Files/2022/11/08/1485366/doc-la-voi-nho-tim-khong-lo-co-gia-nua-trieu-dong-qua-dang-gay-sot-202211081553249046.jpg',
    url: ''
  }
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Sữa rửa mặt Dove dưỡng ẩm 130g',
    image: 'https://cdn.tgdd.vn/Products/Images/2504/237667/bhx/sua-rua-mat-tinh-chat-serum-dove-duong-am-sau-giup-da-mem-muot-suot-24-gio-130g-202209131423278210_300x300.jpg',
    url: 'bhx-product-detail',
    category_id: 1,
    sale_price: 95000,
    original_price: 0,
    unit: 'đ',
    promotional_gift: {
      id: 1,
      name: 'Tặng chai Sữa rửa mặt Dove dưỡng ẩm 160ml hoặc 1 quà tặng khác',
      image: 'https://cdn.tgdd.vn/Products/Images/2504/238542/bhx/sua-rua-mat-dang-bot-dove-duong-am-sau-giup-da-mem-muot-suot-24h-160ml-202209131437182652_300x300.jpg',
      url: ''
    }
  },
  {
    id: 2,
    name: 'Kem Chocolate Wall\'s ly 46g',
    image: 'https://cdn.tgdd.vn/Products/Images/7462/250148/bhx/kem-ly-chocolate-walls-46g-202210091024420196_300x300.jpg',
    url: 'bhx-product-detail',
    category_id: 1,
    sale_price: 99000,
    original_price: 0,
    wholesale: true,
    unit: 'đ',
    promotional_gift: {
      id: 1,
      name: 'Tặng chai Sữa rửa mặt Dove dưỡng ẩm 160ml hoặc 1 quà tặng khác',
      image: 'https://cdn.tgdd.vn/Products/Images/2504/238542/bhx/sua-rua-mat-dang-bot-dove-duong-am-sau-giup-da-mem-muot-suot-24h-160ml-202209131437182652_300x300.jpg',
      url: ''
    }
  },
  {
    id: 3,
    name: 'Sữa rửa mặt Dove kiềm dầu 130g',
    image: 'https://cdn.tgdd.vn/Products/Images/2504/263808/bhx/sua-rua-mat-tinh-chat-serum-dove-se-khit-lo-chan-long-kiem-dau-130g-202208301448428422_300x300.jpg',
    url: 'bhx-product-detail',
    category_id: 1,
    sale_price: 99000,
    original_price: 0,
    unit: 'đ',
    promotional_gift: {
      id: 1,
      name: 'Tặng chai Sữa rửa mặt Dove dưỡng ẩm 160ml hoặc 1 quà tặng khác',
      image: 'https://cdn.tgdd.vn/Products/Images/2504/238542/bhx/sua-rua-mat-dang-bot-dove-duong-am-sau-giup-da-mem-muot-suot-24h-160ml-202209131437182652_300x300.jpg',
      url: ''
    }
  },
  {
    id: 4,
    name: 'Kem trang điểm Pond\'s sáng da 25g',
    image: 'https://cdn.tgdd.vn/Products/Images/6562/260283/bhx/kem-trang-diem-sang-da-deu-mau-ponds-25g-202207160001358776_300x300.jpg',
    url: 'bhx-product-detail',
    category_id: 1,
    sale_price: 147000,
    original_price: 0,
    unit: 'đ',
    promotional_gift: {
      id: 1,
      name: 'Tặng chai Sữa rửa mặt Dove dưỡng ẩm 160ml hoặc 1 quà tặng khác',
      image: 'https://cdn.tgdd.vn/Products/Images/2504/238542/bhx/sua-rua-mat-dang-bot-dove-duong-am-sau-giup-da-mem-muot-suot-24h-160ml-202209131437182652_300x300.jpg',
      url: ''
    }
  },
  {
    id: 5,
    name: 'Kem dưỡng POND\'S nâng tông da 50g',
    image: 'https://cdn.tgdd.vn/Products/Images/6562/238250/bhx/kem-duong-trang-da-nang-tong-ponds-50g-202207121624045816_300x300.jpg',
    url: 'bhx-product-detail',
    category_id: 1,
    sale_price: 165000,
    original_price: 174000,
    unit: 'đ',
    promotional_gift: {
      id: 1,
      name: 'Tặng quà',
      image: 'https://cdn.tgdd.vn/Products/Images/2504/238542/bhx/sua-rua-mat-dang-bot-dove-duong-am-sau-giup-da-mem-muot-suot-24h-160ml-202209131437182652_300x300.jpg',
      url: ''
    }
  },
  {
    id: 6,
    name: 'Kem Chocolate Wall\'s ly 46g',
    image: 'https://cdn.tgdd.vn/Products/Images/7462/250148/bhx/kem-ly-chocolate-walls-46g-202210091024420196_300x300.jpg',
    url: 'bhx-product-detail',
    category_id: 1,
    sale_price: 11000,
    original_price: 0,
    unit: 'đ',
    meta: 'HSD còn 1 năm',
    promotional_gift: {
      id: 2,
      name: 'Tặng cây Kem sầu riêng socola Merino cây 56g hoặc 4 quà tặng khác',
      image: 'https://cdn.tgdd.vn/Products/Images/7462/293049/bhx/kem-sau-rieng-socola-merino-cay-56g-202210272028361642_300x300.jpg',
      url: ''
    },
    extra: {
      price: 500000,
      meta: 'HSD còn 3 năm'
    }
  },
  {
    id: 7,
    name: 'Tẩy da chết Rosette da khô 180g',
    image: 'https://cdn.tgdd.vn/Products/Images/2504/231298/bhx/tay-te-bao-chet-rosette-danh-cho-da-kho-180g-202209131318346444_300x300.jpg',
    url: 'bhx-product-detail',
    category_id: 1,
    sale_price: 175000,
    original_price: 0,
    unit: 'đ',
    promotional_gift: {
      id: 3,
      name: 'Tặng tuýp Tẩy da chết Rosette da khô 180g',
      image: 'https://cdn.tgdd.vn/Products/Images/2504/231298/bhx/tay-te-bao-chet-rosette-danh-cho-da-kho-180g-202209131318346444_300x300.jpg',
      url: ''
    }
  },
  {
    id: 8,
    name: 'Kem trang điểm Pond\'s sáng da 25g',
    image: 'https://cdn.tgdd.vn/Products/Images/6562/260283/bhx/kem-trang-diem-sang-da-deu-mau-ponds-25g-202207160001358776_300x300.jpg',
    url: 'bhx-product-detail',
    category_id: 1,
    sale_price: 147000,
    original_price: 0,
    unit: 'đ',
    promotional_gift: {
      id: 1,
      name: 'Tặng chai Sữa rửa mặt Dove dưỡng ẩm 160ml hoặc 1 quà tặng khác',
      image: 'https://cdn.tgdd.vn/Products/Images/2504/238542/bhx/sua-rua-mat-dang-bot-dove-duong-am-sau-giup-da-mem-muot-suot-24h-160ml-202209131437182652_300x300.jpg',
      url: ''
    }
  }
];

export const subCategories: Category[] = [
  {
    id: 1,
    name: 'Bia, nước có cồn',
    image: null,
    url: 'bia',
  },
  {
    id: 2,
    name: 'Rượu các loại',
    image: null,
    url: 'ruou-ngon-cac-loai',
  },
  {
    id: 3,
    name: 'Nước ngọt',
    image: null,
    url: 'nuoc-ngot',
  },
  {
    id: 4,
    name: 'Nước tăng lực, bù khoáng',
    image: null,
    url: 'nuoc-tang-luc',
  },
  {
    id: 5,
    name: 'Nước trà các loại',
    image: null,
    url: 'nuoc-tra',
  },
  {
    id: 6,
    name: 'Nước ép trái cây',
    image: null,
    url: 'nuoc-ep-trai-cay',
  },
  {
    id: 7,
    name: 'Sữa trái cây, trà sữa',
    image: null,
    url: 'sua-trai-cay',
  },
  {
    id: 8,
    name: 'Trái cây hộp, si rô',
    image: null,
    url: 'siro',
  }
];
