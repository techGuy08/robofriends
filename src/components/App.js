import React from "react";
import "./App.css";
import "tachyons";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
      robots: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) =>
        this.setState({
          robots: users,
        })
      );
  }
  onSearchChange = (e) => {
    const { value } = e.target;
    this.setState({ search: value });
  };
  render() {
    const { search, robots } = this.state;
    const filterRobots = robots.filter((el) =>
      el.name.toLowerCase().includes(search.toLowerCase().trim())
    );
    return (
      <div className="tc">
        <div className="header">
          <h1 className="headline_logo f2">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} value={search} />
        </div>
        {filterRobots.length === 0 && search ? (
          <h1>Not Found</h1>
        ) : (
          <CardList robots={filterRobots} />
        )}
      </div>
    );
  }
}
// function App() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [allRobots, setAllRobots] = useState([]);
//   async function getData() {
//     return await fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((users) => users);
//   }
//   const robots = getData();
//   console.log(robots);
//   const onSearchChange = (e) => {
//     const { value } = e.target;
//     setSearchTerm(value);
//     const filterRobots = robots.filter((el) =>
//       el.name.toLowerCase().includes(value.toLowerCase().trim())
//     );
//     setAllRobots(filterRobots);
//   };
//   return (
//     <div className="tc">
//       <div className="header">
//         <h1 className="headline_logo f2">RoboFriends</h1>
//         <SearchBox searchChange={onSearchChange} value={searchTerm} />
//       </div>
//       {allRobots.length === 0 && searchTerm ? (
//         <h1>Not Found</h1>
//       ) : (
//         <CardList robots={allRobots} />
//       )}
//     </div>
//   );
// }

export default App;
