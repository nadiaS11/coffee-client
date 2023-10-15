import React from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, category, photo } = coffee;

  const handleDelete = (_id) => {
    console.log("deleted", _id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const remaining = coffees.filter((coffee) => coffee._id !== _id);
            setCoffees(remaining);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
            }
          });

        //
      }
    });
  };

  return (
    <div className="card card-side bg-[#F5F4F1] ">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p> {category}</p>
        <p>Price: ${quantity}</p>
      </div>
      <div className="flex flex-col gap-5 p-5">
        <button className="btn btn-error">Watch</button>
        <Link to={`/update-coffee/${_id}`}>
          <button className="btn btn-accent">Edit</button>
        </Link>
        <button onClick={() => handleDelete(_id)} className="btn btn-primary">
          Delete
        </button>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.object,
  coffees: PropTypes.array,
};

export default CoffeeCard;
