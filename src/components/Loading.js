import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import '../css/Loading.css';

export default function LinearIndeterminate() {
return (
  <Box className='box' sx={{ width: '100%' }}>
		<LinearProgress  color='success'/>
  </Box>
);
}