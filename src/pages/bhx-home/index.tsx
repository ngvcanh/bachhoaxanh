import type { NextPage } from 'next';
import MainLayout from 'src/bachhoaxanh/components/main-layout';
import HomePage from 'src/bachhoaxanh/pages/home';

const BhxHomePage: NextPage = () => {

  return <>
    <HomePage />
  </>

}

BhxHomePage.getLayout = page => (
  <MainLayout>
    { page }
  </MainLayout>
)

export default BhxHomePage;