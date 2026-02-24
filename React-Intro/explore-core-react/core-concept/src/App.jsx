import { Suspense } from "react";
import "./App.css";
import User from "./User";
import Friends from "./Friends";
import Counter from "./counter/Counter";
import Rendering from "./rendering/Rendering";
import Users from "./fetching/Users";

// const fetchUser = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json(),
// );

// const fetchFrinds = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// };

function App() {
  // const fetchPromise = fetchFrinds();
  return (
    <>
      <h1>React Core Concept</h1>
      <Counter></Counter>
      <Rendering></Rendering>
      <Suspense fallback={<p>Users Data Loading Please Wait...</p>}>
        <Users></Users>
      </Suspense>
      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <User fetchUser={fetchUser}></User>
      </Suspense>
      <Suspense fallback={<h3>Friends are coming soon for treat...</h3>}>
        <Friends fetchPromise={fetchPromise}></Friends>
      </Suspense> */}
    </>
  );
}

export default App;
