import { ReactNode, MouseEvent } from 'react';

export type Comment = {
  id: string;
  score: number;
  content: string;
  replies: [
    {
      id: string;
      score: number;
      content: string;
      replyingTo: string;
      user: {
        avatar: string;
        username: string;
      };
      createdAt: string;
    }
  ];
  user: {
    avatar: string;
    username: string;
  };
  createdAt: string;
};

export type Reply = {
  id: string;
  score: number;
  content: string;
  replyingTo: string;
  user: {
    avatar: string;
    username: string;
  };
  createdAt: string;
};

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export type ContextValues = {
  posts: Comment[];
  loading: boolean;
  username: string;
  deleting: boolean;
  authenticated: boolean;
  modalRef: React.RefObject<HTMLDialogElement> | null;
  authRef: React.RefObject<HTMLDialogElement> | null;
  cancel: () => void;
  setUser: (username: string) => void;
  addReply: (reply: string, id: string, replyingTo: string) => void;
  showModal: (id: string) => void;
  addComment: (text: string) => void;
  formatTime: (time: string) => string;
  updateComment: (updatedText: string, id: string) => void;
  deleteComment: () => void;
};

export interface CommentProps {
  content: string;
  currentUser: boolean;
  id: string;
  username: string;
  createdAt: string;
  hasReplies: boolean;
  score: number;
  replies: Reply[];
}
export interface ReplyProps {
  content: string;
  currentUser: boolean;
  replyingTo: string;
  id: string;
  username: string;
  createdAt: string;
  score: number;
}
