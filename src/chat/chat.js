import React, { useState } from 'react';
import { Row, Col, ListGroup, InputGroup, Form, FormControl, Button } from 'react-bootstrap';
import './chat.css';
import Conversation from '../conversation/conversation.js';


function Chat() {
  const [currentUser] = useState('1');
  const [conversations, setConversations] = useState([
    { messages: [
      { userId: '1', content: 'hey This sidsjfhkjsf dfjhsd fksdhfkjds fsdfhsdk fksdfh dskjfhsdkfhdsf ksdf' },
      { userId: '2', content: 'sup' },
      { userId: '1', content: 'hey This sidsjfhkjsf dfjhsd fksdhfkjds fsdfhsdk fksdfh dskjfhsdkfhdsf ksdf' },
      { userId: '2', content: 'sup' },
      { userId: '2', content: 'sup' },
      { userId: '1', content: 'hey This sidsjfhkjsf dfjhsd fksdhfkjds fsdfhsdk fksdfh dskjfhsdkfhdsf ksdf' },
      { userId: '2', content: 'sup' },
      { userId: '2', content: 'sup' },
      { userId: '1', content: 'hey This sidsjfhkjsf dfjhsd fksdhfkjds fsdfhsdk fksdfh dskjfhsdkfhdsf ksdf' },
      { userId: '2', content: 'sup' },
    ], users: [
      { id: '1', name: 'Keegan'},
      { id: '2', name: 'Pinky'}
    ], id: '1'},
    { messages: [], users: [
      { id: '1', name: 'Keegan'},
      { id: '2', name: 'David'}
    ], id: '2'},
    { messages: [], users: [
      { id: '1', name: 'Keegan'},
      { id: '2', name: 'Mike'}
    ], id: '3'},
  ]);
  const [activeConversationIndex, setActiveConversationIndex] = useState(0);
  const [activeConversation, setActiveConversation] = useState(conversations[0]);

  const select = (index, conversation) => {
    setActiveConversationIndex(index);
    setActiveConversation(conversation);
  }

  const sendMessage = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    activeConversation.messages.push({ userId: currentUser, content: form.elements.message.value })
  }

  return (
    <Row>
      <Col xs={3}>
        <ListGroup activeKey={activeConversationIndex}>
          {conversations.map((conversation, index) => {
            return (
            <ListGroup.Item 
              action
              active={activeConversationIndex === index}
              onClick={() => {select(index, conversation)}}
              key={index}>
                {conversation.users.map((user, i) => {
                  return <span key={i}>{user.name} </span>
                })}
            </ListGroup.Item>
          )})}
        </ListGroup>
      </Col>
      <Col>
        <Row>
          <Col>
            <ListGroup horizontal className="justify-content-md-center">
              {activeConversation.users.map((user, index) => {
                return (
                  <ListGroup.Item key={index}>{user.name}</ListGroup.Item>
                )
              })}
            </ListGroup>
          </Col>
        </Row>
        <Conversation conversation={activeConversation} />
      </Col>
    </Row>
  );
}

export default Chat;