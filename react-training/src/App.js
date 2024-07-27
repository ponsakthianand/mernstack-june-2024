import logo from './logo.svg';
import './App.css';
import About from './aboutComponent/about'
import Contact from './contacrtComponent/contact';
import Home from './homeComponent/home';
import { useCallback, useEffect, useMemo, useState, useRef } from 'react';

function App() {
  const [selectedMenu, setSeletedMenu] = useState('');
  const mainContent = 'Hello World!'

  useEffect(() => {
    console.log('selectedMenu useEffect', selectedMenu);
  }, [selectedMenu])

  const callFunction = useCallback((event) => {
    console.log('event', event);
  }, [])

  const memoFunction = useMemo((event) => {
    console.log('event', selectedMenu);
  }, [selectedMenu])

  const refCheck = useRef(null)

  console.log('useRef', refCheck);

  const loadPage = (selectedPage) => {
    switch (selectedPage) {
      case 'home':
        return <Home />
      case 'about':
        return <About />
      case 'contact':
        return <Contact />
      default:
        return <Home />
    }
  }


  console.log('selectedMenu', selectedMenu);

  return (
    <div className="App">
      {memoFunction}
      <header>This is Header

        <div style={{ cursor: "pointer" }} ref={refCheck} onClick={(event) => callFunction(event)}>Home</div>
        <div style={{ cursor: "pointer" }} onClick={() => setSeletedMenu('about')}>About</div>
        <div style={{ cursor: "pointer" }} onClick={() => setSeletedMenu('contact')}>Contact</div>
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
