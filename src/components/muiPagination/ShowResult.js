import {
  Avatar,
  Box,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';

export const ShowResult = ({ content }) => {
  return content === undefined || content === null || content.length === 0 ? (
    <>
      <Box
        sx={{ display: 'flex' }}
        textAlign='center'
        width='100%'
        justifyContent='center'
        alignItems='center'
        mt={4}
        mb={4}
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
        {content.map(({ name, image_url, description, id }) => (
          <Grid xs={12} md={6} key={id}>
            <Box m={2} boxShadow={5}>
              <Card>
                <CardContent>
                  <Grid
                    container
                    justifyContent='center'
                    alignItems='center'
                    my={2}
                  >
                    <Avatar
                      alt={name}
                      src={image_url}
                      sx={{ width: 80, height: 80 }}
                    />
                  </Grid>
                  <Typography variant='h6' gutterBottom>
                    {name}
                  </Typography>
                  <Typography variant='body1' noWrap>
                    {description}
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
