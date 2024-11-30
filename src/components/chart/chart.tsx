import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button, Grid, TextField, InputAdornment } from '@mui/material';
import chartCard from '../../assets/Common/chartcard.svg';
import { SearchIcon } from '@assets/icons/Search';
const ChartComponent = () => {
  return (
    <Box sx={{ }}>
      <div className='flex align-center justify-between'>
      <div>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Charts
      </Typography>
      <Typography variant="subtitle2" sx={{ marginBottom: 4 }}>
        Charts › Vision Therapy › Blue Chart
      </Typography>
      </div>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '16px' }}>
      <TextField
        placeholder="Search Chart"
        variant="outlined"
        size="small"
        sx={{
          width: '600px',
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          '& .MuiOutlinedInput-root': {
            borderRadius: '25px',
            '& fieldset': {
              border: 'none',
            },
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon className='bg-[#005BB2]' />
            </InputAdornment>
          ),
        }}
      />
    </Box>
      </div>
      <Grid container spacing={3}>
        {Array.from({ length: 8 }).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card sx={{ borderRadius: 2, boxShadow: 2 }}>
              <CardContent>
                <Typography variant="caption" sx={{ backgroundColor: '#eaf7f5', padding: '4px 8px', borderRadius: '4px', display: 'inline-block', marginBottom: 1 }}>
                  Vision Therapy
                </Typography>
                <Typography variant="h6" sx={{ marginTop: 1, fontWeight: 'bold', color: '#005BB2' }}>
                  Chart Name
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ marginTop: 0, marginBottom: 1 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                </Typography>
                <CardMedia
                  component="img"
                  image={chartCard}
                  alt="Chart Image"
                  sx={{ borderRadius: 1, width: "100%", height: "auto" }}
                />
              </CardContent>
              <Box sx={{ padding: 2, display: 'flex', justifyContent: 'center', width: '100%', position: 'relative', zIndex: 0 }}>
                <Button variant="contained" color="primary" sx={{ width: '100%', backgroundColor: '#005BB2', zIndex: 1, borderRadius: 2}}>
                  View Mode
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ChartComponent;
