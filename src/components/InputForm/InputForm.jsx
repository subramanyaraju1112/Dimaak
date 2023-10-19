import Image from "next/image";
import React from "react";
import person from "/public/images/svg/person.svg";

import { useForm } from "react-hook-form";

const InputForm = ({ submit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    submit(data);
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(formSubmit)}>
        <div className="flex flex-col gap-9">
          <div className="select-box flex items-center">
            <div className="flex items-center gap-2">
              <span className="form-icons">
                <Image src={person} alt="location" />
              </span>
              <input
                className="input-field"
                type="text"
                name="name"
                placeholder="Name"
                {...register("name", { required: "Name is required" })}
              />
            </div>
          </div>
          <div className="select-box flex items-center">
            <div className="flex items-center gap-2">
              <span className="form-icons">
                <Image src={person} alt="location" />
              </span>
              <input
                className="input-field"
                type="email"
                name="email"
                placeholder="Email"
                {...register("email", { required: "Email is required" })}
              />
            </div>
          </div>
          <div className="select-box flex items-center">
            <div className="flex items-center gap-2">
              <span className="form-icons">
                <Image src={person} alt="location" />
              </span>
              <input
                className="input-field"
                type="number"
                name="whatsapp"
                placeholder="Whatsapp Number"
                {...register("whatsapp", {
                  required: "Whatsapp Number is required",
                })}
              />
            </div>
          </div>
          {(errors.name || errors.email || errors.whatsapp) && (
            <span role="alert" className="error-message text-center">
              {errors.name?.message ||
                errors.email?.message ||
                errors.whatsapp?.message}
            </span>
          )}
          <div className="flex justify-center">
            <button className="send-enquiry-btn text-white text-base font-semibold">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default InputForm;
