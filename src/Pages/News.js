import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Container from "../Components/Container";
import axios from "axios";
import NewsDetail from "../Components/NewsDetail";
function News() {
  const [datas, setDatas] = useState([]);
  const [link, setLink] = useState();
  const [detailImage, setDetailImage] = useState();
  const [detailCategory, setDetailCategory] = useState();
  const [detailTitle, setDetailTitle] = useState();
  const [detailCreatedAt, setDetailCreatedAt] = useState();
  const [detailContent, setDetailContent] = useState();

  useEffect(() => {
    axios
      .get(
        "https://ngo-v1-322e0-default-rtdb.asia-southeast1.firebasedatabase.app/news.json"
      )
      .then((res) => {
        let entries = Object.entries(res.data);
        setDatas(entries);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Container>
        <Navbar />

        {window.location.pathname.length < 10 ? (
          <div className="w-full mx-auto mt-20 md:w-10/12 lg:w-6/12">
            {datas.map((e, index) => {
              return (
                <Link to={`/news/${e[0]}`}>
                  <div className="flex flex-col mt-10 justify-between cursor-pointer text-sm md:flex-row  md:text-lg">
                    <div
                      onClick={() => {
                        setDetailImage(e[1].image);
                        setDetailCategory(e[1].category);
                        setDetailTitle(e[1].title);
                        setDetailCreatedAt(e[1].title);
                        setDetailContent(e[1].content);

                        setLink(e[0]);
                      }}
                    
                    >
                      <img
                        className="w-full h-auto md:w-80"
                        src={`data:image/png;base64,${e[1].image}`}
                      />
                    </div>

                    <div className="flex flex-col justify-between md:ml-4">
                      <div className="flex justify-between text-primary-gray ">
                        <div className="uppercase md:mr-40">
                          {e[1].category}
                        </div>
                    
                        <div className="hidden  md:block">{e[1].createdAt}</div>
                      </div>
                      <div className="text-primary-dark text-2xl  font-semibold">
                        {e[1].title}
                      </div>
                      <div></div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div>
            <div onClick={() => window.history.back()}>Буцах</div>
            <NewsDetail
              image={detailImage}
              category={detailCategory}
              creadtedAt={detailCreatedAt}
              content={detailContent}
            />
          </div>
        )}
      </Container>
    </div>
  );
}

export default News;
