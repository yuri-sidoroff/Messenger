import {
  HANDLE_OPEN_ROOM,
  HANDLE_CHANGE_CHANNEL_ID,
  HANDLE_SEND_NEW_MESSAGE,
  HANDLE_INC_NEW_MESSAGE,
  HANDLE_CLOSE_ROOM,
} from './constants';

const initialState = {
  incMessage: [],
  sentMessage: [],
  chatRoom: {
    roomId: 'Room name',
    channelId: 'FB',
  },
  isOpenRoom: false,
};

export default (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case HANDLE_OPEN_ROOM:
      return {
        ...state,
        chatRoom: { roomId: payload.roomId, channelId: payload.channelId },
        isOpenRoom: false,
      };
    case HANDLE_CLOSE_ROOM:
      return {
        ...state,
        isOpenRoom: true,
      };
    case HANDLE_CHANGE_CHANNEL_ID:
      return { ...state, chatRoom: { ...state.chatRoom, channelId: payload } };
    case HANDLE_SEND_NEW_MESSAGE:
      const sentMessage = [...state.sentMessage];
      sentMessage.push({
        id: state.sentMessage.length + 1,
        type: 'sent',
        roomId: state.chatRoom.roomId,
        channelId: state.chatRoom.channelId,
        body: payload,
        dt: new Date(
          new Date().getTime() - new Date().getTimezoneOffset() * 60000,
        )
          .toISOString()
          .slice(0, 19),
      });

      return {
        ...state,
        sentMessage,
      };
    case HANDLE_INC_NEW_MESSAGE:
      const roomIds = [
        'Rick Sanchez',
        'Morty Smith',
        'Dipper Pines',
        'Mabel Pines',
        'Spongebob Squarepants',
      ];
      const channelIds = ['VK', 'OK', 'FB'];
      const randomBetween = (min, max) => {
        return Math.floor((max - min + 1) * Math.random()) + min;
      };
      const randomChoose = array => {
        return array[randomBetween(0, array.length - 1)];
      };
      const incMessage = [...state.incMessage];
      incMessage.push({
        id: state.incMessage.length + 1,
        type: 'inc',
        roomId: randomChoose(roomIds),
        channelId: randomChoose(channelIds),
        body: payload.toString(),
        dt: new Date(
          new Date().getTime() - new Date().getTimezoneOffset() * 60000,
        )
          .toISOString()
          .slice(0, 19),
      });

      return {
        ...state,
        incMessage,
      };

    default:
      return state;
  }
};
