import * as s from '../../common/color';
import { styled } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export const Wrapper = styled(Box)({
  width: '26%',
  display: 'flex',
  flexDirection: 'column-reverse',
  backgroundColor: s.bgc,
  overflowY: 'auto',
  scrollBehavior: 'smooth',
  '&::-webkit-scrollbar': {
    width: 0,
    backgroundColor: 'transparent',
  },
});
export const MessageBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  padding: 10,
  backgroundColor: s.hdm,
  borderBottom: `1px solid ${s.bfc}`,
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.8,
  },
});
export const Header = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 10,
});
export const Text = styled(Typography)({
  color: s.fcr,
});
