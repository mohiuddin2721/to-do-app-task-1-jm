import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './page/Footer';
import Header from './page/Header';
import Home from './page/Home';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
