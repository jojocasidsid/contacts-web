import styled from '@emotion/styled';
import PersonIcon from '@mui/icons-material/Person';

export const ThumbnailWrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
`;

export const ActionWrapper = styled('div')`
  & > button {
    margin: 20px;
  }
`;

export const StyledImage = styled(PersonIcon)`
  font-size: 200px;
`;
