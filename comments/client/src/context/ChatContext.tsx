import { createContext } from 'react';
// import { Comment as CommentTypes } from '../types'
const structure = {
  id: '',
  score: 0,
  content: '',
  replies: [
    {
      id: '',
      score: 0,
      content: '',
      replyingTo: '',
      user: {
        image: {
          png: '',
          webp: '',
        },
        username: '',
      },
      createdAt: '',
    },
  ],
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
  modalRef: null,
  authRef: null,
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
  deleteComment: () => {},
  updateComment: () => {},
});

export default ChatContext;
