import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import './AddServices.css'

const AddServices = () => {
  const { register, handleSubmit, reset } = useForm();
  
  const onSubmit = (data) => {

    axios.post('https://salty-hamlet-26022.herokuapp.com/services', data)
    .then(res => {
        if(res.data.insertedId){
          alert('Submited Successfully');
          reset();
        }
    })
  };

  return (
    <div className="body">
      <h2 className="text-center my-5 text-warning">Add Services</h2>
      <form  className="d-flex flex-column w-50 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <input className="mb-3 border border-2 rounded-3" {...register("placeName", {required: true})} placeholder="Place Name" />
        <input className="mb-3 border border-2 rounded-3" {...register("serviceName", {required: true})} placeholder="Service Name" />
        <input className="mb-3 border border-2 rounded-3" {...register("imgUrl", {required: true})} placeholder="Add image url" />
        <input className="mb-3 border border-2 rounded-3" type="number" {...register("price", {required: true})} placeholder="Add price" />
        <textarea className="mb-3 border border-2 rounded-3" {...register("discription", {required: true})} placeholder="Add Discription" />
        <input className="mb-3 btn btn-warning mx-auto" value='Add Your Service' type="submit" />
      </form>
    </div>
  );
};

export default AddServices;
