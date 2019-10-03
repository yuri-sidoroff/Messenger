import React, { useState, useEffect, createRef } from 'react';

import { Motion, spring } from 'react-motion';

import {
  Wrapper,
  Header,
  Body,
  WrapperLine,
  Line,
  Channel,
  WrapperIncomingMessage,
  WrapperSentMessage,
  IncomingMessage,
  SentMessage,
  CornerIncoming,
  CornerSent,
  Text,
} from './common/styles';

export default ({ chatRoom, incMessage, sentMessage, isOpenRoom }) => {
  const [refVK] = useState(createRef());
  const [refFB] = useState(createRef());
  const [refOK] = useState(createRef());

  useEffect(() => {
    const { channelId } = chatRoom;
    channelId === 'VK' &&
      refVK.current &&
      refVK.current.scrollIntoView({ block: 'end' });
    channelId === 'FB' &&
      refFB.current &&
      refFB.current.scrollIntoView({ block: 'end' });
    channelId === 'OK' &&
      refOK.current &&
      refOK.current.scrollIntoView({ block: 'end' });
  });

  const arrIncMessage = incMessage.filter(
    item => item.roomId === chatRoom.roomId,
  );
  const arrSentMessage = sentMessage.filter(
    item => item.roomId === chatRoom.roomId,
  );

  const arrAllMessage = [...arrIncMessage, ...arrSentMessage];

  const channelVK = arrAllMessage
    .filter(item => item.channelId === 'VK')
    .sort((a, b) => new Date(a.dt).getTime() - new Date(b.dt).getTime())
    .map((item, key) =>
      item.type === 'inc' ? (
        <Motion
          key={key}
          defaultStyle={{ tr: 2000 }}
          style={{ tr: spring(isOpenRoom ? 2000 : 0) }}
        >
          {style => (
            <WrapperIncomingMessage
              style={{ transform: `translateX(${style.tr}px)` }}
            >
              <IncomingMessage>{item.body}</IncomingMessage>
              <CornerIncoming />
            </WrapperIncomingMessage>
          )}
        </Motion>
      ) : (
        <Motion
          key={key}
          defaultStyle={{ tr: 2000 }}
          style={{ tr: spring(isOpenRoom ? 2000 : 0) }}
        >
          {style => (
            <WrapperSentMessage
              style={{ transform: `translateX(${style.tr}px)` }}
            >
              <SentMessage>{item.body}</SentMessage>
              <CornerSent />
            </WrapperSentMessage>
          )}
        </Motion>
      ),
    );
  const channelFB = arrAllMessage
    .filter(item => item.channelId === 'FB')
    .sort((a, b) => new Date(a.dt).getTime() - new Date(b.dt).getTime())
    .map((item, key) =>
      item.type === 'inc' ? (
        <Motion
          key={key}
          defaultStyle={{ tr: 2000 }}
          style={{ tr: spring(isOpenRoom ? 2000 : 0) }}
        >
          {style => (
            <WrapperIncomingMessage
              style={{ transform: `translateX(${style.tr}px)` }}
            >
              <IncomingMessage>{item.body}</IncomingMessage>
              <CornerIncoming />
            </WrapperIncomingMessage>
          )}
        </Motion>
      ) : (
        <Motion
          key={key}
          defaultStyle={{ tr: 2000 }}
          style={{ tr: spring(isOpenRoom ? 2000 : 0) }}
        >
          {style => (
            <WrapperSentMessage
              style={{ transform: `translateX(${style.tr}px)` }}
            >
              <SentMessage>{item.body}</SentMessage>
              <CornerSent />
            </WrapperSentMessage>
          )}
        </Motion>
      ),
    );
  const channelOK = arrAllMessage
    .filter(item => item.channelId === 'OK')
    .sort((a, b) => new Date(a.dt).getTime() - new Date(b.dt).getTime())
    .map((item, key) =>
      item.type === 'inc' ? (
        <Motion
          key={key}
          defaultStyle={{ tr: 2000 }}
          style={{ tr: spring(isOpenRoom ? 2000 : 0) }}
        >
          {style => (
            <WrapperIncomingMessage
              style={{ transform: `translateX(${style.tr}px)` }}
            >
              <IncomingMessage>{item.body}</IncomingMessage>
              <CornerIncoming />
            </WrapperIncomingMessage>
          )}
        </Motion>
      ) : (
        <Motion
          key={key}
          defaultStyle={{ tr: 2000 }}
          style={{ tr: spring(isOpenRoom ? 2000 : 0) }}
        >
          {style => (
            <WrapperSentMessage
              style={{ transform: `translateX(${style.tr}px)` }}
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
        <Text>All Channels</Text>
      </Header>
      <Body>
        {channelFB.length > 0 ? (
          <WrapperLine>
            <Line></Line>
            <Channel>
              <Text>FB</Text>
            </Channel>
            <Line></Line>
          </WrapperLine>
        ) : null}
        {channelFB}
        <div ref={refFB}></div>
        {channelOK.length > 0 ? (
          <WrapperLine>
            <Line></Line>
            <Channel>
              <Text>OK</Text>
            </Channel>
            <Line></Line>
          </WrapperLine>
        ) : null}
        {channelOK}
        <div ref={refOK}></div>
        {channelVK.length > 0 ? (
          <WrapperLine>
            <Line></Line>
            <Channel>
              <Text>VK</Text>
            </Channel>
            <Line></Line>
          </WrapperLine>
        ) : null}
        {channelVK}
        <div ref={refVK}></div>
      </Body>
    </Wrapper>
  );
};
