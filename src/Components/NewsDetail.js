import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Container from "./Container";
import Footer from "../Components/Footer";
function NewsDetail() {
  const [data, setData] = useState();

  let dummy = window.location.pathname.split("/")[2];
  useEffect(() => {
    axios
      .get(
        `https://ngo-v1-322e0-default-rtdb.asia-southeast1.firebasedatabase.app/news/${dummy}.json`
      )
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Container>
        <Navbar />

        {data && (
          <div className="w-full mx-auto mt-20 md:w-10/12 lg:w-8/12 xl:w-6/12">
            <div className="">
              <div className="text-2xl my-4 font-bold text-primary-dark">
                {data.data.title}
              </div>
              <div className="flex justify-between text-primary-gray px-4 my-4">
                <div>{data.data.category}</div>
                <div>{data.data.createdAt}</div>
              </div>
              <img
                className="w-full mb-4"
                src={`data:image/jpeg;base64,${data.data.image}`}
              />
              <div
                dangerouslySetInnerHTML={{ __html: data.data.content }}
              ></div>
            </div>
          </div>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default NewsDetail;
