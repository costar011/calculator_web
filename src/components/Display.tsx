import { TextField } from "@mui/material";

// Display 컴포넌트의 속성 타입 정의
interface DisplayProps {
  value: string; // 디스플레이에 표시할 값
}

// Display 컴포넌트 정의
const Display: React.FC<DisplayProps> = ({ value }) => {
  return (
    <TextField
      value={value} // TextField에 표시할 값 설정
      variant="outlined" // 테두리 스타일로 설정
      fullWidth // 너비를 부모 요소에 맞춤
      inputProps={{
        // HTML input 요소의 속성 설정
        readOnly: true, // 수정 불가로 설정 (사용자가 직접 입력하지 않음)
      }}
      sx={{
        // TextField 전체 스타일
        mb: 2, // 아래 마진 2단위
        backgroundColor: "#fff", // 배경색 흰색
        borderRadius: 1, // 테두리 둥글기
        "& .MuiInputBase-input": {
          textAlign: "right", // 입력 필드 텍스트 오른쪽 정렬
        },
      }}
    />
  );
};

export default Display;
