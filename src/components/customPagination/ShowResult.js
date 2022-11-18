import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

export const ShowResult = ({ content, currentContent }) => {
  return content === undefined ||
    content === undefined ||
    content.length === 0 ? (
    <>
      <Box
        sx={{ display: 'flex' }}
        textAlign='center'
        width='100%'
        justifyContent='center'
        alignItems='center'
        my={4}
      >
        <CircularProgress size={80} />
      </Box>
    </>
  ) : (
    <>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
      >
        {currentContent.map(({ id, userId, title }) => (
          <Grid xs={12} md={4} key={id}>
            <Box m={2} boxShadow={5}>
              <Card>
                <CardContent>
                  <Typography variant='h2'>ID: {id}</Typography>
                  <Typography variant='h4'>UserID: {userId}</Typography>
                  <Typography variant='body1' noWrap>
                    {title}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
