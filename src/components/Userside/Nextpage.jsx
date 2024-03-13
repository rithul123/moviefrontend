import React, { useEffect, useState } from 'react';
import { Button, Typography, Card, CardContent, Grid, Container } from '@mui/material';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Buffer } from 'buffer';

const Nextpage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    console.log('Fetching movie details for ID:', id);
    axios.get(`http://localhost:3005/movies/${id}`)
      .then(response => {
        console.log('Received movie details:', response.data);
        setMovieData(response.data);
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
      });
  }, [id]);

  const handleStartClick = () => {
    navigate(`/watch/${id}`);
  };

  return (
    <div
    style={{
      backgroundImage: `url('https://wallpapercave.com/wp/nTwzv3B.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      color: 'white', 
// <splash>
    
    }}
  >
    <Container className='kl' maxWidth="md" style={{ marginTop: 20, marginLeft: 30, }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          {movieData.image1 && (
            <img
              src={`data:image/jpeg;base64,${Buffer.from(movieData.image1.data).toString('base64')}`}
              alt="Movie"
              style={{ width: '100%', height: 'auto', marginBottom: 20, borderRadius: 8 }}
            />
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" gutterBottom>{movieData.MovieName}</Typography>
          <Typography variant="subtitle1" gutterBottom><strong>Genre:</strong> {movieData.Genre}</Typography>
          <Typography variant="subtitle1" gutterBottom><strong>Language:</strong> {movieData.Language}</Typography>
          <Typography variant="subtitle1" gutterBottom><strong>Description:</strong> {movieData.Description}</Typography>
          <Button
            variant='contained'
            color="secondary"
            size="large"
            onClick={handleStartClick}
            style={{ marginTop: 20 }}
          >
            Watch Now
          </Button>
        </Grid>
      </Grid>
    </Container>
    </div>
  );
};

export default Nextpage;

