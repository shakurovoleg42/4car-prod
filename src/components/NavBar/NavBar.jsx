import './NavBar.css';

import NavbarTop from './NavbarTop';
import Searchbar from '../Searchbar';
import NavbarBottom from './NavbarBottom';

const NavBar = () => {
  return (
    <>
      <div className='px-4'>
        <NavbarTop />
        <div className='links_navigators'>
          <Searchbar />
          <NavbarBottom />
        </div>
      </div>
    </>
  );
};

export default NavBar;
