import React, { useState } from 'react';
import { Row, Col, ListGroup, Button, Modal, Dropdown, DropdownButton } from 'react-bootstrap';
import './chat.css';
import Conversation from '../conversation/conversation.js';
import { fakeConversations } from '../fakeConversation.js';
import { fakeUsers } from '../fakeUsers.js';


function Chat(props) {
  const [currentUser] = useState(props.currentUser);
  const [users] = useState(fakeUsers);
  const [newChatUser, setNewChatUser] = useState(undefined);
  const [show, setShow] = useState(false);
  const [conversations, setConversations] = useState(fakeConversations);
  const [activeConversationIndex, setActiveConversationIndex] = useState(0);
  const [activeConversation, setActiveConversation] = useState(conversations[0]);

  const select = (index, conversation) => {
    setActiveConversationIndex(index);
    setActiveConversation(conversation);
  }

  const handleClose = (conversation) => {
    if (!conversation) {
      setShow(false);
      return;
    }
    const newConversations = conversations.slice();
    const newConversation = { users: [ props.currentUser, newChatUser ], messages: [], id: conversations.length+''};
    newConversations.push(newConversation);
    select(newConversations.length-1, newConversation);
    setConversations(newConversations);
    setShow(false);
    setNewChatUser(undefined);
  }

  return (
    <>
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
          <Button className="create-convo" variant="info" size="lg" block onClick={() => {setShow(true);}}>
            Creat Conversation
          </Button>
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
          <Conversation conversation={activeConversation} currentUser={currentUser} />
        </Col>
      </Row>
      <Modal show={show} onHide={() => {handleClose(false)}}>
        <Modal.Header closeButton>
          <Modal.Title>Choose someone to talk to</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DropdownButton title='Users'>
            {users.map((user, index) => {
              return <Dropdown.Item key={index} onSelect={() => { setNewChatUser(user) }}>{user.name}</Dropdown.Item>
            })}
          </DropdownButton>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {handleClose(false)}}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {handleClose(true)}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Chat;