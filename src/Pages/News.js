import React, { useState, useEffect } from "react";
import data from "../data/news.json";
import Navbar from "../Components/Navbar"
import Container from "../Components/Container"
function News() {
  let link = window.location.href.split("/");
  console.log(link);
  const [title, setTitle] = useState("");
  useEffect(() => {
    data.map((el, index) => {
      if (el.id === link[4]) {
        setTitle(data[index].title);
      }
    });
  });

  return (
    <div>
      <Container>
      <Navbar />

     
      </Container>
    </div>
  );
}

export default News;
