import Navbar from './Navbar';
import bg from '@/assets/bg-3.jpg';

const Layout = ({ children }) => {
  return (
    <>
      <div
        className='background-container'
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
