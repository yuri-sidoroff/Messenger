import * as s from '../../common/color';
import { styled } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

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

export const WrapperLine = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '20px 0',
});

export const Line = styled(Box)({
  width: '42%',
  margin: '0 5px',
  borderBottom: `2px solid ${s.bfc}`,
});

export const Channel = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 30,
  height: 30,
  borderRadius: '100%',
  backgroundColor: s.bfc,
  margin: '0 10px',
});

export const WrapperIncomingMessage = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  width: '60%',
  marginLeft: '40%',
  whiteSpace: 'normal',
});

export const WrapperSentMessage = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '60%',
  marginRight: '40%',
  whiteSpace: 'normal',
});

export const IncomingMessage = styled(Typography)({
  padding: 10,
  backgroundColor: s.hdm,
  wordWrap: 'break-word',
  width: '100%',
  color: s.fcr,
});

export const SentMessage = styled(Typography)({
  padding: 10,
  backgroundColor: s.bsm,
  wordWrap: 'break-word',
  width: '100%',
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
