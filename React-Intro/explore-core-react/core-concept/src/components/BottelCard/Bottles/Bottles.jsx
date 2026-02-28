import { use } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css"

export default function Bottles({ bottlesPromise }) {
  const bottles = use(bottlesPromise);
  console.log(bottles);
  return (
    <div>
      <h1>Buy Awsome Watter Bottle: {bottles.length}</h1>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle key={bottle.id} bottle={bottle}></Bottle>
        ))}
      </div>
    </div>
  );
}
