import { fakeUsers } from './fakeUsers.js';

export const fakeConversations = [
  {
    messages: [
      {
        user: fakeUsers[0],
        content:
          'hey This sidsjfhkjsf dfjhsd fksdhfkjds fsdfhsdk fksdfh dskjfhsdkfhdsf ksdf',
      },
      {
        user: fakeUsers[0],
        content:
          'hey',
      },
      { user: fakeUsers[1], content: 'sup' },
      {
        user: fakeUsers[0],
        content:
          'hey This sidsjfhkjsf dfjhsd fksdhfkjds fsdfhsdk fksdfh dskjfhsdkfhdsf ksdf',
      },
      { user: fakeUsers[1], content: 'sup' },
      { user: fakeUsers[1], content: 'sup' },
      {
        user: fakeUsers[0],
        content:
          'hey This sidsjfhkjsf dfjhsd fksdhfkjds fsdfhsdk fksdfh dskjfhsdkfhdsf ksdf',
      },
      { user: fakeUsers[1], content: 'sup' },
      { user: fakeUsers[1], content: 'sup' },
      {
        user: fakeUsers[0],
        content:
          'hey This sidsjfhkjsf dfjhsd fksdhfkjds fsdfhsdk fksdfh dskjfhsdkfhdsf ksdf',
      },
      { user: fakeUsers[1], content: 'sup' },
    ],
    users: [
      fakeUsers[0],
      fakeUsers[1],
    ],
    id: '0',
  },
  {
    messages: [],
    users: [
      fakeUsers[0],
      fakeUsers[2],
    ],
    id: '1',
  },
  {
    messages: [],
    users: [
      fakeUsers[0],
      fakeUsers[3],
    ],
    id: '2',
  },
  {
    messages: [],
    users: [
      fakeUsers[1],
      fakeUsers[3],
    ],
    id: '3',
  },
];
