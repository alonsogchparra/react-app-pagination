import {
  Container,
  createTheme,
  CssBaseline,
  Divider,
  responsiveFontSizes,
  ThemeProvider,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/system';
import { CopyBlock, dracula, atomOneDark } from 'react-code-blocks';
import { Link } from 'react-router-dom';
import codes from '../../codes/codes';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useLocation } from 'react-router-dom';
import { GoBackHome } from '../ui/GoBackHome';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export const CodeBlock = () => {
  const location = useLocation();

  const title =
    location?.pathname === '/custom-code' ? (
      <>
        <Typography variant='h2' textAlign='center'>
          Custom Pagination Code
        </Typography>
      </>
    ) : (
      <>
        <Typography variant='h2' textAlign='center'>
          Mui Pagination Code
        </Typography>
      </>
    );

  const showPagination =
    location?.pathname === '/custom-code' ? (
      <>
        <Typography variant='subtitle1' textAlign='center'>
          This is the code of{' '}
          <Link to='/custom-pagination'>Custom Pagination</Link>
        </Typography>
      </>
    ) : (
      <>
        <Typography variant='subtitle1' textAlign='center'>
          This is the code of <Link to='/mui-pagination'>Mui Pagination</Link>
        </Typography>
      </>
    );

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
            mt={3}
          >
            <Box width='100%' mb={5}>
              {title}
              <Divider />
            </Box>
            <Box width='100%' mb={5}>
              {showPagination}
            </Box>

            <Grid container width='100%'>
              <Box width='100%'>
                <CopyBlock
                  language='jsx'
                  text={
                    location?.pathname === '/custom-code'
                      ? codes.customCode
                      : codes.muiCode
                  }
                  codeBlock
                  theme={
                    location?.pathname === '/custom-code'
                      ? atomOneDark
                      : dracula
                  }
                  showLineNumbers
                />
              </Box>
            </Grid>

            <Box width='100%' my={4}>
              <Grid container justifyContent='center' alignItems='center'>
                <Box m={1} pb={1}>
                  <Typography variant='subtitle1' textAlign='center'>
                    Also feel free to check the entire code on my{' '}
                    <a
                      href='https://github.com/alonsogchparra/react-app-pagination'
                      target='_blank'
                      rel='noreferrer'
                    >
                      github page
                    </a>{' '}
                  </Typography>
                </Box>

                <Box m={1}>
                  <GitHubIcon fontSize='large' />
                </Box>
              </Grid>
            </Box>
          </Grid>
          <GoBackHome />
        </Container>
      </ThemeProvider>
    </>
  );
};
