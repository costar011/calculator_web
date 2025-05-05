import { TextField } from '@mui/material';

interface DisplayProps {
  value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
  return (
    <TextField
      value={value}
      variant="outlined"
      fullWidth
      inputProps={{ readOnly: true, style: { textAlign: 'right' } }}
      sx={{
        mb: 2,
        backgroundColor: '#fff',
        borderRadius: 1,
        '& .MuiOutlinedInput-root': { height: '60px', fontSize: '24px' },
      }}
    />
  );
};

export default Display;
