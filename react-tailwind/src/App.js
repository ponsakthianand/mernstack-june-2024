import Header from './layout/header';
import Footer from './layout/footer';
import logo from './logo.svg';
import Home from './pages/home';

function App() {
  return (
    <div className=''>
      <Header />

      {/* add router here */}
      <Home />
      <Footer />
    </div>
  );
}

export default App;
