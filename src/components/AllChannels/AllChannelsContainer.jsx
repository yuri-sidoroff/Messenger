import { connect } from 'react-redux';
import {} from '../../store/actionCreators';
import AllChats from './AllChannels';

const mapStateToProps = state => ({
  incMessage: state.incMessage,
  sentMessage: state.sentMessage,
  chatRoom: state.chatRoom,
  isOpenRoom: state.isOpenRoom,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllChats);
