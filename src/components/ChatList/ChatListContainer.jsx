import { connect } from 'react-redux';
import {
  handleOpenRoom,
  handleIncNewMessage,
  handleCloseRoom,
} from '../../store/actionCreators';
import ChatList from './ChatList';

const mapStateToProps = state => ({
  incMessage: state.incMessage,
  chatRoom: state.chatRoom,
});

const mapDispatchToProps = {
  handleOpenRoom,
  handleCloseRoom,
  handleIncNewMessage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatList);
