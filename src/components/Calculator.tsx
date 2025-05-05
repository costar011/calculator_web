import React, { useState } from 'react';
import { Grid, Paper, Button } from '@mui/material';
import Display from './Display';

const Calculator: React.FC = () => {
  const [displayValue, setDisplayValue] = useState('');

  return (
    <Grid container spacing={1}>
      <Grid>
        <Paper>
          <Display value={displayValue} />
        </Paper>
      </Grid>
      <Grid>
        <Button onClick={() => setDisplayValue('1')}>1</Button>
      </Grid>
    </Grid>
  );
};

export default Calculator;
