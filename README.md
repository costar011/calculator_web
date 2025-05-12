# 📁 프로젝트 구조

| 경로              | 설명                           |
| ----------------- | ------------------------------ |
| `src/components/` | 재사용 가능한 UI 컴포넌트 폴더 |
| `Button.tsx`      | MUI 기반의 커스텀 버튼         |
| `Calculator.tsx`  | 계산기 로직 및 UI              |
| `Display.tsx`     | 계산기 출력창                  |
| `src/App.tsx`     | 최상위 앱 컴포넌트             |
| `src/main.tsx`    | 앱 진입점                      |

# 1️⃣ Button.tsx

```TS
import { Button as MuiButton } from '@mui/material';

interface ButtonProps {
  label: string;
  onClick: () => void;
  color?: 'primary' | 'secondary' | 'info' | 'inherit';
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  color = 'inherit',
}) => {
  return (
    <MuiButton variant="contained" color={color} onClick={onClick}>
      {label}
    </MuiButton>
  );
};

export default Button;

✅ 설명

왜 따로 'Button' 컴포넌트를 만들었는가?
코드 재사용성 증가: 여러 버튼을 반복적으로 사용하므로, 공통된 스타일과 로직을 추상화

UI 일관성 유지: 모든 버튼을 동일한 'MUI Button' 기반으로 렌더링함으로써 UI 스타일을 통일
color props로 MUI의 색상 시스템을 활용해 강조(연산자 등)와 일반 버튼을 시각적으로 구분

```

# 2️⃣ Display.tsx

```TS
import { TextField } from "@mui/material";

interface DisplayProps {
  value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
  return (
    <TextField
      value={value}
      variant="outlined"
      fullWidth
      inputProps={{
        readOnly: true,
      }}
      sx={{
        mb: 2,
        backgroundColor: "#fff",
        borderRadius: 1,
        "& .MuiInputBase-input": {
          textAlign: "right",
        },
      }}
    />
  );
};

export default Display;

✅ 설명
왜 TextField로 만들었는가?
사용자 입력을 막고 출력만 보여주는 용도로 readOnly 속성 적용
MUI의 TextField는 기본적으로 정렬, 테두리 스타일, 색상 등을 간편하게 커스터마이징할 수 있어 사용함

오른쪽 정렬: 숫자 계산기 디스플레이는 일반적으로 오른쪽 정렬을 하므로, textAlign: "right" 사용
```

# 3️⃣ Calculator.tsx

```TS
// 주요 훅과 컴포넌트 import
import { useState } from "react";
import { Grid, Paper, Button } from "@mui/material";
import Display from "./Display";


✅ 상태 정의
displayValue: 디스플레이에 보이는 문자열
current: 현재 입력 중인 숫자
previous: 이전 숫자 값
operation: 현재 선택된 연산자
parentheses: 괄호 관리용 배열

```

```TS
const [displayValue, setDisplayValue] = useState("0");
const [current, setCurrent] = useState("");
const [previous, setPrevious] = useState("");
const [operation, setOperation] = useState<string | null>(null);
const [parentheses, setParentheses] = useState<string[]>([]);

✅ 주요 로직 함수 설명
▶ handleNumber(num)
숫자 입력 시 'current'와 'displayValue'에 값을 추가

▶ handleOperation(op)
연산자 클릭 시 이전 값을 저장하고 연산자 설정
이전 연산이 존재할 경우 'calculate()'를 먼저 수행

▶ handleParenthesis(paren)
괄호 "(", ")" 를 'displayValue'와 'current', 상태에 반영
단순 시각적 추가로, 괄호에 대한 실제 연산은 처리하지 않음 (추후 개선 포인트)

▶ handleDecimal()
'.' 중복 방지를 위해, 'current'에 이미 소수점이 포함되어 있지 않으면 추가

▶ calculate()
'current', 'previous', 'operation' 상태를 바탕으로 계산 수행
결과는 문자열로 변환되어 'displayValue'와 'current'에 반영
괄호가 있을 경우 '(${result})' 형태로 출력

▶ handleClear()
모든 상태 초기화 ('displayValue'는 "0"으로)

```

```TS
<Grid container spacing={2}>
  <Paper sx={{ maxWidth: 300, mx: "auto", mt: 10, ml: 50 }}>
    <Display value={displayValue} />
    <Grid> ...버튼들... </Grid>
  </Paper>
</Grid>

✅ UI 레이아웃 설명

'Grid'와 'Paper'로 MUI의 반응형 UI 구성
각 버튼은 MUI Button 또는 커스텀 'Button.tsx'을 사용
'sx' prop으로 버튼별 크기나 여백 등 세부 조정
```

| 요소                      | 이유                                                               |
| ------------------------- | ------------------------------------------------------------------ |
| **컴포넌트 분리**         | Button, Display, Calculator 역할을 분리해 가독성과 유지보수성 향상 |
| **MUI 사용**              | 빠른 UI 구성, 일관된 스타일 적용, 반응형 대응 용이                 |
| **TSX + Props 타입 명시** | 타입 안정성 확보로 컴파일 타임 오류 예방                           |
| **상태 기반 계산 로직**   | 입력 → 연산 → 결과의 흐름을 명확히 상태로 추적 가능                |
