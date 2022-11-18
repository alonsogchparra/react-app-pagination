import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import mario from '../images/mario.gif';
import { GoBackHome } from './ui/GoBackHome';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export const PageNotFound = () => {
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
            <Box width='100%' my={2}>
              <img
                src={mario}
                alt='Mario jumping'
                style={{ width: '400px', height: 'auto', maxWidth: '100%' }}
              />
              <Typography variant='h2' component='div'>
                Sorry but the Page is in another castle!
              </Typography>
            </Box>
          </Grid>
          <GoBackHome />
        </Container>
      </ThemeProvider>
    </>
  );
};
