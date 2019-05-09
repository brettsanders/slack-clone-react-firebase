import React, { useState, useEffect } from 'react';
import { db } from './firebase';

function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    return db
      .collection('channels').doc('random').collection('messages')
      .onSnapshot((snapshot) => {
        const messages = [];

        snapshot.forEach(message => {
          messages.push({
            ...message.data(),
            id: message.id
          });
        });
        setMessages(messages);
        console.log(messages);
      });
  }, []);


  return (
    <div className="Messages">
      <div className="EndOfMessages">That's every message!</div>

      {messages.map((message, index) => {
        return index === 0 ? (
          <div key={message.id}>
            index : {index}
            <div className="Day">
              <div className="DayLine" />
              <div className="DayText">12/6/2018</div>
              <div className="DayLine" />
            </div>
            <div className="Message with-avatar">
              <div className="Avatar" />
              <div className="Author">
                <div>
                  <span className="UserName">Brett Sanders </span>
                  <span className="TimeStamp">
                    {new Date(message.createdAt.seconds).toString()}
                  </span>
                </div>
                <div className="MessageContent">{message.text}</div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="Message no-avatar">
              <div className="MessageContent">{ message.text }</div>
            </div>
          </div>
        )
      })}

    </div>
  );
}

export default Messages;
