import Header from '../components/Header'
import Footer from "../components/Footer";
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div className='px-5 pt-1'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}