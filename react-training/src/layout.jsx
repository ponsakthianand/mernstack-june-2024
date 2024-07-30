import { Link, Outlet } from 'react-router-dom';
import logo from './branding/logo.png';
import ButtonComponent from './shared/buttonComponent';

const Layout = () => {
  const buttonHandler = () => {
    // setSeletedMenu('home');
  };

  return (
    <div className='App'>
      <header>
        <div>
          <img src={logo} alt='Logo' width={'100px'} />
        </div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <ButtonComponent
          buttonName={'Click me'}
          buttonHandler={buttonHandler}
        />
      </header>
      <div className='content' style={{ backgroundColor: '#cccc' }}>
        <Outlet />
      </div>
      <footer>This is Footer</footer>
    </div>
  );
};

export default Layout;
