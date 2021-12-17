import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function LatestNews() {
  const [datas, setDatas] = useState([]);
  const [link, setLink] = useState();
  const [detailImage, setDetailImage] = useState();
  const [detailCategory, setDetailCategory] = useState();
  const [detailTitle, setDetailTitle] = useState();
  const [detailCreatedAt, setDetailCreatedAt] = useState();
  const [detailContent, setDetailContent] = useState();
  const [loading, setLoading] = useState();
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://ngo-v1-322e0-default-rtdb.asia-southeast1.firebasedatabase.app/news.json"
      )
      .then((res) => {
        let entries = Object.entries(res.data).reverse();
        let arr = [];
        for (let i = 0; i < 6; i++) {
          arr.push(entries[i]);
        }

        setDatas(arr);

        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="section-title mt-10">Сүүлчийн нийтлэлүүд</div>
      <div className="w-full mx-auto mt-4 md:w-10/12 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-8">
        {datas.map((e, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setDetailImage(e[1].image);
                setDetailCategory(e[1].category);
                setDetailTitle(e[1].title);
                setDetailCreatedAt(e[1].createdAt);
                setDetailContent(e[1].content);

                setLink(e[0]);
              }}
              className=""
            >
              <Link to={`/news/${e[0]}`}>
                <div className="grid grid-cols-1 mt-10  cursor-pointer text-sm   ">
                  <img
                    className="h-56 w-full bg-contain bg-center"
                    src={`data:image/png;base64,${e[1].image}`}
                  />
                </div>

                <div className="w-full">
                  <div className="flex justify-between text-primary-gray my-1 text-xs ">
                    <div className="uppercase sm:mr-40">{e[1].category}</div>

                    <div className="">{e[1].createdAt}</div>
                  </div>
                  <div className="text-primary-dark text-lg font-bold">
                    {e[1].title}
                  </div>
                  <div></div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LatestNews;
