"use client";

import { useState, useEffect } from "react";


export default function BillingDetails({ onSubmit }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    phone: "",
    email: "",
    saveInfo: false,
  });

  
  const [errors, setErrors] = useState({});

   useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("billingData"));
    if (saved) setForm(saved);
  }, []);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };


  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.address.trim()) newErrors.address = "Address is required";
    if (!form.city.trim()) newErrors.city = "City is required";
    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    if (form.saveInfo) {
      localStorage.setItem("billingData", JSON.stringify(form));
    } else {
      localStorage.removeItem("billingData");
    }

    onSubmit(form);
  };


  return (
   <form className=" sm:text-left  sm:mx-0 space-y-4 p-4">
      <h2 className="text-xl font-semibold mb-8">Billing Details</h2>

      <div>
        <label className="block mb-1">First Name</label>
        <input
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          className="w-full bg-gray-100 rounded px-2 py-1"
        />
        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
      </div>

      <div>
        <label className="block mb-1">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          className="w-full bg-gray-100 rounded px-2 py-1"
        />
        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
      </div>

      <div>
        <label className="block mb-1">Address</label>
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          className="w-full bg-gray-100 rounded px-2 py-1"
        />
        {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
      </div>

      <div>
        <label className="block mb-1">City</label>
        <input
          type="text"
          name="city"
          value={form.city}
          onChange={handleChange}
          className="w-full bg-gray-100 rounded px-2 py-1"
        />
        {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
      </div>


      <div>
        <label className="block mb-1">Phone</label>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full bg-gray-100 rounded px-2 py-1"
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>

      <div>
        <label className="block mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full bg-gray-100 rounded px-2 py-1"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

 <div className="flex items-center gap-2">
  <input
    type="checkbox"
    name="saveInfo"
    checked={form.saveInfo}
    onChange={handleChange}
    className="w-4 h-4 accent-red-500" 
  />
  <label htmlFor="saveInfo" className="text-sm">
    Save this information for faster check-out next time
  </label>
</div>

    </form>
  );
}
