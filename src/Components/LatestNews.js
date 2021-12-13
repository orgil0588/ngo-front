import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import PrimaryBtn from "./PrimaryBtn";
import data from "../data/news.json";
function LatestNews() {
  let datas = [];
  for (let i = 0; i < 5; i++) {
    datas.push(data[i]);
  }

  const [link, setLink] = useState(null);

  return (
    <Container>
      <div className="w-6/12 mx-auto mt-20">
        <div className="section-title ">Сүүлчийн нийтлэлүүд</div>
        {datas.map((el, index) => {
          return (
            <Link to={`news/${el.id}`}>
              <div
                className="flex mt-10 justify-between cursor-pointer text-sm md:text-lg"
                onClick={() => {
                  setLink(index);
                }}
              >
                <div className="bg-primary-gray w-24 h-24">{el.image}</div>
                <div className="flex flex-col justify-between ml-4">
                  <div className="flex justify-between text-primary-gray ">
                    <div className="uppercase mr-40">{el.category}</div>
                    <div className="hidden  md:block">{el.createdAt}</div>
                  </div>
                  <div className="text-primary-dark font-medium">
                    {el.title}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <Link to="news">
        <div className="text-center my-4">
          <PrimaryBtn text="Бүх мэдээг үзэх" />
        </div>
      </Link>

      {link !== null && <div>{datas[link].title}</div>}
    </Container>
  );
}

export default LatestNews;
