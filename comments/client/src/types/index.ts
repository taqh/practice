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
