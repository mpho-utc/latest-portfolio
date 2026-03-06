import Header from "../assets/components/shared/header";
import Footer from "../assets/components/shared/footer";
import CurrentBlog from "../assets/components/unique/currentBlog";
// import Container from "../assets/components/shared/container";
import { BlogsProvider } from "../contexts/blogsContext";
import MoreBlogs from "../assets/components/unique/moreBlogs";

export default function Blogpage() {
  return (
    <>
      <Header />
      <BlogsProvider>
        <CurrentBlog/>
        <MoreBlogs/>
      </BlogsProvider>
      <Footer/>
    </>
  );
}