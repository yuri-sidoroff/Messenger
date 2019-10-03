import React from 'react';
import { createStore } from 'redux';
import reducer from './store/reducers';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//If you want to save only this session, comment out the previous line and uncomment the next line
//import storage from 'redux-persist/lib/storage/session'
import { PersistGate } from 'redux-persist/integration/react';

import { styled } from '@material-ui/styles';
import Box from '@material-ui/core/Box';

import ChatList from './components/ChatList/ChatListContainer';
import ChatRoom from './components/ChatRoom/ChatRoomContainer';
import AllChannels from './components/AllChannels/AllChannelsContainer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, devToolsEnhancer());

const persistor = persistStore(store);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Wrapper>
        <ChatList />
        <ChatRoom />
        <AllChannels />
      </Wrapper>
    </PersistGate>
  </Provider>
);

export default App;

const Wrapper = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  display: 'flex',
});
