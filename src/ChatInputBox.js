import React from 'react';
import { db } from './firebase';

function ChatInputBox() {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        const value = event.target.elements[0].value;
        console.log(value);
      }}
      className="ChatInputBox"
    >
      <input name="foo" className="ChatInput" placeholder="Message #general" />
    </form>
  );
}

export default ChatInputBox;
