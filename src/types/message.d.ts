export interface Message {
  id: string;
  sref: string;
  uref: string;
  tstamp: Date;
  content: string;
  username: string;
  roomId: string;
  unreadUserIds: string[];
}

export interface ChatRoom {
  id: string;
  sref: string;
  uref: string;
  tstamp: Dat;
  type: 'default' | 'notification' | 'round';
  name: string;
  displayName: string;
  participants: string[];
}

export interface Account {
  username: string;
  displayName: string;
}

// export interface UnreadMessage {
//   id: string;
//   sref: string;
//   uref: string;
//   tstamp: Date;
//   content: string;
//   senderId: string;
//   chatRoomId: string;
//   unreadUserId: string;
// }

export type AccountList = Account[];
export type MessageList = Message[];
export type ChatRoomList = ChatRoom[];
// export type UnreadMessageList = UnreadMessage[];

export type AccountCollection = {
  [username: string]: Account;
};
export type MessageCollection = {
  [id: string]: Message;
};
export type ChatRoomCollection = {
  [id: string]: ChatRoom;
};
