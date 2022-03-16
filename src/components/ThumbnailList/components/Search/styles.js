import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';

export const StyledTextField = styled(TextField)`
  .MuiInput-root {
    border: 1px solid #30364333;
    border-radius: 2px;
    padding-left: 16px;
    min-width: 230px;
  }

  .MuiInput-root input {
    &::placeholder {
      font-weight: 600;
      font-size: 12px;
      font-style: normal;
    }
  }

  .MuiInputBase-root {
    margin-top: 23px;
  }

  .MuiInputLabel-root {
    color: #303643;
    opacity: 0.5;
    font-size: 18px;
    font-weight: bold;
  }

  .MuiInputLabel-root .Mui-focused {
    color: #303643;
  }
`;
