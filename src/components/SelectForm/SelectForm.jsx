"use client";

import React from "react";
import Image from "next/image";
import location from "/public/images/svg/location.svg";
import tickSquare from "/public/images/svg/tick-square.svg";
import calendar from "/public/images/svg/calendar.svg";
import person from "/public/images/svg/person.svg";
import dropDown from "/public/images/svg/drop-down.svg";

import { useForm } from "react-hook-form";

const SelectForm = ({ setPage, next }) => {
  const Destinations = [
    { id: 1, value: "maldives", destination: "Maldives" },
    { id: 2, value: "srilanka", destination: "Srilanka" },
  ];

  const Months = [
    { id: 1, value: "january", month: "January" },
    { id: 2, value: "february", month: "February" },
    { id: 3, value: "march", month: "March" },
    { id: 4, value: "april", month: "April" },
    { id: 5, value: "may", month: "May" },
    { id: 6, value: "june", month: "June" },
    { id: 7, value: "july", month: "July" },
    { id: 8, value: "august", month: "August" },
    { id: 9, value: "september", month: "september" },
    { id: 10, value: "october", month: "October" },
    { id: 11, value: "november", month: "November" },
    { id: 12, value: "december", month: "December" },
  ];

  const Durations = [
    { id: 1, value: "3 Nights/4 Days", duration: "3 Nights/4 Days" },
    { id: 2, value: "4 Nights/5 Days", duration: "4 Nights/5 Days" },
    { id: 3, value: "5 Nights/6 Days", duration: "5 Nights/6 Days" },
  ];

  const Persons = [
    { id: 1, value: "1", number: "1" },
    { id: 2, value: "2", number: "2" },
    { id: 3, value: "3", number: "3" },
    { id: 4, value: "4", number: "4" },
    { id: 5, value: "5", number: "5" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    next(data);
    setPage(false);

    console.log("select-form", data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(formSubmit)}>
        <div className="flex flex-col gap-9">
          <div className="select-box flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="form-icons">
                <Image src={location} alt="location" />
              </span>
              <div className="flex flex-col gap-0.5">
                <label
                  htmlFor="destination"
                  className="query-title font-semibold"
                >
                  Select Destination
                </label>
                <select
                  className="query-type"
                  name="destination"
                  defaultValue=""
                  {...register("destination", {
                    required: "Destination is Required",
                  })}
                  aria-invalid={errors.destination ? "true" : "false"}
                  aria-describedby="destination-error"
                >
                  <option disabled hidden value="">
                    Select Destination
                  </option>
                  {Destinations.map((data) => (
                    <option key={data.id} value={data.value}>
                      {data.destination}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <Image src={dropDown} alt="dropdown" />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="form-icons">
                <Image src={tickSquare} alt="tickSquare" />
              </span>
              <div className="flex flex-col gap-0.5">
                <label htmlFor="month" className="query-title font-semibold">
                  Travel Month
                </label>
                <select
                  className="query-type"
                  name="month"
                  defaultValue=""
                  {...register("month", {
                    required: "Month is Required",
                  })}
                  aria-invalid={errors.month ? "true" : "false"}
                  aria-describedby="month-error"
                >
                  <option disabled hidden value="">
                    Select Month
                  </option>
                  {Months.map((data) => {
                    return (
                      <option key={data.id} value={data.value}>
                        {data.month}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div>
              <Image src={dropDown} alt="dropdown" />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="form-icons">
                <Image src={calendar} alt="calendar" />
              </span>
              <div className="flex flex-col gap-0.5">
                <label htmlFor="duration" className="query-title font-semibold">
                  Select Duration
                </label>
                <select
                  className="query-type"
                  name="days"
                  defaultValue=""
                  {...register("days", {
                    required: "No. of days are Required",
                  })}
                  aria-invalid={errors.days ? "true" : "false"}
                  aria-describedby="days-error"
                >
                  <option disabled hidden value="">
                    Select Duration
                  </option>
                  {Durations.map((data) => {
                    return (
                      <option key={data.id} value={data.value}>
                        {data.duration}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div>
              <Image src={dropDown} alt="dropdown" />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="form-icons">
                <Image src={person} alt="person" />
              </span>
              <div className="flex flex-col gap-0.5">
                <label htmlFor="persons" className="query-title font-semibold">
                  Number of Persons
                </label>
                <select
                  className="query-type"
                  name="persons"
                  defaultValue=""
                  {...register("persons", {
                    required: "No. of persons required",
                  })}
                  aria-invalid={errors.persons ? "true" : "false"}
                  aria-describedby="persons-error"
                >
                  {Persons.map((data) => {
                    return (
                      <option key={data.id} value={data.value}>
                        {data.number}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div>
              <Image src={dropDown} alt="dropdown" />
            </div>
          </div>
          {(errors.destination ||
            errors.month ||
            errors.days ||
            errors.persons) && (
            <span role="alert" className="error-message text-center">
              {errors.destination?.message ||
                errors.month?.message ||
                errors.days?.message ||
                errors.persons?.message}
            </span>
          )}
          <div className="flex justify-center">
            <button className="send-enquiry-btn text-white text-base font-semibold">
              Next
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SelectForm;
