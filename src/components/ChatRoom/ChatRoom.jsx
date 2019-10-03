import React, { useState, useEffect, createRef } from 'react';
import { Motion, spring } from 'react-motion';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { loremIpsum } from 'lorem-ipsum';
import {
  Wrapper,
  Header,
  SelectChannel,
  Body,
  InputMessageField,
  ButtonMessage,
  WrapperIncomingMessage,
  WrapperSentMessage,
  IncomingMessage,
  SentMessage,
  CornerIncoming,
  CornerSent,
  Text,
} from './common/styles';

export default ({
  chatRoom,
  isOpenRoom,
  incMessage,
  sentMessage,
  handleChangeChannelId,
  handleSendNewMessage,
  handleIncNewMessage,
}) => {
  const [newMessage, setNewMessage] = useState('');
  const [scrollRoom] = useState(createRef());

  useEffect(() => {
    if (scrollRoom.current) {
      setTimeout(
        () => scrollRoom.current.scrollIntoView({ block: 'end' }),
        200,
      );
    }
  });

  const handleSendMessage = sentMes => {
    if (sentMes.replace(/\s/g, '') !== '') {
      handleSendNewMessage(sentMes);
      setNewMessage('');
      const randomBetween = (min, max) => {
        return Math.floor((max - min + 1) * Math.random()) + min;
      };
      const randomChoose = array => {
        return array[randomBetween(0, array.length - 1)];
      };
      const incMes = loremIpsum({
        count: randomBetween(1, 5),
        format: 'plain',
        units: randomChoose(['sentences', 'words']),
      });
      setTimeout(
        () => handleIncNewMessage(incMes),
        Math.floor(2001 * Math.random()) + 3000,
      );
    }
    setNewMessage('');
  };

  const arrIncMessage = incMessage
    .filter(item => item.roomId === chatRoom.roomId)
    .filter(item => item.channelId === chatRoom.channelId);
  const arrSentMessage = sentMessage
    .filter(item => item.roomId === chatRoom.roomId)
    .filter(item => item.channelId === chatRoom.channelId);

  const arrMessage = [...arrIncMessage, ...arrSentMessage];
  const allArrMessage = arrMessage
    .sort((a, b) => new Date(a.dt).getTime() - new Date(b.dt).getTime())
    .map((item, key) =>
      item.type === 'inc' ? (
        <Motion
          key={key}
          defaultStyle={{ tr: 1000 }}
          style={{ tr: spring(isOpenRoom ? 1000 : 0) }}
        >
          {style => (
            <WrapperIncomingMessage
              style={{
                transform: `translateY(${style.tr}px)`,
                marginTop: key === 0 ? 'auto' : null,
              }}
            >
              <IncomingMessage>{item.body}</IncomingMessage>
              <CornerIncoming />
            </WrapperIncomingMessage>
          )}
        </Motion>
      ) : (
        <Motion
          key={key}
          defaultStyle={{ tr: 1000 }}
          style={{ tr: spring(isOpenRoom ? 1000 : 0) }}
        >
          {style => (
            <WrapperSentMessage
              style={{
                transform: `translateY(${style.tr}px)`,
                marginTop: key === 0 ? 'auto' : null,
              }}
            >
              <SentMessage>{item.body}</SentMessage>
              <CornerSent />
            </WrapperSentMessage>
          )}
        </Motion>
      ),
    );

  return (
    <Wrapper>
      <Header>
        <Text>{chatRoom.roomId}</Text>
        <SelectChannel
          value={chatRoom.channelId}
          onChange={event => handleChangeChannelId(event.target.value)}
          IconComponent={ExpandMoreIcon}
        >
          <MenuItem value="FB">FB</MenuItem>
          <MenuItem value="OK">OK</MenuItem>
          <MenuItem value="VK">VK</MenuItem>
        </SelectChannel>
      </Header>
      <Body>
        {allArrMessage}
        <div ref={scrollRoom}></div>
      </Body>
      <InputMessageField
        disabled={chatRoom.roomId === 'Room name' ? true : false}
        value={newMessage}
        multiline={true}
        rows={3}
        placeholder={
          chatRoom.roomId === 'Room name' ? null : 'Enter your message...'
        }
        onChange={event => setNewMessage(event.target.value)}
      />
      <ButtonMessage onClick={() => handleSendMessage(newMessage)}>
        <ArrowForwardIosIcon />
      </ButtonMessage>
    </Wrapper>
  );
};
