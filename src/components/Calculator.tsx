import React, { useState } from 'react';
import { Grid, Paper, Button } from '@mui/material';
import Display from './Display';

const Calculator: React.FC = () => {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [current, setCurrent] = useState<string>('');
  const [previous, setPrevious] = useState<string>('');
  const [operation, setOperation] = useState<string | null>(null);

  const handleNumber = (num: string) => {
    if (displayValue === '0' && num !== '.') {
      setCurrent(num);
      setDisplayValue(num);
    } else {
      setCurrent((prev) => prev + num);
      setDisplayValue((prev) => prev + num);
    }
  };

  const handleOperation = (op: string) => {
    if (current === '') return;

    if (operation && previous) {
      calculate();
    } else {
      setPrevious(current);
    }
    setOperation(op);
    setCurrent('');
    setDisplayValue((prev) => prev + ` ${op} `);
  };

  const calculate = () => {
    if (!operation || !previous || !current) return;

    const prevNum = parseFloat(previous);
    const currNum = parseFloat(current);
    let result: number | string = 0;

    switch (operation) {
      case '+':
        result = prevNum + currNum;
        break;
      case '-':
        result = prevNum - currNum;
        break;
      case '×':
        result = prevNum * currNum;
        break;
      case '÷':
        result = currNum !== 0 ? prevNum / currNum : 'Error';
        break;
      default:
        return;
    }

    setDisplayValue(result.toString());
    setCurrent(result.toString());
    setPrevious('');
    setOperation(null);
  };

  const handleClear = () => {
    setDisplayValue('0');
    setCurrent('');
    setPrevious('');
    setOperation(null);
  };

  const handleDecimal = () => {
    if (!current.includes('.')) {
      setCurrent((prev) => prev + '.');
      setDisplayValue((prev) => prev + '.');
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid>
        <Paper sx={{ maxWidth: 300, mx: 'auto', mt: 5 }}>
          <Display value={displayValue} />
          <Grid>
            <Button onClick={handleClear} color="info">
              C
            </Button>
            <Button disabled>(</Button>
            <Button disabled>)</Button>
            <Button onClick={() => handleOperation('÷')} color="primary">
              ÷
            </Button>
          </Grid>
          <Grid>
            <Button onClick={() => handleNumber('7')}>7</Button>
            <Button onClick={() => handleNumber('8')}>8</Button>
            <Button onClick={() => handleNumber('9')}>9</Button>
            <Button onClick={() => handleOperation('×')} color="primary">
              ×
            </Button>
          </Grid>
          <Grid>
            <Button onClick={() => handleNumber('4')}>4</Button>
            <Button onClick={() => handleNumber('5')}>5</Button>
            <Button onClick={() => handleNumber('6')}>6</Button>
            <Button onClick={() => handleOperation('-')} color="primary">
              -
            </Button>
          </Grid>
          <Grid>
            <Button onClick={() => handleNumber('1')}>1</Button>
            <Button onClick={() => handleNumber('2')}>2</Button>
            <Button onClick={() => handleNumber('3')}>3</Button>
            <Button onClick={() => handleOperation('+')} color="primary">
              +
            </Button>
          </Grid>
          <Grid>
            <Button
              onClick={() => handleNumber('0')}
              sx={{ width: '130px', borderRadius: '25px' }}
            >
              0
            </Button>
            <Button onClick={handleDecimal}>.</Button>
            <Button onClick={calculate} color="secondary">
              =
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Calculator;
