import * as s from '../../common/color';
import { styled } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

export const Wrapper = styled(Box)({
  width: '37%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: s.bgc,
});

export const Header = styled(Box)({
  display: 'flex',
  padding: 10,
  justifyContent: 'space-between',
  backgroundColor: s.hdm,
  border: `1px solid ${s.bfc}`,
});

export const SelectChannel = styled(Select)({
  color: s.fcr,
  height: 20,
  '&::before': {
    content: 'none',
    borderBottomColor: 'transparent',
  },
});

export const Body = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  padding: 5,
  height: '100%',
  overflowY: 'auto',
  scrollBehavior: 'smooth',
  '&::-webkit-scrollbar': {
    width: 0,
    backgroundColor: 'transparent',
  },
});

export const InputMessageField = styled(InputBase)({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: s.hdm,
  border: `1px solid ${s.bfc}`,
  height: 70,
  padding: 5,
  position: 'relative',
  zIndex: 1,
});

export const ButtonMessage = styled(Box)({
  position: 'absolute',
  zIndex: 2,
  bottom: 14,
  right: 'calc(37% + 14px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingLeft: 5,
  width: 35,
  height: 40,
  border: `1px solid ${s.bfc}`,
  borderRadius: '100%',
  backgroundColor: s.bfc,
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.8,
  },
});

export const WrapperIncomingMessage = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  width: '60%',
  marginLeft: '40%',
});

export const WrapperSentMessage = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '60%',
  marginRight: '40%',
});

export const IncomingMessage = styled(Typography)({
  padding: 10,
  backgroundColor: s.hdm,
  wordWrap: 'break-word',
  width: '100%',
  whiteSpace: 'normal',
  color: s.fcr,
});

export const SentMessage = styled(Typography)({
  display: 'block',
  padding: 10,
  backgroundColor: s.bsm,
  wordWrap: 'break-word',
  width: '100%',
  whiteSpace: 'normal',
  color: s.fcr,
});

export const CornerIncoming = styled(Box)({
  backgroundColor: s.hdm,
  borderRight: '30px solid transparent',
  borderBottom: `20px solid ${s.bgc}`,
});

export const CornerSent = styled(Box)({
  backgroundColor: s.bsm,
  borderLeft: '30px solid transparent',
  borderBottom: `20px solid ${s.bgc}`,
});

export const Text = styled(Typography)({
  color: s.fcr,
});
