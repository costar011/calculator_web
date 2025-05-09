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
      InputProps={{
        readOnly: true,
        sx: { textAlign: 'right' }, // 텍스트 오른쪽 정렬
      }}
      sx={{
        mb: 2,
        backgroundColor: '#fff',
        borderRadius: 1,
      }}
    />
  );
};

export default Display;
