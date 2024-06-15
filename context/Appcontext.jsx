import { createContext } from "react";
import { baseUrl } from "../components/baseurl";
import {useState, useEffect} from 'react';

export const Appcontext = createContext();

function AppcontextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  async function fetchData(page) {
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}?page=${page}`);
      const data = await response.json();
      console.log(data.posts);
      setPage(data.page);
      setTotalPages(data.totalPages);
      setPosts(data.posts);  

    } catch (error) {
      console.log(error);
      setPage(1);
      setPosts([]);
      setTotalPages(0);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData(page);
  }, []);

  function pagechangeHandler(num){
    setPage(num);
    fetchData(num);
  }

  const value = {
    loading,
    page,
    posts,
    totalPages,
    setPage,
    setPosts,
    setTotalPages,
    fetchData,
    pagechangeHandler
  };
  return <Appcontext.Provider value={value}>{children}</Appcontext.Provider>;
}

export default AppcontextProvider;
