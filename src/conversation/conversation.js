import React, { useEffect, useRef, useState } from 'react';
import { Row, InputGroup, Form, FormControl, Button } from 'react-bootstrap';


function Conversation(props) {
  const [messages, setMessages] = useState(props.conversation.messages);
  const [currentUser] = useState(props.currentUser);
  const messagesEnd = useRef(null);

  const scrollToBottom = () => {
    messagesEnd.current.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    setMessages(props.conversation.messages);
    scrollToBottom();
  }, [props.conversation]);

  const sendMessage = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    const newMessages = messages.slice();
    newMessages.push({ userId: currentUser.id, content: form.elements.message.value });
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
            <Row key={index} className={`box ${message.userId === currentUser.id ? 'self' : 'other'}`}>
              {message.content}
            </Row>
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