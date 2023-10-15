import React from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      category,
      taste,
      details,
      photo,
    };
    console.log(newCoffee);

    //send to server
    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="container mx-auto py-20 bg-[#F4F3F0]">
      <h2 className="text-center my-10 text-2xl font-bold">Add New coffee</h2>
      <form onSubmit={handleAddCoffee} className="max-w-6xl mx-auto font-bold">
        <div
          className="flex gap-10  
       items-center"
        >
          <div className="form-control w-1/2  ">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
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
                placeholder="Photo"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <button
            type="submit"
            className="w-full mt-5 rounded-sm bg-[#D2B48C] py-1 font-semibold  text-xl"
          >
            Add new coffee
          </button>
        </div>
      </form>
    </div>
  );
};

AddCoffee.propTypes = {};

export default AddCoffee;
