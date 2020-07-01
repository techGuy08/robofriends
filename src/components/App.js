import React, { useState, useEffect } from "react";
import "./App.css";
import "tachyons";
import CardList from "./CardList";
import { robots } from "../robots";
import SearchBox from "./SearchBox";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [allRobots, setAllRobots] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setAllRobots(users));
  }, []);
  const onSearchChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    const filterRobots = robots.filter((el) =>
      el.name.toLowerCase().includes(value.toLowerCase().trim())
    );
    setAllRobots(filterRobots);
  };
  return (
    <div className="tc">
      <div className="header">
        <h1 className="headline_logo f2">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} value={searchTerm} />
      </div>
      {allRobots.length === 0 && searchTerm ? (
        <h1>Not Found</h1>
      ) : (
        <CardList robots={allRobots} />
      )}
    </div>
  );
}

export default App;
