import { createContext } from 'react';
import { ContextValues } from '../types';

const ChatContext = createContext<ContextValues>({
  posts: [],
  loading: false,
  username: '',
  modalRef: null,
  authRef: null,
  deleting: false,
  authenticated: false,
  cancel: () => {},
  setUser: () => {},
  addReply: () => {},
  showModal: () => {},
  addComment: () => {},
  formatTime: () => '',
  deleteComment: () => {},
  updateComment: () => {},
});

export default ChatContext;
