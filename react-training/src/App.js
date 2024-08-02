import './App.scss';
import About from './aboutComponent/about'
import Contact from './contacrtComponent/contact';
import Home from './homeComponent/home';
import NotFound from './error/error';
import Layout from './layout';
import { useCallback, useEffect, useMemo, useState, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

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


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />}>
          <Route path='company' element={<Contact />}></Route>
          <Route path='company/:id' element={<Contact />}></Route>
        </Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
}


export default App;