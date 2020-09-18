import React, { useEffect, useRef, useState } from 'react';
import { Row, InputGroup, Form, FormControl, Button } from 'react-bootstrap';
import './conversation.css';


function Conversation(props) {
  const [messages, setMessages] = useState(props.conversation ? props.conversation.messages : []);
  const [currentUser] = useState(props.currentUser);
  const messagesEnd = useRef(null);

  const scrollToBottom = () => {
    messagesEnd.current.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    setMessages(props.conversation ? props.conversation.messages : []);
    scrollToBottom();
  }, [props.conversation]);

  const sendMessage = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    const newMessages = messages.slice();
    newMessages.push({ user: currentUser, content: form.elements.message.value });
    setMessages(newMessages);
    form.elements.message.value = '';
    setTimeout(() => {
      scrollToBottom();
    });
  }

  return (
    <>
      <div className="conversation">
        {messages.map((message, index) => {
          return (
            <div key={index} >
              <Row key={index} className={`box ${message.user.id === currentUser.id ? 'self' : 'other'}`}>
                {message.content}
              </Row>
              {(!messages[index+1] || messages[index+1].user.id !== messages[index].user.id) &&
                <span key={`name ${index}`} className={`${message.user.id === currentUser.id ? 'self-name' : 'other-name'}`}>{message.user.name}</span>
              }
            </div>
          )
        })}
        <div style={{ float:"left", clear: "both" }} ref={messagesEnd}>
        </div>
      </div>
      <div className="send-message">
        <Form onSubmit={sendMessage}>
          <Form.Group controlId="message">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Send a message"
                type='text'
                name='message'
              />
              <InputGroup.Append>
                <Button variant="primary" type="submit">Send</Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}

export default Conversation;