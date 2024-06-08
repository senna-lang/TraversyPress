import PostsTable from "@/components/posts./posts-table"
import BackButton from "@/components/back-button"
import PostsPagination from "@/components/posts./posts-pagination"

const PostsPage = () => {
  return (
    <div>
      <BackButton text="Go Back" link="/" />
      <PostsTable />
      <PostsPagination />
    </div>
  )
}

export default PostsPage