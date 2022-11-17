import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Container,
  createTheme,
  CssBaseline,
  Divider,
  IconButton,
  responsiveFontSizes,
  Typography,
} from '@mui/material';
import { styled, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import GitHubIcon from '@mui/icons-material/GitHub';
import { dashboardInfo } from '../content/dashboardInfo';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const Dashboard = () => {
  const [details, setDetails] = useState([]);

  const updateDetailState = (id) => {
    let tempDetails = details;
    console.table(tempDetails);

    let temp = tempDetails.map((td) => {
      if (td.id === id) {
        return { ...td, expanded: td.expanded === false ? true : false };
      } else {
        return td;
      }
    });

    console.table(temp);

    setDetails(temp);
  };

  useEffect(() => {
    setDetails(
      dashboardInfo.map((detail) => ({
        id: detail.id,
        title: detail.title,
        elements: detail.elements,
        description: detail.description,
        link: detail.link,
        go_to: detail.go_to,
        expanded: false,
      }))
    );
  }, []);

  console.table(details);

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
              <Typography variant='h2'>Pagination Dashboard</Typography>
              <Divider />
            </Box>

            <Grid
              container
              direction='row'
              justifyContent='center'
              alignItems='center'
              width='100%'
            >
              {details.map(
                ({
                  id,
                  title,
                  link,
                  expanded,
                  description,
                  elements,
                  go_to,
                }) => (
                  <Grid xs={12} md={6} key={id}>
                    <Box m={2} boxShadow={5}>
                      <Card>
                        <CardContent>
                          <Typography variant='h4' component='div' mt={1}>
                            {title}
                          </Typography>
                          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                            {elements}
                          </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                          <Link to={link}>
                            <Button>{go_to}</Button>
                          </Link>
                          <ExpandMore
                            expand={expanded}
                            onClick={() => updateDetailState(id)}
                            aria-expanded={expanded}
                            aria-label='show more'
                          >
                            <ExpandMoreIcon />
                          </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout='auto' unmountOnExit>
                          <CardContent>
                            <Typography
                              paragraph
                              style={{ fontWeight: 'bold' }}
                            >
                              Description:
                            </Typography>
                            <Typography textAlign='left' paragraph>
                              {description}
                            </Typography>
                          </CardContent>
                        </Collapse>
                      </Card>
                    </Box>
                  </Grid>
                )
              )}
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
        </Container>
      </ThemeProvider>
    </>
  );
};
