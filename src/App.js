import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './page/Footer';
import Header from './page/Header';
import Home from './page/Home';
import SignIn from './page/SignIn';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signIn' element={<SignIn></SignIn>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
