"use client";
import { Field, Form, Formik, useFormik } from "formik";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import DropDownList from "./DropDownList";
import Link from "next/link";
import { DM_Sans } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const dm_sans = DM_Sans({
    subsets: ["latin"],
    weight: ["500", "400"],
  });

const ContactUsForm = () => {
  var hideList = "hidden";
  const buttonClick = () => {};

  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={() => {
          console.log("Submitted");
        }}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit} className="">
            <div className="flex flex-row gap-4">
              <div className="flex flex-col ">
                <label
                  htmlFor="firstName"
                  className={`leading-10 text-base text-gray-600 ${inter.className}`}
                >
                  First Name
                </label>
                <Field
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  className="w-full bg-white rounded-[10px] border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="lastName"
                  className={`leading-10 text-base text-gray-600 ${inter.className}`}
                >
                  Last Name
                </label>
                <Field
                  id="lastName"
                  name="lastName"
                  className="w-full bg-white rounded-[10px] border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="w-full flex flex-col pt-1">
              <label
                htmlFor="email"
                className={`leading-10 text-base text-gray-600 ${inter.className}`}
              >
                Email
              </label>
              <Field
                id="email"
                name="email"
                placeholder="you@company.com"
                type="email"
                className="w-full bg-white rounded-[10px] border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className={`leading-10 text-base text-gray-600 ${inter.className}`}
              >
                Phone Number
              </label>
              <div className="w-full gap-2 flex flex-row bg-white rounded-[10px] border border-gray-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
                <Field component="select" name="countryCode" className='border-0 border-transparent w-18 focus-visible:border-0 active:border-0 focus-visible:border-transparent'>
                  <option>US</option>
                  <option>UK</option>
                  <option>EU</option>
                  <option>FR</option>
                </Field>
                <Field
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  component="input"
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-white rounded-[10px] border border-transparent text-base outline-none text-gray-700 py-1 px-2 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></Field>
              </div>
              <div className="flex flex-col mb-4 pt-2">
                <label
                  htmlFor="message"
                  className={`leading-10 text-base text-gray-600 ${inter.className}`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded-[10px] border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="flex flex-row gap-2">
               <Field type='checkbox' name='check'></Field>  <p className={`${dm_sans.className} text-[#8C8C8C] text-base`}>You agree to our friendly <Link href='/' className={`${inter.className} text-[#0F9FD6] text-base underline`}>privacy policy.</Link></p>
            </div>
            <div className="flex justify-center items-center py-6">
            <button type="submit" className="bg-[#0F9FD6] p-2 px-16 rounded-[10px] text-white font-semibold">Send</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactUsForm;
