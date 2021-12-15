import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";

function AdminPanel() {
  const [token, setToken] = useState(localStorage.token);
  const [news, setNews] = useState(false);
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [image, setImage] = useState();
  const [datas, setDatas] = useState([]);
  const [link, setLink] = useState();

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
  console.log(datas);
  const logOut = () => {
    localStorage.removeItem("token");
    console.log(window.history.back());
  };
  const addNews = (e) => {
      e.preventDefault()

    const newsData = {
      title: title,
      content: content,
      image: image,
    };
    axios
      .post(
        `https://ngo-v1-322e0-default-rtdb.asia-southeast1.firebasedatabase.app/news.json?auth=DhieM1qQLnEpeyz8X8RBNskWWPA8NIt7R4j8nhd5`,
        newsData
      )
      .then((res) => setNews(false)
      
      
      
      )
      .catch((err) => console.log(err));
    console.log(title, content);
  };

  return (
    <div className="container w-full mx-auto">
      {!token && <Redirect to="/" />}
      <header className="flex justify-around py-4 ">
        <div
          className={`cursor-pointer hover:bg-primary-blue py-2 px-4 ${
            news ? `bg-primary-blue` : `bg-transparent`
          }`}
          onClick={() => {
            setNews(!news);
          }}
        >
          Add News
        </div>
        <div
          className="cursor-pointer hover:bg-primary-blue py-2 px-4"
          onClick={logOut}
        >
          Log out{" "}
        </div>
      </header>

      {news === true ? (
        <div>
          <form className="flex flex-col justify-cetner">
            <label className="mt-4 "> Title </label>
            <input
              type="text"
              className="border border-black p-2 "
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className="mt-4 "> Content </label>
            <textarea
              type="text"
              className="border border-black p-2  "
              onChange={(e) => setContent(e.target.value)}
            />
            <label className="mt-4 "> Image </label>
            <div
              className="text-red-400 bg-red-400 bg-opacity-20 py-2 px-4 mt-4 cursor-pointer"
              onClick={ () => {
                window.open(
                    "https://codebeautify.org/image-to-base64-converter"
                  )
              }}
            >
              https://codebeautify.org/image-to-base64-converter - энэ site-руу зургаа upload хийгээд BASE64 STRING хэсгийг хуулж тавьна. 
            </div>
            <input
              type="text"
              placeholder="Image"
              className="border border-black p-2 mt-4 "
              onChange={(e) => setImage(e.target.value)}
            />

            {/* {error && (
          <div className="py-2 px-6 bg-red-400 bg-opacity-10 text-red-400 font-semibold mt-10">
            {error}
          </div>
        )} */}
            {token && <Redirect to="/adminPanel" />}
            <input
              type="submit"
              value="Мэдээ нийтлэх"
              className=" my-4 bg-primary-blue text-white  py-3 cursor-pointer"
              onClick={addNews}
            />
          </form>
        </div>
      ) : (
        ""
      )}
      {news === false ? (
        <div>
          {datas.map((e, index) => {
            return (
              <Link to={`news/${e[0]}`}>
                <div
                  className="flex flex-col mt-10 justify-between cursor-pointer text-sm md:flex-row  md:text-lg"
                  onClick={() => {
                    setLink(index);
                  }}
                >
                  <div>
                    <img
                      className="w-full h-10 md:w-24 md:h-24"
                      src={`data:image/png;base64,${e[1].image}`}
                    />
                  </div>

                  <div className="flex flex-col justify-between md:ml-4">
                    <div className="flex justify-between text-primary-gray ">
                      <div className="uppercase md:mr-40">{e[1].category}</div>
                      {/* <div className="hidden  md:block">{e[1].createdAt}</div> */}
                    </div>
                    <div className="text-primary-dark font-medium">
                      {e[1].title}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        ""
      )}
      {
          datas.length === 0  && <div>Мэдээ хэсэг хоосон байна.</div>
      }
    </div>
  );
}

export default AdminPanel;
