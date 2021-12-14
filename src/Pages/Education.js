import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Container from "../Components/Container";
import BankSystem from "../Components/education/BankSystem";
import PersonalFinance from "../Components/education/PersonalFinance";
import Saving from "../Components/education/Saving";
import Loan from "../Components/education/Loan";
function Education() {
  const [link, setLink] = useState();

  console.log(link);
  return (
    <Container>
      <Navbar />
      <div className={`mt-20 ${link ? `hidden` : `block`}`}>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="mx-auto w-full text-center"
            onClick={() => {
              setLink("mongo-ba-bank-sanhuugiin-system");
            }}
          >
            <div className="h-20 w-20 bg-primary-blue mx-auto">Image 1</div>
            <div>
              МӨНГӨ БА БАНК <br /> САНХҮҮГИЙН СИСТЕМ
            </div>
          </div>

          <div
            className="mx-auto w-full text-center"
            onClick={() => {
              setLink("huwiin-sanhuugee-udirdah");
            }}
          >
            <div className="h-20 w-20 bg-primary-blue mx-auto">Image 1</div>
            <div>
              ХУВИЙН САНХҮҮГЭЭ <br /> УДИРДАХ
            </div>
          </div>

          <div
            className="mx-auto w-full text-center"
            onClick={() => {
              setLink("hadgalamj");
            }}
          >
            <div className="h-20 w-20 bg-primary-blue mx-auto">Image 1</div>
            <div>Хадгаламж</div>
          </div>

          <div
            className="mx-auto w-full text-center"
            onClick={() => {
              setLink("zeel");
            }}
          >
            <div className="h-20 w-20 bg-primary-blue mx-auto">Image 1</div>
            <div>ЗЭЭЛ</div>
          </div>

          <div
            className="mx-auto w-full text-center"
            onClick={() => {
              setLink("horongo-oruulalt");
            }}
          >
            <div className="h-20 w-20 bg-primary-blue mx-auto">Image 1</div>
            <div>ХӨРӨНГӨ ОРУУЛАЛТ</div>
          </div>

          <div
            className="mx-auto w-full text-center"
            onClick={() => {
              setLink("daatgal");
            }}
          >
            <div className="h-20 w-20 bg-primary-blue mx-auto">Image 1</div>
            <div>ДААТГАЛ</div>
          </div>
        </div>
      </div>
      {link === "mongo-ba-bank-sanhuugiin-system" && (
        <div  className="flex justify-between">
          <div
            onClick={() => {
              setLink("");
            }}  
            className="mr-8 cursor-pointer "
          >
            Буцах
          </div>
          <BankSystem />
          <div>
            
          </div>
        </div>
      )}
      {link === "huwiin-sanhuugee-udirdah" && (
        <div>
          <div
            onClick={() => {
              setLink("");
            }}
          >
            back
          </div>
        <PersonalFinance/>
        </div>
      )}
      {link === "hadgalamj" && (
        <div>
          <div
            onClick={() => {
              setLink("");
            }}
            className="mr-8 cursor-pointer "
          >
            back
          </div>
          <div><Saving /></div>
        </div>
      )}
      {link === "zeel" && (
        <div>
          <div
            onClick={() => {
              setLink("");
            }}
            className="mr-8 cursor-pointer "
          >
            back
          </div>
          <div>
            <Loan/>
          </div>
        </div>
      )}
      {link === "horongo-oruulalt" && (
        <div>
          <div
            onClick={() => {
              setLink("");
            }}
            className="mr-8 cursor-pointer "
          >
            back
          </div>
          <div>horongo-oruulalt</div>
        </div>
      )}
      {link === "daatgal" && (
        <div>
          <div
            onClick={() => {
              setLink("");
            }}
            className="mr-8 cursor-pointer "
          >
            back
          </div>
          <div>daatgal</div>
        </div>
      )}
    </Container>
  );
}

export default Education;
