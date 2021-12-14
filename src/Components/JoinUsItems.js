import React from "react";

function JoinUsItems() {
  return (
    <div className="flex flex-col bg-primary-dark p-10 mt-40  shadow-2xl md:flex-row ">
      <div className="w-full text-center mx-auto md:mx-0 md:text-left md:w-8/12">
        <div className="font-semibold text-xl md:text-3xl text-primary-white">
          Бидэнтэй нэгдэх
        </div>
        <div className="w-full  mt-4 text-primary-gray md:w-10/12">
          Бид ашгийн төлөө бус, нийгэмд үйлчилдэг төрийн бус байгууллагын хувьд
          гишүүнээр элсэхийг хүссэн хүн бүрийг нээлттэй урьж байна. <br />
          Манай гишүүн болсноор давхар “Хүртээмжтэй Хөгжил” хадгаламж, зээлийн
          хоршооны гишүүн болж санхүүгийн шинэлэг үйлчилгээг илүү тааламжтай
          нөхцлөөр авах, санхүү, эдийн засгийн мэдлэг, чадамжаа нэмэгдүүлэх
          аливаа арга хэмжээнд оролцох зэрэг боломж бүрдэнэ.
        </div>
      </div>
      <div className="w-full md:w-6/12">
        <form className="flex flex-col">
          <label
            for="name"
            className=" font-medium text-md md:text-lg text-primary-white"
          >
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
