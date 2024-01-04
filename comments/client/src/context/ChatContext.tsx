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
  posts: [structure],
  modalRef: {},
  reply: false,
  isReplying: false,
  deleting: false,
  cancel: () => {},
  addReply: () => {},
  showModal: () => {},
  addComment: () => {},
  formatTime: () => {},
  handleChange: () => {},
  deleteComment: () => {},
  updateComment: () => {},
});

export default ChatContext;
