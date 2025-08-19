import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCoffe = () => {
  // Initial state for the coffee form
  const [coffee, setCoffee] = useState({
    coffeeName: "",
    coffeeTitle: "",
    coffeeDescription: "",
    prices: "",
  });

  const navigate=useNavigate();

  // Handle change for all inputs
  const handleChange = (e) => {
    // Update the respective field in the form state
    setCoffee({ ...coffee, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault(); 


    // POST request server add coffe Item

       fetch("http://localhost:3000/cofeadd", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(coffee),
            })
            .then((res) => res.json())
            .then((data) => console.log(data));

        // reset input fild
            setCoffee({
            coffeeName: "",
            coffeeTitle: "",
            coffeeDescription: "",
            prices: "",
        })

        navigate('/coffe')


  };

  return (
    <div>
      <h1 className="text-center text-green-500 text-4xl font-bold my-6">
        Add Coffee
      </h1>

      <form
        className="flex flex-col items-center justify-center space-y-4"
        onSubmit={handleSubmit}
      >
        <input
          className="input input-neutral"
          placeholder="Coffee Name"
          onChange={handleChange}
          value={coffee.coffeeName}
          type="text"
          name="coffeeName"
          id="coffeeName"
        />

        <input
          className="input input-neutral"
          placeholder="Coffee Title"
          onChange={handleChange}
          value={coffee.coffeeTitle}
          type="text"
          name="coffeeTitle"
          id="coffeeTitle"
        />

        <input
          className="input input-neutral"
          placeholder="Coffee Description"
          onChange={handleChange}
          value={coffee.coffeeDescription}
          type="text"
          name="coffeeDescription"
          id="coffeeDescription"
        />

        <input
          className="input input-neutral"
          placeholder="Coffee Price"
          onChange={handleChange}
          value={coffee.prices}
          type="number"
          name="prices"
          id="prices"
        />

        <button
          className="py-4 px-8 rounded-md text-white hover:text-white hover:bg-black text-center bg-green-500 cursor-pointer"
          type="submit"
        >
          Add Coffee
        </button>
      </form>
    </div>
  );
};

export default AddCoffe;
