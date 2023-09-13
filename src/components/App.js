import React, { useEffect, useState } from "react";
import "./App.css";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

const App = () => {
  const [searchVal, setSearchVal] = useState("");
  const [robotsArr, setRobotsArr] = useState([]);
  const [visibleList, setVisbileList] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      return await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((users) => {
          setRobotsArr(users);
          setVisbileList(users);
          console.log(users);
          return users;
        });
    };
    loadData();
  }, []);

  const onSearchChange = (e) => {
    const { value } = e.target;
    const filtered = robotsArr.filter((el) =>
      el.name.toLowerCase().includes(value.toLowerCase().trim())
    );
    setVisbileList(filtered);
    setSearchVal(value);
  };

  return (
    <div className="tc">
      <div className="header">
        <h1 className="headline_logo f2">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} value={searchVal} />
      </div>
      {visibleList.length === 0 && searchVal ? (
        <h1 className="text-white">Not Found</h1>
      ) : (
        <CardList robots={visibleList} />
      )}
    </div>
  );
};

export default App;
