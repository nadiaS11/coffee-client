import React from "react";
import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, category, photo, details, taste, supplier } =
    coffee;

  const updateCoffee = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = {
      name,
      quantity,
      supplier,
      category,
      taste,
      details,
      photo,
    };
    console.log(updatedCoffee);

    //send to server
    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="container mx-auto py-20 bg-[#F4F3F0]">
      <h2 className="text-center my-10 text-2xl font-bold">
        Update your coffee
      </h2>
      <form onSubmit={updateCoffee} className="max-w-6xl mx-auto font-bold">
        <div
          className="flex gap-10  
       items-center"
        >
          <div className="form-control w-1/2  ">
            <label className="label">
              <span className="label-text"> Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2  ">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                placeholder="Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div
          className="flex gap-10
       items-center"
        >
          <div className="form-control w-1/2   ">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="supplier"
                defaultValue={supplier}
                name="supplier"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <div className="form-control w-1/2 ">
            <label className="label">
              <span className="label-text"> Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                placeholder="Taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div
          className="flex gap-10
       items-center"
        >
          <div className="form-control w-1/2 ">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2 ">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="">
              <input
                type="url"
                name="photo"
                defaultValue={photo}
                placeholder="Photo"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <button
            type="submit"
            className="w-full mt-5 rounded-sm bg-[#D2B48C] py-1 font-semibold  text-xl"
          >
            Update coffee
          </button>
        </div>
      </form>
    </div>
  );
};

UpdateCoffee.propTypes = {};

export default UpdateCoffee;
