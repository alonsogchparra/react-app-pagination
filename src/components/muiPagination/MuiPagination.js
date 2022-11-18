import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
  responsiveFontSizes,
  Divider,
  Pagination,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { ShowResult } from './ShowResult';
import { GoBackHome } from '../ui/GoBackHome';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export const MuiPagination = () => {
  const [content, setContent] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [contentPerPage, setContentPerPage] = useState(4);

  const getInfo = async () => {
    try {
      const info = await axios.get(
        `https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=${contentPerPage}`
      );

      const { data } = info;
      setContent(data);
      setContentPerPage(data.length);
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  useEffect(() => {
    getInfo();
  }, [currentPage]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container
          maxWidth='lg'
          className='animate__animated animate__slow animate__fadeIn'
        >
          <Grid
            container
            direction={'column'}
            justifyContent='center'
            alignItems='center'
            textAlign='center'
          >
            <Box width='100%' my={4}>
              <Typography variant='h2'> MUI Pagination</Typography>
              <Divider />

              <ShowResult content={content} />
            </Box>
          </Grid>

          <Grid
            container
            direction={'column'}
            justifyContent='center'
            alignItems='center'
            mb={2}
          >
            <Grid textAlign='center'>
              <Box mb={1}>
                <Typography variant='h4'>Page Number</Typography>
              </Box>
            </Grid>

            <Box width='100%' justifyContent='center' alignItems='center'>
              <Divider variant='fullWidth' />
              <Grid
                container
                justifyContent='center'
                alignItems='center'
                width='100%'
                marginY={2}
              >
                <Pagination
                  // If you have the total of elements (as value)
                  // You could calculate the count with this
                  // count={Math.ceil(totalElements / contentPerPage)}
                  // That way you will have the count of pagination dinamically
                  count={10}
                  color='primary'
                  onChange={(e, page) => setCurrentPage(page)}
                />
              </Grid>
              <Divider variant='fullWidth' />
            </Box>
          </Grid>
          <GoBackHome />
        </Container>
      </ThemeProvider>
    </>
  );
};
