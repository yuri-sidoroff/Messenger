import {
  HANDLE_OPEN_ROOM,
  HANDLE_CLOSE_ROOM,
  HANDLE_CHANGE_CHANNEL_ID,
  HANDLE_SEND_NEW_MESSAGE,
  HANDLE_INC_NEW_MESSAGE,
} from './constants';

export const handleOpenRoom = payload => ({
  type: HANDLE_OPEN_ROOM,
  payload: { roomId: payload.roomId, channelId: payload.channelId },
});
export const handleCloseRoom = () => ({
  type: HANDLE_CLOSE_ROOM,
});
export const handleChangeChannelId = payload => ({
  type: HANDLE_CHANGE_CHANNEL_ID,
  payload,
});
export const handleSendNewMessage = payload => ({
  type: HANDLE_SEND_NEW_MESSAGE,
  payload,
});
export const handleIncNewMessage = payload => ({
  type: HANDLE_INC_NEW_MESSAGE,
  payload,
});
