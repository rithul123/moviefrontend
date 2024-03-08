import './App.css';

import Movies from './components/Admin/Movies';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Moviedetails from './components/Admin/Moviedetails';
import Moviedeails2 from './components/Admin/Moviedeails2';

import Movieedit from './components/Admin/Movieedit';
import Login from './components/Log/Login';
import Navbar from './components/Log/Navbar1';
import Xmain from './components/Userside/Xmain';
import MovieDetailsPage from './components/Userside/MovieDetailsPage';
import Signin from './components/Userside/Signin';
import Homepage from './components/Userside/Homepage';
import MovieWebsite from './components/Userside/MovieWebsite';
function App() {
  return (
    <div className="hg">
      {/* <MovieWebsite/> */}
    <BrowserRouter>
    
    <Routes>
      <Route path='/movies' element={<Movies method='post'/>}></Route>
      <Route path='/moviedetails' element={<Moviedetails method='get'/>}></Route>
      <Route path='/movieedit' element={<Movieedit method='post'/>}></Route>
      <Route path='/Sign' element={<Signin method='post'/>}></Route>
      <Route path='/Main' element={<Xmain method='post'/>}></Route>
      <Route path='/mode' element={<Moviedeails2 method='get'/>}></Route>
      <Route path='/Main2' element={<MovieDetailsPage method='post'/>}></Route>
      <Route path='/' element={<Homepage method='post'/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
