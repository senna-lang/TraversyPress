import BackButton from "@/components/back-button";
import { posts } from "@/data/posts";
import * as z from "zod";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  body: z.string().min(1, "Body is required"),
  author: z.string().min(1, "Author is required"),
  date: z.string().min(1, "Date is required"),
});

interface PostsEditFormProps {
  params: {
    id: string;
  };
}

const PostEditPage = ({ params }: PostsEditFormProps) => {
  const post = posts.find(post => post.id === params.id);
  return (
    <div>
      <BackButton text="Back To Posts" link="/posts" />
    </div>
  );
};

export default PostEditPage;
