import { useBlogs } from '../../../contexts/blogsContext'
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import MoreBlogsHeader from './moreBlogsHeader';
import MoreBlogsList from './moreBlogsList';

export default function MoreBlogs() {
//   const { currBlog, getBlogs } = useBlogs();
//   if (!currBlog) {
//     return <div className="pt-16 text-center text-gray-500">Loading blog...</div>;
//   }

  return (
    <div className="pt-16 max-w-container mx-auto">
      <MoreBlogsHeader/>
      <MoreBlogsList/>
    </div>
  );
}
