import Typography from '@mui/material/Typography';

export const DisplayInfo = ({ content, from, to }) => {
  return content.length <= 10 ? (
    <>
      <Typography variant='subtitle1'>
        Displaying all <strong>{content.length}</strong> data
      </Typography>
    </>
  ) : (
    <>
      <Typography variant='subtitle2'>
        Displaying <strong>{from}</strong> - <strong>{to}</strong> of{' '}
        <strong>{content.length} in total</strong>
      </Typography>
    </>
  );
};
