import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function Home() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  console.log(loadedCoffees);
  return (
    <>
      <h1 className="text-4xl text-center  font-bold"> Coffee Emporium</h1>
      <div className="text-center my-10">
        <Link to={"/add-coffee"}>
          {" "}
          <button className="btn btn-outline">Add</button>{" "}
        </Link>
      </div>
      <div className="container mx-auto grid grid-cols-2 gap-10 my-20">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </>
  );
}

export default Home;
