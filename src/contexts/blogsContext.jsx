import { createContext, useState, useContext } from "react";
import { collection, orderBy, limit, query, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/init.js";
import {useEffect} from 'react';
//DONT FORGET TO ADD SYSeXPLAIN CATEGORY and techGossip
const BlogsContext = createContext();

const BlogsProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [currBlog, setCurrBlog] = useState(null);

  

  useEffect(() => {
    const getLatestBlog = async () => {
      setLoading(true);

      try {
        const q = query(
          collection(db, "blogs"),
          orderBy("createdAt", "desc"),
          limit(1)
        );
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          const docSnap = snapshot.docs[0];
          setCurrBlog({ id: docSnap.id, ...docSnap.data() });
        }
        setSuccess(true);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getLatestBlog();
  }, []);

  
 useEffect(() => {
   const getBlogs = async () => {
    setLoading(true);

    try {
      const snapshot = await getDocs(collection(db, "blogs"));
      const returnData = snapshot.docs.map(docSnap => ({
        id: docSnap.id,
        ...docSnap.data()
      }));

      setBlogs(returnData);
      setSuccess(true);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  getBlogs()
 }, [])
  const getBlog = async (id) => {
    setLoading(true);

    try {
      const docRef = doc(db, "blogs", id);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) throw new Error("Blog not found");
      const data = { id: docSnap.id, ...docSnap.data() };
      setCurrBlog(data);
      setSuccess(true);
    }catch(err){
      setError(err);
    }finally{
      setLoading(false);
    }
  };

  return (
    <BlogsContext.Provider value={{
      loading,
      error,
      success,
      blogs,
      currBlog,
      getBlog,
      setCurrBlog
    }}>
      {children}
    </BlogsContext.Provider>
  );
};

const useBlogs = () => {
  const ctx = useContext(BlogsContext);
  if (!ctx) throw new Error("useBlogs must be used inside BlogsProvider");
  return ctx;
};

export { BlogsProvider, useBlogs };