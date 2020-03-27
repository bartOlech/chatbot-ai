import React, { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import ico from './img/chatbot.jpg';
import 'react-chat-widget/lib/styles.css';
 
const Chat = () => {

  useEffect(() => {
      addResponseMessage('Witaj');
      addResponseMessage('W czym mogę pomóc? :)');
  }, [])
 
  const handleNewUserMessage = (newMessage) => {
    const options = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          message: newMessage
      }),
      mode: 'cors',
    };

    fetch('http://localhost:8080/newMessage', options)
    .then(res => res.json())
    .then(json => {
      addResponseMessage(json.msg);
      if(json.msg1) {
        addResponseMessage(json.msg1)
      }
      if(json.msg2) {
        addResponseMessage(json.msg2)
      }
    })
    .catch(err => console.log(err))
  }
 
    return (
      <div>
        <Widget
          handleNewUserMessage={handleNewUserMessage}
          profileAvatar={ico}
          title="Chatbot"
          subtitle='Bartłomiej Olech'
        />
      </div>
    );
}
 
export default Chat;