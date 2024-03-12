import './App.css';

import Movies from './components/Admin/Movies';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
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
import AddGenre from './components/Admin/AddGenre';
import AddLanguage from './components/Admin/AddLanguage';
import NextPage from './components/Userside/Nextpage';
import { Switch } from '@mui/material';
import Nextpage from './components/Userside/Nextpage';
import VideoUpload from './components/Userside/VideoUpload';
import Register1 from './components/Userside/Register1';



function App() {
  return (
    <div className="hg">


    <BrowserRouter>
    <Routes>
      <Route path='/movie' element={<Movies method='post'/>}></Route>
      <Route path='/moviedetails' element={<Moviedetails method='get'/>}></Route>
      <Route path='/movieedit' element={<Movieedit method='post'/>}></Route>
      <Route path='/Sign' element={<Signin method='post'/>}></Route>
      <Route path='/Main' element={<Xmain method='post'/>}></Route>
      <Route path='/mode' element={<Moviedeails2 method='get'/>}></Route>
      <Route path='/Main2' element={<MovieDetailsPage method='post'/>}></Route>
      <Route path='/' element={<Homepage method='post'/>}></Route>
      <Route path="/next" element={<Nextpage method='post'/>}></Route> 
      <Route path="/reg" element={<Register1 method='post'/>}></Route> 
    </Routes>
    </BrowserRouter>
    



     {/* <AddGenre></AddGenre>
     <AddLanguage></AddLanguage> */}
    </div>
  );
}

export default App;
