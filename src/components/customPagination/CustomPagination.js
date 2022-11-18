import { useEffect, useState } from 'react';
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
import { GoBackHome } from '../ui/GoBackHome';

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
        <Container
          maxWidth='xl'
          className='animate__animated animate__slow animate__fadeIn'
        >
          <Grid
            container
            direction={'column'}
            justifyContent='center'
            alignItems='center'
            mt={3}
            textAlign='center'
          >
            <Box width='100%'>
              <Typography variant='h2'>Custom Pagination</Typography>
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
                <Typography variant='h4' mb={2}>
                  Page Number
                </Typography>

                <DisplayInfo content={content} from={from} to={to} />
              </Box>
            </Grid>

            <Pages
              currentPage={currentPage}
              pageNumbers={pageNumbers}
              paginate={paginate}
            />
          </Grid>
          <GoBackHome />
        </Container>
      </ThemeProvider>
    </>
  );
};
