import React from "react";
import PrimaryBtn from "./PrimaryBtn";
function whatWeDo(props) {
  return (
    <div className="w-full mx-auto mt-20" >
      
        <div className="">
          <div className="section-title">
            Бид юу хийдэг вэ ?
          </div>
          <div className="font-medium text-md w-full text-center mx-auto my-4 text-primary-gray md:w-10/12 md:text-lg lg:w-8/12 xl:w-5/12">
            Бид орчин үеийн санхүүгийн систем хүртээмжгүй байгаа гэр бүл, жижиг
            бизнес эрхлэгчид, хамт олныг дэмжиж тэдний санхүүгийн чадамжийг
            дээшлүүлэх чиглэлээр дараах арга барилаар ажилладаг.
          </div>
        </div>
        <div className="flex flex-col lg:flex-row  justify-evenly ">
          <div className="w-full mx-auto md:w-10/12 lg:w-8/12 xl:4/12   text-center my-4">
            <div>Icon</div>
            <div className="text-xl text-primary-dark font-semibold">
              Title
            </div>
            <div className="mt-8 text-md text-primary-gray md:text-lg xl:w-8/12 mx-auto  ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
          <div className="w-full mx-auto md:w-10/12 lg:w-8/12 xl:4/12 text-center my-4">
            <div>Icon</div>
            <div className="text-xl text-primary-dark font-semibold">
              Title
            </div>
            <div className="mt-8 text-md text-primary-gray md:text-lg xl:w-8/12 mx-auto ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-evenly">
          <div className="w-full mx-auto md:w-10/12 lg:w-8/12 xl:4/12 text-center my-4">
            <div>Icon</div>
            <div className="text-xl text-primary-dark font-semibold mt-4">
              Title
            </div>
            <div className="mt-8 text-md text-primary-gray md:text-lg xl:w-8/12 mx-auto ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
          <div className="w-full mx-auto md:w-10/12 lg:w-8/12 xl:4/12 text-center my-4">
            <div>Icon</div>
            <div className="text-xl text-primary-dark font-semibold mt-4">
              Title
            </div>
            <div className="mt-8 text-md text-primary-gray md:text-lg xl:w-8/12 mx-auto ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
        </div>
        <div className={`mx-auto text-center my-4 ${props.hidden}`}   >
          <PrimaryBtn text="Дэлгэрэнгүй" />
        </div>
     
    </div>
  );
}

export default whatWeDo;
