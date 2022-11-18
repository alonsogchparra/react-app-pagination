import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

export const Pages = ({ pageNumbers, currentPage, paginate }) => {
  return (
    <Box mb={5} width='100%' justifyContent='center' alignItems='center'>
      <Divider variant='fullWidth' />
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        width='100%'
        marginY={2}
      >
        {pageNumbers.map((number) => (
          <Grid key={number}>
            <span onClick={() => paginate(number)}>
              <Box
                mx={2}
                my={1}
                paddingX={2}
                paddingY={1}
                className={
                  currentPage === number ? 'page-item active' : 'page-item'
                }
              >
                <Typography
                  style={{
                    fontWeight: currentPage === number ? 'bolder' : 'normal',
                  }}
                  variant='subtitle1'
                >
                  {number}
                </Typography>
              </Box>
            </span>
          </Grid>
        ))}
      </Grid>
      <Divider variant='fullWidth' />
    </Box>
  );
};
