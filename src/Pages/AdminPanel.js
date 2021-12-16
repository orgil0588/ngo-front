/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";

function AdminPanel() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [news, setNews] = useState(false);
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [content, setContent] = useState();
  const [image, setImage] = useState();
  const [date, setDate] = useState();
  const [datas, setDatas] = useState([]);
  const [link, setLink] = useState();
  //
  // if (localStorage.getItem("token") === "nFnuhAHa1tZQlz7A8kANLgxLiTW2") {
  //   setToken("true");
  // } else {
  //   setToken("false");
  // }
  // console.log(token);
  useEffect(() => {
    axios
      .get(
        "https://ngo-v1-322e0-default-rtdb.asia-southeast1.firebasedatabase.app/news.json"
      )
      .then((res) => {
        let entries = Object.entries(res.data);

        setDatas(entries.reverse());
      })
      .catch((err) => console.log(err));
  }, []);

  const logOut = () => {
    localStorage.removeItem("token");
    window.history.back();
  };
  const addNews = (e) => {
    e.preventDefault();

    const newsData = {
      title: title,
      category: category,
      content: content,
      image: image,
      createdAt: date,
    };
    axios
      .post(
        `https://ngo-v1-322e0-default-rtdb.asia-southeast1.firebasedatabase.app/news.json?auth=DhieM1qQLnEpeyz8X8RBNskWWPA8NIt7R4j8nhd5`,
        newsData
      )
      .then((res) => setNews(false))
      .catch((err) => console.log(err));
    // window.location.reload();
  };

  const deleteHandler = () => {
    axios
      .delete(
        `https://ngo-v1-322e0-default-rtdb.asia-southeast1.firebasedatabase.app/news/${id}.json?auth=DhieM1qQLnEpeyz8X8RBNskWWPA8NIt7R4j8nhd5`
      )
      .then((res) => alert("Success"))
      .catch((err) => alert(err));
  };

  return (
    <div className="container w-full mx-auto">
      {/* {token === true ? <Redirect to="/adminPanel" /> : <Redirect to="/" />} */}
      {token !== "nFnuhAHa1tZQlz7A8kANLgxLiTW2" && <Redirect to="/" />}
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
            <label className="mt-4 ">Гарчиг</label>
            <input
              type="text"
              className="border border-black p-2 "
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className="mt-4 ">Категори</label>
            <select
              name="cars"
              id="cars"
              className="border border-black p-2"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Хадгаламж">Хадгаламж</option>
              <option value="Зээл">Зээл</option>
              <option value="Хөрөнгө оруулалт">Хөрөнгө оруулалт</option>
            </select>

            <label className="mt-4 "> Content </label>
            <textarea
              type="text"
              className="border border-black p-2 h-60"
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <label className="mt-4 "> Image </label>
            <div
              className="text-red-400 bg-red-400 bg-opacity-20 py-2 px-4 mt-4 cursor-pointer"
              onClick={() => {
                window.open(
                  "https://codebeautify.org/image-to-base64-converter"
                );
              }}
            >
              https://codebeautify.org/image-to-base64-converter - энэ site-руу
              зургаа upload хийгээд BASE64 STRING хэсгийг хуулж тавьна.
            </div>
            <input
              type="text"
              placeholder="Image"
              className="border border-black p-2 mt-4 "
              onChange={(e) => setImage(e.target.value)}
            />
            <label className="mt-4 ">Он сар</label>

            <input
              type="date"
              className="border border-black p-2 mt-4 "
              onChange={(e) => setDate(e.target.value)}
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
        <div className="w-full mx-auto mt-20 md:w-10/12 lg:w-8/12">
          {datas.map((e, index) => {
            return (
              <div
                className="flex flex-col mt-10 justify-between cursor-pointer text-sm md:flex-row  md:text-lg"
                onClick={() => {
                  setLink(index);
                }}
              >
                <div className=" bg-red-400 ">
                  <img
                    className="w-auto  md:h-20 mx-auto"
                    src={`data:image/png;base64,${e[1].image}`}
                  />
                </div>

                <div className="w-10/12 flex flex-col justify-between  md:ml-4">
                  <div className="flex justify-between text-primary-gray ">
                    <div className="uppercase md:mr-40">{e[1].category}</div>
                    <div className="">{e[1].createdAt}</div>
                  </div>
                  <div className="text-primary-dark text-xl font-medium">
                    {e[1].title}
                  </div>
                  <div></div>
                </div>

                <div onClick={() => setId(e[0])}>
                  <div
                    onClick={deleteHandler}
                    className="text-red-400 w-8 h-8 p-1 bg-red-400 bg-opacity-30 rounded-md ml-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="mx-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}

      {datas.length === 0 && (
        <div className="text-center">Мэдээ хэсэг хоосон байна.</div>
      )}
    </div>
  );
}

export default AdminPanel;
