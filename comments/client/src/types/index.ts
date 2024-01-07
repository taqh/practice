import { ReactNode, MouseEvent } from 'react';

export type Comment = {
  id: string;
  score: number;
  content: string;
  replies: [];
  user: {
    image: {
      png: string;
      webp: string;
    };
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
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
  createdAt: string;
};

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
