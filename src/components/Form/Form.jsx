"use client";
import React, { useState } from "react";
import "./Form.css";
import SelectForm from "../SelectForm/SelectForm";
import ecllipse from "/public/images/svg/eclipse.svg";
import rectangle from "/public/images/svg/rectangle.svg";
import Image from "next/image";
import InputForm from "../InputForm/InputForm";

const Form = () => {
  const [page, setPage] = useState(true);
  const [formData, setFormData] = useState({});
  const next = (data) => {
    setFormData(data);
    console.log("form-data", data);
  };
  const submit = (data) => {
    console.log({ ...formData, ...data }, "hnhbhbgbgbh");
  };

  return (
    <div className="form-content flex flex-col gap-7">
      <div>
        <h2 className="form-headline">Let us Plan a</h2>
        <h3 className="form-subHeadline font-bold">Perfect Holiday for You.</h3>
      </div>
      {page ? (
        <SelectForm setPage={setPage} next={next} />
      ) : (
        <InputForm submit={submit} />
      )}
      {page == true ? (
        <div className="flex justify-center gap-1">
          <Image src={rectangle} alt="rectangle " />
          <Image src={ecllipse} alt="ecllipse" />
        </div>
      ) : (
        <div className="flex justify-center gap-1">
          <Image src={ecllipse} alt="ecllipse" />
          <Image src={rectangle} alt="rectangle " />
        </div>
      )}
    </div>
  );
};

export default Form;
