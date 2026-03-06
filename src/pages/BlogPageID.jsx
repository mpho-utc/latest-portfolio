import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from "../assets/components/shared/header";
import Footer from "../assets/components/shared/footer";
import CurrentBlog from "../assets/components/unique/currentBlog";
import Container from "../assets/components/shared/container";
import { BlogsProvider, useBlogs } from "../contexts/blogsContext";
import MoreBlogs from "../assets/components/unique/moreBlogs";

function BlogContent() {
  const { blogID } = useParams();
  const { getBlog, setCurrBlog, currBlog } = useBlogs();

  useEffect(() => {
    const resolveBlog = async () => {
        console.log('BLOG ID', blogID)
      await getBlog(blogID);
    };
    resolveBlog();
  }, [blogID]);

  return (
    <>
      <CurrentBlog />
      <MoreBlogs />
    </>
  );
}

export default function BlogpageID() {
  return (
    <BlogsProvider>
      <Header />
      <Container>
        <BlogContent />
      </Container>
      <Footer />
    </BlogsProvider>
  );
}
