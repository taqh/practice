import { createContext } from 'react';
const structure = {
  id: '',
  score: 0,
  content: '',
  replies: [],
  user: {
    image: {
      png: '',
      webp: '',
    },
    username: '',
  },
  createdAt: '',
};

const ChatContext = createContext({
  loading: false,
  username: '',
  posts: [structure],
  modalRef: {},
  authRef: {},
  reply: false,
  isReplying: false,
  deleting: false,
  authenticated: false,
  cancel: () => {},
  setUser: () => {},
  addReply: () => {},
  showModal: () => {},
  addComment: () => {},
  formatTime: () => {},
  handleChange: () => {},
  deleteComment: () => {},
  updateComment: () => {},
});

export default ChatContext;
