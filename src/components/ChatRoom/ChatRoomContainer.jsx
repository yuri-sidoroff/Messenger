import { connect } from 'react-redux';
import {
  handleChangeChannelId,
  handleSendNewMessage,
  handleIncNewMessage,
} from '../../store/actionCreators';
import ChatRoom from './ChatRoom';

const mapStateToProps = state => ({
  chatRoom: state.chatRoom,
  incMessage: state.incMessage,
  sentMessage: state.sentMessage,
  isOpenRoom: state.isOpenRoom,
});

const mapDispatchToProps = {
  handleChangeChannelId,
  handleSendNewMessage,
  handleIncNewMessage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatRoom);
