import { Button as MuiButton } from "@mui/material";

interface ButtonProps {
  label: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "info" | "inherit";
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  color = "inherit",
}) => {
  return (
    <MuiButton variant="contained" color={color} onClick={onClick}>
      {label}
    </MuiButton>
  );
};

export default Button;
