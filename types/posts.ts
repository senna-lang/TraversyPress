export interface Post {
  id: string;
  title: string;
  body: string;
  author: string;
  date: string;
  comments: PostsComment[];
}

export interface PostsComment {
  id: string;
  text: string;
  username: string;
}
