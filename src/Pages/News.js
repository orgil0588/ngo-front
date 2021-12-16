import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Container from "../Components/Container";
import axios from "axios";
import NewsDetail from "../Components/NewsDetail";
import Loading from "../Components/Loading"
function News() {
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
        let entries = Object.entries(res.data);
      
        setDatas(entries.reverse());
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Container>
        <Navbar />
        <div className="section-title mt-4">Нийтлэлүүд</div>
        {loading === true && <div className="flex justify-center items-center"><Loading/></div>}
        
          <div className="w-full mx-auto mt-20 md:w-10/12 grid grid-cols-3 gap-4">
            {datas.map((e, index) => {
              return ( 
                <div
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
                        <div className="uppercase sm:mr-40">
                          {e[1].category}
                        </div>

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
     
      </Container>
    </div>
  );
}

export default News;
