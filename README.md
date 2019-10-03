# Messenger

Messenger for answering incoming messages on different channels.

## How to use

* git clone https://github.com/yuristnn/Messenger
* npm install
* npm start

## Directory and file structure

```
src
│ ├───App.js
│ ├───App.test.js
│ ├───client.js
│ ├───index.js
│ └───server.js
│
├───components
│   │
│   ├───AllChannels
│   │   │   └───common
│   │   │       └───styles.jsx - Styling Material-UI Components
│   │   │
│   │   ├───AllChannels.jsx - Сomponent of the list of all channels of the selected room
│   │   └───AllChannelsContainer.jsx
│   │
│   ├───ChatList
│   │   │   └───common
│   │   │       └───styles.jsx - Styling Material-UI Components
│   │   │
│   │   ├───ChatList.jsx - Component of the list of recent incoming messages
│   │   └───ChatListContainer.jsx
│   │
│   ├───ChatRoom
│   │   │   └───common
│   │   │       └───styles.jsx - Styling Material-UI Components
│   │   │
│   │   ├───ChatRoom.jsx - Component of the message list of the selected room and the selected channel
│   │   └───ChatRoomContainer.jsx
│   │
│   └───common
│       └───color.jsx - Application theme selection component
│
└───store
    ├───actionCreators.jsx
    ├───constants.jsx
    └───reducers.jsx
```

