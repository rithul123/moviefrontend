


import { Fade, Slide,Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Home.css';
import MovieIcon from '@mui/icons-material/Movie';
import axios from 'axios';
import { CircularProgress, Container, Typography, AppBar, Box, Toolbar, IconButton, Menu, MenuItem ,CardContent,Card} from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon  } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { Buffer } from 'buffer';
import { styled, alpha} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Button } from '@mui/material';
import { useParams, Link } from 'react-router-dom'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const TransparentAppBar = styled(AppBar)(({ theme }) => ({
  backdropFilter: 'blur(10px)',
  backgroundColor: 'rgba(0,0,0,.5)',
  
  boxShadow: 'none',
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const StyledInputBase = styled('input')({
  color: 'inherit',
  width: '100%',
  padding: '8px 12px',
  border: 'none',
  borderRadius: '4px',
  background: 'rgba(255, 255, 255, 0.15)',
  transition: 'background 0.3s',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.25)',
  },
});

const slideImages = [
  {
    url: 'https://i.pinimg.com/originals/07/69/66/07696639aecca04f5c07e3554972ac65.jpg',
    caption: 'Welcome to STREAMSAVY'
  },
  {
    url: 'https://external-preview.redd.it/nXBYTyEKD0b-vKX2DFRKiYkROkMTPBZDEDYmhiLJ_uU.jpg?auto=webp&s=bdf7b68182c0539e8adab480984bbc13477fa7d6',
    caption: 'Welcome to STREAMSAVY'
  },
  {
    url: 'https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg',
    caption: 'Welcome to STREAMSAVY'
  }
];

const divStyle = {
  position: 'relative',
  display: 'flex',
  flexwrap:'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  height: '750px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  color: 'white',
  fontFamily: 'Georgia, serif', 
};

const spanStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '100px',
  padding: '5px 10px',
  borderRadius: '5px'
};

const Homepage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get("http://localhost:3005/view")
      .then(response => {
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching movie data:', err);
        setError(err);
        setLoading(false);
      });
  }, []);

 

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography variant="h6" color="error">Error: {error.message}</Typography>
      </div>
    );
  }

  return (
      
        <div  className="each-slide">
          <Zoom duration={5000} delay={100}>
            {slideImages.map((image, index) => (
              <div key={index} className="each-slide">
                <div style={{ ...divStyle, backgroundImage: `url(${image.url})` }}>
                  <span style={spanStyle}>{image.caption}</span>
                  <TransparentAppBar position="absolute" >
                    <Toolbar>
                      <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        
                        sx={{ mr: 2 }}
                      >
                        
                      </IconButton>
                      <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: 'white' }}
                      >
                        STREAMSAVY
                      </Typography>
                      <Button component={Link} to="/main" style={{ color: 'white' }}>
                        <MovieIcon />
                        Movies
                      </Button>
                      <Button component={Link} to="/Sign" style={{ color: 'white' }}>
                        <AccountCircleIcon />
                        Login/Register
                      </Button>
                    </Toolbar>
                  </TransparentAppBar>
                </div>
              </div>
            ))}
          </Zoom>
      </div>
  );
};

export default Homepage;
