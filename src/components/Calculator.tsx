import React, { useState } from 'react';
import { Grid, Paper, Button } from '@mui/material';
import Display from './Display';

const Calculator: React.FC = () => {
  const [displayValue, setDisplayValue] = useState('');

  return (
    <Grid container spacing={2}>
      <Grid>
        <Paper>
          <Display value={displayValue} />
        </Paper>

        <Grid>
          <Button onClick={() => setDisplayValue('1')}>1</Button>
        </Grid>
        <Grid>
          <Button onClick={() => setDisplayValue('2')}>2</Button>
        </Grid>
        <Grid>
          <Button onClick={() => setDisplayValue('3')}>3</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Calculator;
