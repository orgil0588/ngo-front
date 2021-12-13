import React from "react";
import PrimaryBtn from "./PrimaryBtn";
import SecondaryBtn from "./SecondaryBtn";
function JoinUsItems() {
  return (
    <div className="flex flex-col bg-primary-dark p-10 mt-40  shadow-2xl md:flex-row ">
      <div className="w-full text-center mx-auto md:mx-0 md:text-left md:w-8/12">
        <div className="font-semibold text-xl md:text-3xl text-primary-white">
          Бидэнтэй нэгдэх
        </div>
        <div className="w-full  mt-4 text-primary-gray md:w-10/12">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
      </div>
      <div className="w-full md:w-6/12">
        <form className="flex flex-col">
          <label for="name" className=" font-medium text-md md:text-lg text-primary-white">
            {" "}
            Нэр
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Та өөрийн нэрээ бичнэ үү "
            className="border border-primary-white  pl-4 py-3 bg-transparent focus:outline-none focus:ring focus:ring-primary-white/50 "
          />

          <label
            for="number"
            className="mt-4 font-medium text-md md:text-lg text-primary-white  "
          >
            {" "}
            Утасны дугаар
          </label>
          <input
            type="text"
            id="number"
            name="number"
            placeholder="Та өөрийн утсаа бичнэ үү "
            className="border border-primary-white focus:outline-none focus:ring focus:ring-primary-white/50   pl-4 py-3 bg-transparent "
          />

          <input
            className="bg-primary-blue px-4 py-3 mt-4  font-medium text-primary-white shadow-2xl text-center cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring focus:ring-primary-white/50"
            value="Гишүүнээр элсэх"
          />
        </form>
      </div>
    </div>
  );
}

export default JoinUsItems;
