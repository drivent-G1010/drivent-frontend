import MuiButton from '@material-ui/core/Button';
import styled from 'styled-components';

export default function Day({ variant = 'contained', children, ...props }) {
  return (
    <StyledMuiButton className="button" size="medium" variant={variant} {...props}>
      <span> {children}</span>
    </StyledMuiButton>
  );
}

const StyledMuiButton = styled(MuiButton)`
  margin-top: 8px !important;
  margin-right: 17px !important;
  background-color: ${props => props.color} !important;
  text-transform: none !important;
;
  span {
    padding-left: 6px;
    padding-right: 6px;
  }
`;
