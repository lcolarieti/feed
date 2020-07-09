export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  image: string;
  showComment?: boolean;
  visible: boolean;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}