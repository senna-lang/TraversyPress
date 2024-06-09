"use client";
import BackButton from "@/components/back-button";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { posts } from "@/data/posts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
  const { toast } = useToast();
  const post = posts.find(post => post.id === params.id);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post?.title || "",
      body: post?.body || "",
      author: post?.author || "",
      date: post?.date || "",
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    toast({
      title: "Post Updated successfully",
      description: `Updated by ${data.author} on ${data.date}`,
    });
  };

  return (
    <div>
      <BackButton text="Back To Posts" link="/posts" />
      <h3 className=" text-2xl mb-4">Edit Post</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className=" space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" uppercase text-xs font-bold text-zinc-500 dark:text-white">
                  Title
                </FormLabel>
                <FormControl>
                  <Input
                    className=" bg-slate-100 dark:bg-slate-500 border-0 focus:visited:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Enter title"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" uppercase text-xs font-bold text-zinc-500 dark:text-white">
                  Body
                </FormLabel>
                <FormControl>
                  <Textarea
                    className=" bg-slate-100 dark:bg-slate-500 border-0 focus:visited:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Enter body"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" uppercase text-xs font-bold text-zinc-500 dark:text-white">
                  Author
                </FormLabel>
                <FormControl>
                  <Textarea
                    className=" bg-slate-100 dark:bg-slate-500 border-0 focus:visited:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Enter author"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" uppercase text-xs font-bold text-zinc-500 dark:text-white">
                  Date
                </FormLabel>
                <FormControl>
                  <Textarea
                    className=" bg-slate-100 dark:bg-slate-500 border-0 focus:visited:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Enter Date"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className=" w-full dark:bg-slate-800 dark:text-white"
          >
            Update Posts
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default PostEditPage;
