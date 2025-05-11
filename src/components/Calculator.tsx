import { useState } from "react";
import { Grid, Paper, Button } from "@mui/material";
import Display from "./Display";

const Calculator: React.FC = () => {
  // 상태 변수들 정의 (계산기 동작에 필요한 값들)
  const [displayValue, setDisplayValue] = useState<string>("0"); // 디스플레이에 보여질 값을 저장 (초기값 0)
  const [current, setCurrent] = useState<string>(""); // 현재 입력 중인 숫자나 값을 저장
  const [previous, setPrevious] = useState<string>(""); // 이전에 입력한 값을 저장
  const [operation, setOperation] = useState<string | null>(null); // 현재 선택된 연산자 (예: +, -, ×, ÷)
  const [parentheses, setParentheses] = useState<string[]>([]); // 괄호를 저장하는 배열

  // 숫자 버튼 클릭 시 처리 함수
  const handleNumber = (num: string) => {
    setCurrent((prev) => prev + num); // 현재 입력값에 새로운 숫자 추가
    setDisplayValue((prev) => (prev === "0" ? num : prev + num)); // 디스플레이에 숫자 추가 (0일 경우 새 숫자로 초기화)
  };

  // 연산자 버튼 클릭 시 처리 함수
  const handleOperation = (op: string) => {
    if (current === "") return; // 현재 값이 없으면 연산자 클릭 무시

    if (operation && previous) {
      calculate(); // 이전 연산자와 값이 있으면 계산 수행
    } else {
      setPrevious(current); // 이전 값에 현재 값 저장
    }
    setOperation(op); // 선택된 연산자 업데이트
    setCurrent(""); // 현재 입력값 초기화
    setDisplayValue((prev) => prev + ` ${op} `); // 디스플레이에 연산자 추가 (공백 포함)
  };

  // 괄호 버튼 클릭 시 처리 함수
  const handleParenthesis = (paren: string) => {
    setParentheses((prev) => [...prev, paren]); // 괄호 배열에 새로운 괄호 추가
    setCurrent((prev) => prev + paren); // 현재 입력값에 괄호 추가
    setDisplayValue((prev) => prev + paren); // 디스플레이에 괄호 추가
  };
  const calculate = () => {
    if (!operation || !previous || !current) return;

    const prevNum = parseFloat(previous);
    const currNum = parseFloat(current);
    let result: number | string = 0;

    switch (operation) {
      case "+":
        result = prevNum + currNum;
        break;
      case "-":
        result = prevNum - currNum;
        break;
      case "×":
        result = prevNum * currNum;
        break;
      case "÷":
        result = currNum !== 0 ? prevNum / currNum : "Error";
        break;
      default:
        return;
    }

    if (parentheses.length > 0) {
      setDisplayValue(`(${result})`); // 괄호가 있는 경우 디스플레이에 결과를 괄호로 표시
    } else {
      setDisplayValue(result.toString()); // 괄호가 없는 경우 디스플레이에 결과를 문자열로 표시
    }

    setCurrent(result.toString()); // 현재 값 업데이트
    setPrevious(""); // 이전 값 초기화
    setOperation(null); // 연산자 초기화
    setParentheses([]); // 괄호 배열 초기화
  };

  const handleClear = () => {
    setDisplayValue("0"); // 디스플레이 초기화
    setCurrent(""); // 현재 값 초기화
    setPrevious(""); // 이전 값 초기화
    setOperation(null); // 연산자 초기화
    setParentheses([]); // 괄호 배열 초기화
  };

  const handleDecimal = () => {
    if (!current.includes(".")) {
      setCurrent((prev) => prev + "."); // 현재 값에 소수점 추가
      setDisplayValue((prev) => prev + "."); // 디스플레이에 소수점 추가
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid>
        <Paper sx={{ maxWidth: 300, mx: "auto", mt: 10, ml: 50 }}>
          <Display value={displayValue} />
          <Grid>
            <Button onClick={handleClear} color="info">
              C
            </Button>
            <Button onClick={() => handleParenthesis("(")} color="secondary">
              (
            </Button>
            <Button onClick={() => handleParenthesis(")")} color="secondary">
              )
            </Button>
            <Button onClick={() => handleOperation("+")} color="secondary">
              +
            </Button>
          </Grid>
          <Grid>
            <Button onClick={() => handleNumber("7")}>7</Button>
            <Button onClick={() => handleNumber("8")}>8</Button>
            <Button onClick={() => handleNumber("9")}>9</Button>
            <Button onClick={() => handleOperation("×")} color="secondary">
              ×
            </Button>
          </Grid>
          <Grid>
            <Button onClick={() => handleNumber("4")}>4</Button>
            <Button onClick={() => handleNumber("5")}>5</Button>
            <Button onClick={() => handleNumber("6")}>6</Button>
            <Button onClick={() => handleOperation("-")} color="secondary">
              -
            </Button>
          </Grid>
          <Grid>
            <Button onClick={() => handleNumber("1")}>1</Button>
            <Button onClick={() => handleNumber("2")}>2</Button>
            <Button onClick={() => handleNumber("3")}>3</Button>
            <Button onClick={() => handleOperation("+")} color="secondary">
              +
            </Button>
          </Grid>
          <Grid>
            <Button
              onClick={() => handleNumber("0")}
              sx={{ width: "140px", borderRadius: "30px" }}
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
