import { Fab } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const GoBackHome = () => {
  return (
    <>
      <Link to='/' className='fab-position-up'>
        <Fab color='primary'>
          <ArrowBackIcon />
        </Fab>
      </Link>
    </>
  );
};
