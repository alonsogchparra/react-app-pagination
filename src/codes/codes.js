export default {
  customCode: `import React, { useEffect, useState } from 'react';
  import axios from 'axios';
  import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
  } from '@mui/material/styles';
  import CssBaseline from '@mui/material/CssBaseline';
  import Box from '@mui/material/Box';
  import Container from '@mui/material/Container';
  import Grid from '@mui/material/Unstable_Grid2';
  import Typography from '@mui/material/Typography';
  import Divider from '@mui/material/Divider';
  import { DisplayInfo } from './DisplayInfo';
  import { Pages } from './Pages';
  import { ShowResult } from './ShowResult';
  
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  
  export const CustomPagination = () => {
    const [contentPerPage] = useState(10);
    const [content, setContent] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [to, setTo] = useState(0);
    const [from, setFrom] = useState(0);
  
    // Get Current Projects
    const indexOfLastPost = currentPage * contentPerPage;
    const indexofFirstPost = indexOfLastPost - contentPerPage;
    const currentContent = content.slice(indexofFirstPost, indexOfLastPost);
  
    // Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(content.length / contentPerPage); i++) {
      pageNumbers.push(i);
    }
  
    const getInfo = async () => {
      try {
        const info = await axios.get(
          'https://jsonplaceholder.typicode.com/albums'
        );
  
        const { data } = info;
        setContent(data);
      } catch (error) {
        console.log('ERROR', error);
      }
    };
  
    useEffect(() => {
      getInfo();
    }, []);
  
    useEffect(() => {
      setFrom(currentPage * 10 - 9);
      setTo(0);
  
      if (currentContent.length < 10) {
        if (currentPage === 1) {
          setTo(currentContent.length);
          setFrom(1);
        } else {
          setTo(currentContent.length + (currentPage - 1) * 10);
        }
      } else if (currentContent.length === 10) {
        setTo(currentPage * 10);
      }
    }, [currentPage, currentContent]);
  
    return (
      <>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container maxWidth='xl'>
            <Grid
              container
              direction={'column'}
              justifyContent='center'
              alignItems='center'
              mt={3}
              textAlign='center'
            >
              <Box width='100%'>
                <Typography variant='h1'>Custom Pagination</Typography>
                <Divider />
  
                <ShowResult content={content} currentContent={currentContent} />
              </Box>
            </Grid>
  
            <Grid
              container
              direction={'column'}
              justifyContent='center'
              alignItems='center'
              mt={2}
            >
              <Grid textAlign='center'>
                <Box mb={1}>
                  <Typography variant='h4'>Page Number</Typography>
                  <Typography variant='subtitle1'>Page Number</Typography>
                  <DisplayInfo content={content} from={from} to={to} />
                </Box>
              </Grid>
  
              <Pages
                currentPage={currentPage}
                pageNumbers={pageNumbers}
                paginate={paginate}
              />
            </Grid>
          </Container>
        </ThemeProvider>
      </>
    );
  };
  `,
  muiCode: `import { useState, useEffect } from 'react';
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
  
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  
  export const MuiPagination = () => {
    const [content, setContent] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [contentPerPage, setContentPerPage] = useState(4);
  
    const getInfo = async () => {
      try {
        const info = await axios.get(
          // By default this api will show up 25 per page
          \`https://api.punkapi.com/v2/beers?page=\${currentPage}&per_page=\${contentPerPage}\`
        );
  
        const { data } = info;
        setContent(data);
        setContentPerPage(data.length);
      } catch (error) {
        console.log('ERROR GETINFO', error);
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
          <Container maxWidth='lg'>
            <Grid
              container
              direction={'column'}
              justifyContent='center'
              alignItems='center'
              textAlign='center'
            >
              <Box width='100%'>
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
          </Container>
        </ThemeProvider>
      </>
    );
  };
  `,
};
