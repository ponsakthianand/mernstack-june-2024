import './App.scss';
import About from './aboutComponent/about'
import Contact from './contacrtComponent/contact';
import Home from './homeComponent/home';
import ButtonComponent from './shared/buttonComponent';
import { useCallback, useEffect, useMemo, useState, useRef } from 'react';
import logo from './branding/logo.png'
import { menuName, menuValue } from './util/utils';

function App() {
  const [selectedMenu, setSeletedMenu] = useState<string>('');
  const mainContent: string = 'Hello World!'

  useEffect(() => {
    console.log('selectedMenu useEffect', selectedMenu);
  }, [selectedMenu])

  const callFunction = useCallback((event: any) => {
    console.log('event', event);
  }, [])

  const memoFunction = useMemo(() => {
    console.log('event', selectedMenu);
    return ''
  }, [selectedMenu])

  const refCheck = useRef(null)

  console.log('useRef', refCheck);

  const loadPage = (selectedPage: string) => {
    switch (selectedPage) {
      case menuName.Home:
        return <Home />
      case menuName.About:
        return <About />
      case menuName.Contact:
        return <Contact />
      default:
        return <Home />
    }
  }

  const buttonHandler = () => {
    setSeletedMenu(menuName.Home)
  }

  return (
    <div className="App">
      {memoFunction}
      {menuValue.name}
      <header>
        <div><img src={logo} alt="Logo" width={'100px'} /></div>
        <div style={{ cursor: "pointer" }} onClick={() => setSeletedMenu(menuName.Home)}>Home</div>
        <div style={{ cursor: "pointer" }} onClick={() => setSeletedMenu(menuName.About)}>About</div>
        <div style={{ cursor: "pointer" }} onClick={() => setSeletedMenu(menuName.Contact)}>Contact</div>
        <ButtonComponent buttonName={'Click me'} buttonHandler={buttonHandler} />
      </header>
      <div className='content' style={{ "backgroundColor": "#cccc" }}>
        {/* {`${mainContent} from India ${mainContent} new`}<br />
        {mainContent + ' from India ' + mainContent + ' New'} */}

        {loadPage(selectedMenu)}
      </div>
      <footer>This is Footer</footer>
    </div>
  );
}


export default App;
