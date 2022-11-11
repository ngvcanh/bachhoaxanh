import type { NextPage } from 'next';
import MainLayout from 'src/bachhoaxanh/components/main-layout';
import ProductDetailPage from 'src/bachhoaxanh/pages/product-detail';

const BhxHomePage: NextPage = () => {

  return <>
    <ProductDetailPage />
  </>

}

BhxHomePage.getLayout = page => (
  <MainLayout>
    { page }
  </MainLayout>
)

export default BhxHomePage;