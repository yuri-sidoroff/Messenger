import React, { useState, useEffect, createRef } from 'react';
import { Motion, spring } from 'react-motion';
import { Wrapper, MessageBox, Header, Text } from './common/styles';
import { loremIpsum } from 'lorem-ipsum';

export default ({
  incMessage,
  handleOpenRoom,
  handleCloseRoom,
  handleIncNewMessage,
}) => {
  const [scrollToTopList] = useState(createRef());

  useEffect(() => {
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
    setTimeout(() => {
      handleIncNewMessage(incMes);
    }, 2000);
  }, []);

  useEffect(() => {
    if (scrollToTopList.current) {
      setTimeout(
        () => scrollToTopList.current.scrollIntoView({ block: 'start' }),
        500,
      );
    }
  });

  const set = new Set([]);
  const messageList = incMessage
    .sort((a, b) => new Date(b.dt).getTime() - new Date(a.dt).getTime())
    .filter(item => {
      if (!set.has(item.roomId + item.channelId)) {
        set.add(item.roomId + item.channelId);
        return item;
      }
    })
    .reverse()
    .map((item, key) => (
      <Motion
        key={key}
        defaultStyle={{ scale: 0 }}
        style={{ scale: spring(1) }}
      >
        {style => (
          <MessageBox
            style={{
              transform: `scale(${style.scale},${style.scale})`,
              marginBottom: key === 0 ? 'auto' : null,
            }}
            onClick={() => {
              setTimeout(
                () =>
                  handleOpenRoom({
                    roomId: item.roomId,
                    channelId: item.channelId,
                  }),
                500,
              );
              handleCloseRoom();
            }}
          >
            <Header>
              <Text>{item.roomId}</Text>
              <Text>{item.channelId}</Text>
            </Header>
            <Text>{item.body.length < 20 ? item.body : item.body.slice(0,20) + '...'}</Text>
          </MessageBox>
        )}
      </Motion>
    ));

  return (
    <Wrapper>
      {messageList}
      <div ref={scrollToTopList}></div>
    </Wrapper>
  );
};
