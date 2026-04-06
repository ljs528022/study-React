import "./App.css";
import { Routes, Route, useParams, useLocation, Link } from "react-router-dom";
import React, { useEffect } from "react";

/*
function Home() {
  const location = useLocation();

  useEffect(() => {
    console.log("Current Path:", location.pathname);
  }, [location]);

  return <h1>Home page</h1>;
}

function User() {
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    console.log("Current Path:", location.pathname);
    console.log("URL Parameter (id):", id);
  }, [id, location]);

  return <h1>User ID: {id}</h1>;
}

function Search() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const keyword = queryParams.get("keyword");

  useEffect(() => {
    console.log("Current Path", location.pathname);
    console.log("Query Parameter (keyword):", keyword);
  }, [keyword, location]);

  return <h1>Search Keyword: {keyword}</h1>;
}
*/

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/wrong-path">Wrong Path</Link>
      </nav>
      <Routes>
        {/*
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/search" element={<Search />} />
        */}
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/about" element={<h2>About Page</h2>} />
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </>
  );
}

export default App;
