import { useEffect, useState } from "react";
import "./components/main.css";
import axios from "axios";
function App() {
  // REACT HOOKS ***************
  // useEffect
  const [state, setState] = useState(0);

  useEffect(() => {
    console.log("useEffect hook");
  }, []);

  // dom manipulation
  useEffect(() => {
    document.title = "Test Title";
  }, []);

  // data fetching

  // const [posts, setPosts] = useState([]);
  const [singlepost, setSinglePost] = useState({});
  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        console.log(res.data);
        setSinglePost(res.data);
        // setPosts(res.data);
      } catch (err) {
        console.log(first);
      }
    };
    getPosts();
  }, []);

  // subscription
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Time out completed!");
    }, 3000);

    return () => {
      clearTimeout(timer);
      console.log("Timer has been cleared on mount!");
    };
  }, []);

  return (
    <div className="main_wrapper">
      <div className="inner_wrapper">
        <div>
          {singlepost.body}
          {/* {posts.map((post) => (
            <p>{post.title}</p>
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default App;
