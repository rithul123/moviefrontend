import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Container, Typography, AppBar, Toolbar, IconButton, Menu, MenuItem, Card, CardContent, Button } from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Buffer } from 'buffer';
import './Xmain.css';


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

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Moviedetails = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3005/view")
      .then(response => {
        setMovies(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching movie data:', err);
        setError(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const results = movies.filter(movie =>
      movie.MovieName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(results);
  }, [searchTerm, movies]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMovieClick = (movieId) => {
    console.log('Clicked on movie with ID:', movieId);
    // Handle the click event, e.g., redirect to movie details page
  };

  return (
    <Box style={{ backgroundImage: `url('https://wallpapercave.com/wp/nTwzv3B.jpg')`, backgroundSize: 'cover' }}>
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            / <MenuIcon />
          </IconButton> */}
          {/* <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem component={Link} to="/" onClick={handleClose}>Home</MenuItem>
          </Menu> */}
          <Typography         
          variant="h6"
             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            component={Link} className='sy' to="/" onClick={handleClose}
          >
            STREAMSAVY
          </Typography>
          <Search align="center">
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </Search>
          <Button component={Link} to="/Sign" style={{ color: 'inherit' }}>
            <AccountCircleIcon />
            Login/Register
          </Button>
        </Toolbar>
      </AppBar>
      <Container className='body'>
        <Typography variant="h3" align="center" gutterBottom style={{ margin: '20px 0', color: 'white' }}>WORLD OF ENTERTAINMENT</Typography>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {filteredMovies.map((movie, index) => (
            <Button
              className='shrink-button'
              key={index}
              onClick={() => handleMovieClick(movie.id)}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <Card style={{ margin: '20px', width: '300px', backgroundColor: 'black' }}>
                <CardContent>
                  {movie.image1 && (
                    <img src={`data:image/jpeg;base64,${Buffer.from(movie.image1.data).toString('base64')}`} style={{ marginBottom: '20px', maxWidth: '100%' }} alt="Movie" />
                  )}
                 
                    
                  <Typography variant="subtitle1" gutterBottom style={{ color: 'white' }}><strong>{movie.MovieName}</strong></Typography>
                </CardContent>
              </Card>
            </Button>
          ))}
        </div>
      </Container>
    </Box>
  );
};

export default Moviedetails;



// const savedata=()=>{
 
//   console.log(inputs)
//  axios.post("http://localhost:3002/booking",inputs) 
//  .then((response) => {
//   alert("Booked Successfully");
// })
// .catch(err => console.error("Error", err));
// };




// useEffect(() => {
// console.log("id:", id);
// axios.get(`http://localhost:3002/book/${id}`)
//   .then(response => {
    
//     console.log(response.data);
//   })
//   .catch(err => console.log(err));
// }, [id]);